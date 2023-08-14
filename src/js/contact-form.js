const contactForm = document.querySelector(".contact-form");

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);

    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
            alert("Thank you for your submission");
            contactForm.reset();
        } else {
            throw new Error("Submission failed");
        }
    } catch (error) {
        alert(error.message);
    }
};

contactForm.addEventListener("submit", handleSubmit);