// Get the modal and buttons
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var submitBtn = document.getElementById('submitBtn');
var emailInput = document.getElementById('emailInput');
var successMessage = document.getElementById('successMessage');

// Open the modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
};

// Close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
    resetForm();
};

// Close the modal if clicked outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        resetForm();
    }
};

// Handle form submission
submitBtn.onclick = function() {
    var userEmail = emailInput.value;

    // Check if the email is not empty
    if (userEmail.trim() !== '') {
        // Display success message
        successMessage.innerHTML = 'Cadastro realizado com sucesso!';
        successMessage.style.color = 'green';
        resetForm(); // Optionally reset the form after success
    } else {
        // Display error message if the email is empty
        successMessage.innerHTML = 'Por favor, insira um e-mail válido.';
        successMessage.style.color = 'red';
    }
};

// Function to reset the form
function resetForm() {
    emailInput.value = ''; // Reset the email input
    successMessage.innerHTML = ''; // Clear the success/error message
}
