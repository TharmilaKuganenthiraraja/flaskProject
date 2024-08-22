document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const predictionOutput = document.getElementById('prediction-output');
    const resultDiv = document.getElementById('result');
    const imageDisplay = document.createElement('img');
    imageDisplay.id = 'uploaded-image';
    resultDiv.insertBefore(imageDisplay, predictionOutput);

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        // Display the uploaded image
        const fileInput = document.getElementById('mushroom-image');
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            imageDisplay.src = event.target.result;
            imageDisplay.style.display = 'block';
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            predictionOutput.innerText = `The mushroom is ${result.prediction}`;

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            predictionOutput.innerText = 'Error: Could not retrieve the prediction.';
        }
    });
});
