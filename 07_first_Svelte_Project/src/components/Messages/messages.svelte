<script>
    const messages = $state([1, 2, 3, "asd"]);

    // Ville ikke fungerer fordi messages ikke bliver reinstantieret i addMessage().
    // Brug state som ovenover for at holde subscribe på mutability
    //const messages = [1, 2, 3, "asd"];

    let messageInput = $state("");

    function addMessage() {
        messages.push(messageInput);
        messageInput = "";
    }
</script>

<h1>Messages</h1>

<p>{messages}</p>

<input bind:value={messageInput} placeholder="Type your message...">

<button onclick="{addMessage}">Submit message</button>