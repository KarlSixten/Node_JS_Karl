<script>
    import Child from "../Child/Child.svelte";

    const { name, children } = $props()

    console.log(name)
</script>

<h1>{name}</h1>

{#each children as child (child.name) }
    <Child {...child}/>
{/each}