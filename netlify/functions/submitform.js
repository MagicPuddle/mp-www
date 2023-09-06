exports.handler = async function (event, context) {
    try {
        const requestBody = JSON.parse(event.body);

        // Here, you can process the form data and send it to your desired destination (e.g., email it, save it to a database, etc.).

        // If everything is successful, you can return a success response.
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully" }),
        };
    } catch (error) {
        // If there's an error, return an error response.
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error submitting form" }),
        };
    }
};
