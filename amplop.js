$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().delay(200).animate({ // Tambahkan delay 1 detik (1000ms)
            top: '-120px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().delay(0).animate({ // Tambahkan delay 1 detik (1000ms)
            top: 0
        }, 'slow');
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const openPopupButton = document.querySelector(".open-popup");
  const textElement = document.querySelector(".text");

  openPopupButton.addEventListener("click", () => {
    // Tambahkan class zoom untuk efek pembukaan
    card.classList.add("zoom");

    // Ubah konten teks setelah beberapa waktu
    setTimeout(() => {
      textElement.innerHTML = "Wishing you endless happiness and love on your special day!";
      textElement.style.opacity = "1"; // Tampilkan teks baru
    }, 500); // Waktu sinkron dengan transisi

    // Sembunyikan tombol setelah animasi
    setTimeout(() => {
      openPopupButton.style.display = "none"; // Hilangkan tombol sepenuhnya
    }, 500); // Sesuaikan waktu sesuai dengan durasi transisi zoom
  });
});