<script>
    import '$src/app.css'
    import { browser } from '$app/environment'
    import { page } from '$app/stores'

    let currentTheme = 'dark_theme'
    let isDark = false
    let isOpen = false
    let innerWidth = 0

    $: {
        currentTheme = isDark ? 'cupcake' : 'dark_theme'
        if (browser) document.documentElement.setAttribute('data-theme', currentTheme)
    }

    $: routeId = $page.route.id
    $: isOpen = innerWidth >= 640 ? false : isOpen
</script>

<svelte:window bind:innerWidth />
<div class="flex w-full flex-col">
    <div class="m-auto flex w-full max-w-screen-md px-4 py-5 tracking-wider sm:py-8">
        <div class="flex-1">
            <a class="font-body text-xl font-semibold sm:text-2xl" href="/">Paarth</a>
        </div>

        {#if innerWidth >= 640}
            <div class="flex">
                <a
                    class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                    href="/about"
                    class:active={routeId == '/about'}>About</a
                >
                <a
                    class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                    href="/cv"
                    class:active={routeId == '/cv'}>CV</a
                >
                <a
                    class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                    href="/contact"
                    class:active={routeId == '/contact'}>Contact</a
                >
            </div>
            <label
                class="swap swap-rotate ml-4 fill-current transition-transform duration-200 hover:rotate-[16deg] hover:fill-accent"
            >
                <input type="checkbox" bind:checked={isDark} />
                <svg class="swap-off h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                    /></svg
                >
                <svg class="swap-on h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                    /></svg
                >
            </label>
        {:else}
            <label
                class="swap-rotate swap ml-4 fill-current transition-transform duration-200 hover:rotate-[16deg] hover:fill-accent"
            >
                <input type="checkbox" bind:checked={isDark} />
                <svg class="swap-off h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                    /></svg
                >
                <svg class="swap-on h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                    /></svg
                >
            </label>
            <label
                class="swap-rotate swap ml-4 place-items-center fill-current stroke-current hover:fill-accent hover:stroke-accent"
            >
                <input type="checkbox" bind:checked={isOpen} />
                <svg class="swap-off h-9 w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    ><path
                        d="M5 8H13.75M5 12H19M10.25 16L19 16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <svg
                    class="swap-on h-6 w-6 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="4" x2="20" y2="20" style="stroke-linecap: round" />
                    <line x1="20" y1="4" x2="4" y2="20" style="stroke-linecap: round" /></svg
                >
            </label>
        {/if}
    </div>
    {#if isOpen}
        <div class="flex flex-col pb-4">
            <a
                class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                href="/about"
                class:active={routeId == '/about'}>About</a
            >
            <a
                class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                href="/cv"
                class:active={routeId == '/cv'}>CV</a
            >
            <a
                class="link my-1 ml-4 mr-1 px-1 py-1 font-semibold no-underline hover:text-accent"
                href="/contact"
                class:active={routeId == '/contact'}>Contact</a
            >
        </div>
    {/if}
</div>

<style>
    .active {
        color: hsl(var(--a));
        font-weight: 800;
    }
</style>
