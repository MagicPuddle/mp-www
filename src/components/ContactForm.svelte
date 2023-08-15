<script>
    let formStatus = "";

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/.netlify/functions/submitForm", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                formStatus = "Thank you for your message!";
            } else {
                formStatus = "Error submitting form";
            }
        } catch (error) {
            formStatus = "Error submitting form";
        }
    }
</script>

<form class="contact-form" on:submit={handleSubmit} >
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required />
    <button type="submit">Submit</button>
</form>

<p>{formStatus}</p>
