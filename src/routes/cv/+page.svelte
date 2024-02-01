<script>
    import education from '$lib/cv/education.json'
</script>

<!-- <h1 class="mb-3 mt-8 text-start text-2xl font-bold underline-offset-8 sm:text-3xl">
    Cirricullum Vitae
</h1> -->
<div class="mb-8 mt-6 border-b-[1px] border-accent pb-8 text-sm sm:text-base">
    <p class="pb-4">
        I will soon add all my projects on this website.
        <!-- The website contains a more detailed CV including some of the minor projects, both personal
        and academic. -->
    </p>
    <a
        href="CV_paarth.pdf"
        class=" font-medium leading-6 underline decoration-wavy decoration-[1.9px] underline-offset-4 hover:text-accent hover:decoration-dashed"
        >PDF of my CV</a
    >
</div>

<!-- <h1 class="mb-4 mt-10 text-start text-2xl font-semibold sm:text-3xl">Education</h1> -->

<ul class="ml-4 w-full text-sm sm:text-base">
    {#each education as institute}
        <li class="line-bullet">
            <h2 class="text-lg font-semibold text-accent sm:text-xl">
                {institute.degree ? institute.degree : ' '}
            </h2>
            <p class="font-medium">{institute.name}</p>
            <p class="italic opacity-75">
                {institute.duration}
            </p>
            <p class="italic opacity-75">
                {institute.grade ? '' + institute.grade : ''}
            </p>
            <p class="mb-5 mt-1">{institute.desc ? institute.desc : ''}</p>
        </li>
    {/each}
</ul>

<style>
    .line-bullet {
        position: relative;
        padding: 10px;
    }
    .line-bullet:before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: hsl(var(--a));
        position: absolute;
        left: -15px;
        top: 25px;
        transform: translateY(-40%);
    }

    .line-bullet:not(:last-child):after {
        content: '';
        width: 2px;
        height: 100%;
        background: hsl(var(--a));
        position: absolute;
        left: -10px;
        top: 25px;
    }
</style>
