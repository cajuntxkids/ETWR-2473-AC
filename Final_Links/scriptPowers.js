// Function to show the modal with specific power information
function showPowerInfo(title, description) {
    const powerModal = document.getElementById('powerModal');
    document.getElementById('powerTitle').textContent = title;
    document.getElementById('powerDescription').textContent = description;
    if (typeof powerModal.showModal === 'function') {
        powerModal.showModal();
    } else {
        powerModal.style.display = 'flex'; // Fallback for older browsers
    }
}

// Function to close the modal
function closePowerModal() {
    const powerModal = document.getElementById('powerModal');
    if (typeof powerModal.close === 'function') {
        powerModal.close();
    } else {
        powerModal.style.display = 'none'; // Fallback for older browsers
    }
}