function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

// Close the sidebar when clicking outside of it
window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.querySelector('.toggle-icon');
    const avatarIcon = document.querySelector('.avatar-icon');

    if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && !toggleIcon.contains(event.target) && !avatarIcon.contains(event.target)) {
        sidebar.style.display = 'none';
    }
}

function redirectToAvatarPage() {
    window.location.href = "avatar.html"; // Redirect to the avatar page
}

function translatePage() {
    const language = document.getElementById('languageSelector').value;
    if (language) {
        alert(`Page will be translated to ${language}`);
        // Here, you would implement the actual translation logic
    }
}