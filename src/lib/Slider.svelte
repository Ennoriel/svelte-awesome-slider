<script lang="ts">
	/** min value of the slider */
	export let min: string | number = 0;
	$: _min = typeof min === 'string' ? parseFloat(min) : min;

	/** max value of the slider */
	export let max: string | number = 100;
	$: _max = typeof max === 'string' ? parseFloat(max) : max;

	/** step value of the slider */
	export let step: string | number = 1;
	$: _step = typeof step === 'string' ? parseFloat(step) : step;

	/** value of the slider */
	export let value: number = 50;

	/** method to convert the current value to a string representation of the value for the aria-value props */
	export let ariaValueText: (current: number) => string = (current) => current.toString();

	/** input name of the slider */
	export let name: string | undefined = undefined;

	/** direction of the slider */
	export let direction: 'horizontal' | 'vertical' = 'horizontal';

	/** if true, the min and max values will be reversed */
	export let reverse: boolean = false;

	/** disables mouse events */
	export let keyboardOnly: boolean = false;

	let isDragging = false;
	let slider: HTMLDivElement | undefined = undefined;

	function bound(value: number) {
		const ratio = 1 / _step;
		const rounded = Math.round(value * ratio) / ratio;
		return Math.max(_min, Math.min(_max, rounded));
	}

	function keyHandler(e: KeyboardEvent) {
		const inc = e.shiftKey ? _step * 10 : _step;
		if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
			value += inc;
		} else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
			value -= inc;
		} else if (e.key === 'Home') {
			value = _min;
		} else if (e.key === 'End') {
			value = _max;
		} else if (e.key === 'PageUp') {
			value += _step * 10;
		} else if (e.key === 'PageDown') {
			value -= _step * 10;
		}
		value = bound(value);
	}

	const a = {
		horizontal: {
			clientSize: 'clientWidth',
			offset: 'left',
			client: 'clientX'
		},
		vertical: {
			clientSize: 'clientHeight',
			offset: 'top',
			client: 'clientY'
		}
	} as const;

	function updateValue(e: { clientX: number; clientY: number }) {
		const clientWidth = slider?.[a[direction].clientSize] || 120;
		const sliderOffsetX = slider?.getBoundingClientRect()[a[direction].offset] || 0;

		let offsetX = e[a[direction].client] - sliderOffsetX;
		if (direction === 'vertical') offsetX = -1 * offsetX + clientWidth;

		if (reverse) {
			value = _max - (offsetX / clientWidth) * (_max - _min);
		} else {
			value = (offsetX / clientWidth) * (_max - _min) + _min;
		}

		value = bound(value);
	}

	function jump(e: MouseEvent) {
		updateValue(e);
		isDragging = true;
	}

	function drag(e: MouseEvent) {
		if (isDragging) updateValue(e);
	}

	function endDrag() {
		isDragging = false;
	}

	function touch(e: TouchEvent) {
		e.preventDefault();
		updateValue({
			clientX: e.changedTouches[0].clientX,
			clientY: e.changedTouches[0].clientY
		});
	}

	$: position = (((value - _min) / (_max - _min)) * 1).toFixed(4);
</script>

<svelte:window on:mousemove={drag} on:mouseup={endDrag} />

<div
	class="slider"
	class:reverse
	role="slider"
	aria-orientation={direction}
	aria-valuemax={_max}
	aria-valuemin={_min}
	aria-valuenow={value}
	aria-valuetext={ariaValueText(value)}
	tabindex="0"
	bind:this={slider}
	style:--position={position}
	on:keydown={keyHandler}
	on:mousedown|self={keyboardOnly ? undefined : jump}
	on:touchstart={keyboardOnly ? undefined : touch}
	on:touchmove={keyboardOnly ? undefined : touch}
	on:touchend={keyboardOnly ? undefined : touch}
>
	<div class="track" />
	<div class="thumb" />
</div>

{#if name}
	<input type="hidden" {name} {value} />
{/if}

<!-- @component

**Props**
@prop min: string | number = 0 — min value of the slider
@prop max: string | number = 100 — max value of the slider
@prop step: string | number = 1 — step value of the slider
@prop value: number = 50 — value of the slider
@prop ariaValueText: (current: number) — method to convert the current value to a string representation of the value for the aria-value props
@prop name: string | undefined = undefined — input name of the slider
@prop direction: 'horizontal' | 'vertical' = 'horizontal' — direction of the slider
@prop reverse: boolean = false — if true, the min and max values will be reversed
@prop keyboardOnly: boolean = false — disables mouse events
-->

<style>
	.slider {
		---track-width: var(--track-width, unset);
		---track-height: var(--track-height, 6px);
		---track-background: var(
			--track-background,
			linear-gradient(90deg, #bae6fd 0%, #7dd3fc 35%, #38bdf8 100%)
		);
		---track-border: var(--track-border, none);
		---thumb-size: var(--thumb-size, 16px);
		---thumb-background: var(--thumb-background, #666);
		---thumb-border: var(--thumb-border, none);
		---position: var(--position, 0px);

		---margin-inline-thumb-bigger: max(var(---thumb-size) - var(---track-height), 0px);
		---margin-inline-thumb-smaller: max(var(---track-height) - var(---thumb-size), 0px);

		position: relative;
		margin: auto;
		user-select: none;
		-webkit-user-select: none;
	}

	[aria-orientation='horizontal'] {
		width: var(---track-width);
		max-width: calc(100% - 2 * var(---margin-inline-thumb-bigger));
		height: calc(max(var(---track-height), var(---thumb-size)) + 4px);
		height: max(var(---track-height), var(---thumb-size));
		margin-inline: var(---margin-inline-thumb-bigger);
		margin-block: var(--margin-block, 8px);
	}

	[aria-orientation='vertical'] {
		width: calc(max(var(---track-height), var(---thumb-size)) + 4px);
		width: max(var(---track-height), var(---thumb-size));
		height: var(---track-width);
		max-height: calc(100% - 2 * var(---margin-inline-thumb-bigger));
		margin-block: var(---margin-inline-thumb-bigger);
		margin-inline: var(--margin-block, 8px);
	}

	.track {
		position: absolute;
		pointer-events: none;
		background: var(---track-background);
		border: var(---track-border);
		border-radius: calc(var(---track-height) / 2);
		box-sizing: border-box;
	}

	[aria-orientation='horizontal'] .track {
		height: var(---track-height);
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		right: 0;
	}

	[aria-orientation='vertical'] .track {
		width: var(---track-height);
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		bottom: 0;
	}

	.thumb {
		pointer-events: none;
		position: absolute;
		height: var(---thumb-size);
		width: var(---thumb-size);
		border-radius: calc(var(---thumb-size) / 2);
		background: var(---thumb-background);
		border: var(---thumb-border);
		box-sizing: border-box;

		transform: translate(-50%, -50%);
		--margin-left: (
				2 * var(---track-height) - var(---thumb-size) - var(---margin-inline-thumb-smaller)
			) / 2;
		--left: calc(var(---position) * (100% - 2 * var(--margin-left)) + var(--margin-left));
	}

	[aria-orientation='horizontal']:not(.reverse) .thumb {
		top: 50%;
		left: var(--left);
	}

	[aria-orientation='vertical']:not(.reverse) .thumb {
		left: 50%;
		bottom: calc(var(--left) - var(---thumb-size));
	}

	[aria-orientation='horizontal'].reverse .thumb {
		top: 50%;
		right: calc(var(--left) - var(---thumb-size));
	}

	[aria-orientation='vertical'].reverse .thumb {
		left: 50%;
		top: calc(var(--left));
	}

	.slider:focus-visible {
		outline: none;
	}

	.slider:focus-visible .track {
		outline: 2px solid var(--focus-color, red);
		outline-offset: 2px;
	}
</style>