document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var panInput = document.getElementById('pan').value;
    var errorMessage = document.getElementById('error-message');
    var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (panPattern.test(panInput)) {
        errorMessage.textContent = 'Valid PAN Number';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Invalid PAN Number';
        errorMessage.style.color = 'red';
    }
});