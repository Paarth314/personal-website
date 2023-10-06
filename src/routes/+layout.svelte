<script>
    import '../app.css'
    import Navbar from '$src/lib/components/Navbar.svelte'

    export const prerender = true
</script>

<Navbar></Navbar>
<slot />
