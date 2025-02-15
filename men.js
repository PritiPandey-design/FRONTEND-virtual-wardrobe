js// JavaScript for Modal Interaction
function showTryOnOptions(outfit) {
    document.getElementById('tryOnModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('tryOnModal').style.display = 'none';
}

function tryOn3D() {
    alert("3D Model Try-On option selected.");
    closeModal();
}

function tryOnAR() {
    alert("AR Try-On option selected.");
    closeModal();
}

