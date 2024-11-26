<script lang="ts">
    import '../app.css'
    let { children } = $props()
</script>

<div
    class="flex min-h-screen w-full bg-gray-50 text-zinc-800 selection:bg-accent-400 selection:text-white"
>
    <div class="mx-auto w-full max-w-screen-lg bg-white shadow-md shadow-gray-300">
        {@render children()}
    </div>
</div>
