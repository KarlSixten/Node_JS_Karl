<script>
    const { name, isGirl, familySheep } = $props();
</script>

<div
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}
    >
    <h2>{name}</h2>
</div>

<style>
    .is-girl {
        background-color: chartreuse;
    }

    .is-boy {
        background-color: teal;
    }

    .not-a-sheep {
        border: 0.5em solid red;
    }

    .grey-sheep {
        border: 0.5em solid hotpink;
    }

    .black-sheep {
        border: 0.5em solid purple
    }
</style>