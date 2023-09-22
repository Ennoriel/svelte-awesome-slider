<script>
	import Slider from "$lib/Slider.svelte"

	let value = 50
	let hue = 0

    const str = `
			linear-gradient(to right, rgba(0,0,0,0), rgba(255,0,0,1)),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) top left / 12px,
            linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%) 6px 6px / 12px`;
</script>

# Welcome to your library project

Create your package using @sveltejs/package and preview/showcase your work with SvelteKit

Visit [kit.svelte.dev](https://kit.svelte.dev) to read the documentation

<Slider
min={0}
max={360}
step={5}
value={0}
--track-background="#eee"
--thumb-background="transparent"
/>

<Slider
min={0}
max={360}
step={5}
value={0}
--track-width="360px"
--track-height="24px"
--track-background="#eee"
--thumb-size="14px"
--thumb-background="transparent"
/>

<Slider
min={0}
max={360}
step={5}
value={360}
--track-width="3600px"
--track-background="#eee"
--thumb-background="transparent"
/>

<Slider
min={0}
max={360}
step={5}
value={360}
--track-width="3600px"
--track-height="24px"
--track-background="#eee"
--thumb-size="14px"
--thumb-background="transparent"
/>

<Slider
min={0}
max={360}
step={5}
value={360}
--track-width="3600px"
--track-height="24px"
--track-background="#eee"
--thumb-size="24px"
--thumb-background="transparent"
/>

<div style:display="flex">

<Slider
min={0}
max={360}
step={5}
value={0}
direction="vertical"
--track-width="360px"
--track-height="24px"
--track-background="#eee"
--thumb-size="24px"
--thumb-background="transparent"
/>

<Slider
min={0}
max={360}
step={5}
value={360}
direction="vertical"
--track-width="360px"
--track-height="24px"
--track-background="#eee"
--thumb-size="24px"
--thumb-background="transparent"
/>

</div>

<!--
--track-width
--track-height
--track-background
--thumb-size
--thumb-background
--position
-->

## bugs

- [x] focus style
- [x] thumb position
- [x] value when dragging not over
- [x] thumb position
- [x] touch event
- [x] vertical layout
- [ ] documentation
- [ ] customization?
- [x] vertical slider
- [x] copy color
- [ ] margins
- [ ] build size
