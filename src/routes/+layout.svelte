<script>
    import '../app.css'
    import Navbar from '$src/lib/components/Navbar.svelte'
</script>

<Navbar></Navbar>

<div class="flex w-full">
    <div class="mx-auto h-full w-full max-w-screen-md px-4">
        <div class="w-full border-t-[1px] border-accent py-6">
            <slot />
        </div>
    </div>
</div>
