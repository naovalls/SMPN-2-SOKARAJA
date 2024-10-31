function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

// Show the Beranda page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('beranda');
});
