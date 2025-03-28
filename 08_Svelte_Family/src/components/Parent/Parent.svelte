<script>
    import Child from "../Child/Child.svelte";

    // Henter name fra props men kalder det for parentName
    const { name: parentName, children } = $props()

    function handleShowLove(childName) {
        console.log(`${childName} loves ${parentName} very much🥶👬`)

    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪"]);

    function handleEatCookie(childName) {
        if (cookieJar.length > 0) {
            cookieJar.pop();
            console.log(`${childName} gets cookie from ${parentName}🍪`)
        } else {
            console.log(`No more cookies😣`)
            console.log(`Filling up the cookieJar🥰`)
            cookieJar = ["🍪", "🍪", "🍪", "🍪"];
        }
    }
</script>

<h1>{parentName}</h1>

<p>
    {#each cookieJar as cookie }
        {cookie}
    {/each}
</p>

{#each children as child (child.name) }
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}