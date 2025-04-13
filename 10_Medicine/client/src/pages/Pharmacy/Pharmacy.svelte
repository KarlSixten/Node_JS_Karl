<script>
    import { onMount } from "svelte";
    import Employees from "../../components/Employees/Employees.svelte";
    import { BASE_URL } from "../../stores/generalStore.js";
    import { fetchGet, fetchPost } from "../../util/fetch.js";

    let pills = [];

    onMount(async () => {
        pills = (await fetchGet($BASE_URL+"/pills")).data;
        console.log(pills);
    });

    async function fillPrescription() {
        fetchPost($BASE_URL+"/pills", {
            name: "Narko"
        });
        pills = (await fetchGet($BASE_URL+"/pills")).data;
    }
</script>
<h1>Pharmacy</h1>

<Employees></Employees>

{#each pills as pill}
    <h3>{pill.name}</h3>
{/each}

<button onclick={fillPrescription}>Fill Prescription</button>