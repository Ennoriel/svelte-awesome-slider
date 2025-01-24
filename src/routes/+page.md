<script>
	import Slider from "$lib/Slider.svelte"

	// not using runes to make mdsvex happy
	let value = $state(50)
	let hue = $state(0)

    const str = `
			linear-gradient(to right, rgba(0,0,0,0), rgba(255,0,0,1)),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) top left / 20px,
            linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) 10px 10px / 20px`;
</script>

# svelte-awesome-slider

> highly customizable slider component library

- 🎹 built-in keyboard navigation
- 📱 mobile support
- 🤸‍♂️ accessibility compliant ([see WAI ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/))
- 🏇 it's compatible with form libraries
- 🧩 fully customizable
- 🔨 full typescript support

This library may not be popular but it's used by my other library [svelte-awesome-color-picker](https://svelte-awesome-color-picker.vercel.app/)!

A huge thanks to [MacFJA](https://github.com/MacFJA) who helped me making this library!

## Summary

<!-- SUMMARY -->

- [svelte-awesome-slider](#svelte-awesome-slider)
  - [Summary](#summary)
  - [Examples](#examples)
    - [Common props](#common-props)
    - [Track customization](#track-customization)
    - [Thumb customization](#thumb-customization)
    - [Vertical slider](#vertical-slider)
  - [API](#api)
    - [Props](#props)
    - [CSS variables](#css-variables)

## Examples

### Common props

<p id="temperature">Exemple (temperature: {value})</p>
<Slider min={0} max={100} step={5} bind:value name="temperature" ariaLabelledBy="temperature" onInput={e => console.log(e)} />

```svelte
<p id="temperature">Exemple (temperature)</p>
<Slider min={0} max={100} step={5} bind:value name="temperature" ariaLabelledBy="temperature" />
```

### Track customization

<p id="color">Exemple (color)</p>
<Slider --track-background={str} --track-width="50%" --track-height="20px" ariaLabelledBy="color" />

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

<p id="amount">Exemple (amount)</p>
<Slider --thumb-background="radial-gradient(circle, #84cc16 0%, #365314 100%)" --thumb-size="20px" ariaLabelledBy="amount" />

```svelte
<Slider --thumb-background="radial-gradient(circle, #84cc16 0%, #365314 100%)" --thumb-size="20px" />
```

### Vertical slider

<p id="price">Exemple (price)</p>
<Slider
	min={0}
	max={20}
	value={4}
	direction="vertical"
	ariaLabelledBy="price"
	--track-width="240px"
	--track-height="24px"
	--track-background="#eee"
	--thumb-size="24px"
/>

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

| name           | type                              | default value  | usage                                                                                                                                                                                                                                                                                                                                  |
| :------------- | --------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| min            | `string &#124; number`            | `0`            | min value of the slider                                                                                                                                                                                                                                                                                                                |
| max            | `string &#124; number`            | `100`          | max value of the slider                                                                                                                                                                                                                                                                                                                |
| step           | `string &#124; number`            | `1`            | step value of the slider                                                                                                                                                                                                                                                                                                               |
| value          | `number`                          | `50`           | **bindable**<br\>value of the slider                                                                                                                                                                                                                                                                                                   |
| ariaValueText  | `(current: number) => string`     | `(current)`    | method to convert the current value to a string representation of the value for the `aria-valuetext` attribute. For example, a battery meter value might be conveyed as aria-valuetext="8% (34 minutes) remaining". See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) |
| name           | `string &#124; undefined`         |                | input name of the slider                                                                                                                                                                                                                                                                                                               |
| direction      | `'horizontal' &#124; 'vertical'`  | `'horizontal'` | direction of the slider                                                                                                                                                                                                                                                                                                                |
| reverse        | `boolean`                         | `false`        | if true, the min and max values will be reversed                                                                                                                                                                                                                                                                                       |
| keyboardOnly   | `boolean`                         | `false`        | disables mouse events                                                                                                                                                                                                                                                                                                                  |
| slider         | `HTMLDivElement &#124; undefined` |                | div element representing the slider                                                                                                                                                                                                                                                                                                    |
| ariaLabel      | `string &#124; undefined`         |                | aria-label props                                                                                                                                                                                                                                                                                                                       |
| ariaLabelledBy | `string &#124; undefined`         |                | aria-labelledby props                                                                                                                                                                                                                                                                                                                  |
| ariaControls   | `string &#124; undefined`         |                | aria-controls props                                                                                                                                                                                                                                                                                                                    |
| isDragging     | `boolean`                         | `false`        | indicate if the slider is being dragged                                                                                                                                                                                                                                                                                                |
| onInput        | `(value: number) => void`         |                | **event**<br\>listener, dispatch an event when the user drags, clicks or tabs at the slider                                                                                                                                                                                                                                            |

<!-- ~PROPS_Slider.svelte -->

\*\* Be sure to include either `ariaLabel` or `ariaLabelledBy` for accessibility purpose.

### CSS variables

The slider component can be customized with the following css variables:

| name               | type       | default value   | usage                         |
| :----------------- | ---------- | --------------- | ----------------------------- |
| --thumb-background | background | linear-gradient | Thumb background              |
| --thumb-border     | border     | none            | Thumb border                  |
| --thumb-size       | dimension  | 16px            | Thumb size                    |
| --track-background | background | linear-gradient | Track background              |
| --track-border     | border     | none            | Track border                  |
| --track-height     | dimension  | 6px             | Track height                  |
| --track-width      | dimension  | unset           | Track width                   |
| --focus-color      | color      | red             | Focus color                   |
| --margin-block     | dimension  | 8px             | Margin block (top and bottom) |
