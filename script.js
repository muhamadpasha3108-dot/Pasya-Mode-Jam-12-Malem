
/* =================================
   A LITTLE WORLD OF PASYA
   Main JavaScript
================================= */

// Mengambil semua slide dan tombol navigasi
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('nav button');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumber = document.getElementById('pageNumber');


// FUNCTION UNTUK PINDAH SLIDE

function showSlide(index) {

    // Memastikan index tidak keluar dari jumlah slide
    if (index < 0 || index >= slides.length) {
        return;
    }

    currentSlide = index;

    // Mengatur tampilan slide
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Mengatur tombol navigasi aktif
    navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

    // Mengubah nomor halaman
    pageNumber.textContent =
        String(index + 1).padStart(2, '0') +
        ' / ' +
        String(slides.length).padStart(2, '0');

    // Mengatur tombol Previous dan Next
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;

    // Scroll kembali ke atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// FUNCTION NEXT DAN PREVIOUS

function changeSlide(direction) {

    const nextIndex = currentSlide + direction;

    if (nextIndex >= 0 && nextIndex < slides.length) {
        showSlide(nextIndex);
    }

}


// KEYBOARD NAVIGATION

document.addEventListener('keydown', function(event) {

    // Panah kanan untuk slide berikutnya
    if (event.key === 'ArrowRight') {
        changeSlide(1);
    }

    // Panah kiri untuk slide sebelumnya
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    }

});


// INITIALIZATION

document.addEventListener('DOMContentLoaded', function() {

    showSlide(0);

});

