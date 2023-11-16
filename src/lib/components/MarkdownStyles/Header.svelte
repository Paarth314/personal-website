<script>
    // export let text = ''
    export let depth = 3
    // export let raw = ''

    let text_sizes = ['text-5xl', 'text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg']
</script>

<div class="{text_sizes[depth - 1]} font-bold text-accent">
    <slot />
</div>
