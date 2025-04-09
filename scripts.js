document.getElementById("nextButton").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    if (!name || !age || !gender || !email) {
        alert("Please fill out all fields.");
        return;
    }

    const data = {
        Name: name,
        Age: age,
        Gender: gender,
        Email: email
    };

    try {
        // Save data to Google Sheets
        await fetch("https://sheetdb.io/api/v1/gevpdtunqva70", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: [data] })
        });

        // Redirect to the second phase website
        const secondPhaseUrl = "https://admirable-dolphin-e1018b.netlify.app/";
        window.location.href = `${secondPhaseUrl}?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&gender=${encodeURIComponent(gender)}&email=${encodeURIComponent(email)}`;
    } catch (error) {
        console.error("Error saving data:", error);
        alert("An error occurred while saving your data. Please try again.");
    }
});
