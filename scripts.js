// Menampilkan halaman yang dipilih
function showPage(pageId) {
    // Sembunyikan semua section dengan class "page"
    document.querySelectorAll('.page').forEach((section) => {
        section.style.display = 'none';
    });

    // Tampilkan section yang dipilih
    document.getElementById(pageId).style.display = 'block';
}

// Menampilkan halaman beranda secara default saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showPage('beranda');
});
