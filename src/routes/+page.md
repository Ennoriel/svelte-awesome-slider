<script>
	import Slider from "$lib/Slider.svelte"

	let value = 50
	let hue = 0

    const str = `
			linear-gradient(to right, rgba(0,0,0,0), rgba(255,0,0,1)),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) top left / 20px,
            linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) 10px 10px / 20px`;
</script>

# svelte-awesome-slider

> highly customizable slider component library

- 🎹 built-in keyboard navigation
- 📱 mobile support
- 🤸‍♂️ accessibility information
- 🏇 it's compatible with form libraries
- 🧩 fully customizable
- 🔨 full typescript support

## Summary

<!-- SUMMARY -->

- [Summary](#summary)
- [Examples](#examples)
  - [common props](#common-props)
  - [track customization](#track-customization)
  - [thumb customization](#thumb-customization)
  - [vertical slider](#vertical-slider)
- [API](#api)
  - [Props](#props)
  - [CSS variables](#css-variables)
- [bugs](#bugs)
<!-- ¤SUMMARY -->

## Examples

### Common props

<Slider min={0} max={100} step={5} value={0} name="temperature" />

```svelte
<Slider min={0} max={100} step={5} value={0} name="temperature" />
```

### Track customization

<Slider --track-background="{str}" --track-width="50%" --track-height="20px" />

```svelte
<script>
	const str = `
		linear-gradient(to right, rgba(0,0,0,0), rgba(255,0,0,1)),
		linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) top left / 20px,
		linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) 10px 10px / 20px`;
</script>

<Slider --track-background={str} --track-width="50%" --track-height="20px" />
```

### Thumb customization

<Slider --thumb-background="radial-gradient(circle, #84cc16 0%, #365314 100%)" --thumb-size="20px" />

```svelte
<Slider
	--thumb-background="radial-gradient(circle, #84cc16 0%, #365314 100%)"
	--thumb-size="20px"
/>
```

### Vertical slider

<div style:display="flex">
{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as x}
<Slider
min={0}
max={20}
value={20 - x}
direction="vertical"
--track-width="240px"
--track-height="24px"
--track-background="#eee"
--thumb-size="24px"
/>
{/each}
</div>

```svelte
<Slider
	direction="vertical"
	--track-width="360px"
	--track-height="24px"
	--track-background="#eee"
	--thumb-size="24px"
/>
```

## API

### Props

The Slider component has the following props:

<!-- PROPS_Slider.svelte -->

| name          | type                             | default value  | usage                                                                                                |
| ------------- | -------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------- |
| min           | `string &#124; number`           | `0`            | min value of the slider                                                                              |
| max           | `string &#124; number`           | `100`          | max value of the slider                                                                              |
| step          | `string &#124; number`           | `1`            | step value of the slider                                                                             |
| value         | `number`                         | `50`           | value of the slider                                                                                  |
| ariaValueText | `(current: number)`              |                | method to convert the current value to a string representation of the value for the aria-value props |
| name          | `string &#124; undefined`        | `undefined`    | input name of the slider                                                                             |
| direction     | `'horizontal' &#124; 'vertical'` | `'horizontal'` | direction of the slider                                                                              |
| reverse       | `boolean`                        | `false`        | if true, the min and max values will be reversed                                                     |
| keyboardOnly  | `boolean`                        | `false`        | disables mouse events                                                                                |

<!-- ~PROPS_Slider.svelte -->

### CSS variables

The slider component can be customized with the following css variables:

| name             | type       | default value   | usage                         |
| ---------------- | ---------- | --------------- | ----------------------------- |
| thumb-background | background | linear-gradient | Thumb background              |
| thumb-border     | border     | none            | Thumb border                  |
| thumb-size       | dimension  | 16px            | Thumb size                    |
| track-background | background | linear-gradient | Track background              |
| track-border     | border     | none            | Track border                  |
| track-height     | dimension  | 6px             | Track height                  |
| track-width      | dimension  | unset           | Track width                   |
| focus-color      | color      | red             | Focus color                   |
| margin-block     | dimension  | 8px             | Margin block (top and bottom) |
