document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burger-menu');
    const closeMenu = document.getElementById('close-menu');
    const navList = document.querySelector('.list-nav-bar');

    function toggleMenu() {
        if (window.innerWidth <= 769) {
            if (!navList.classList.contains('active')) {
                burgerMenu.style.display = 'block';
                closeMenu.style.display = 'none';
            } else {
                burgerMenu.style.display = 'none';
                closeMenu.style.display = 'block';
            }
        } else {
            burgerMenu.style.display = 'none';
            closeMenu.style.display = 'none';
        }
    }

    toggleMenu(); // Panggil fungsi saat halaman dimuat

    window.addEventListener('resize', function() {
        toggleMenu(); // Panggil fungsi saat ukuran layar berubah
    });

    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        toggleMenu(); // Panggil fungsi untuk menyesuaikan tampilan hamburger menu
    });

    closeMenu.addEventListener('click', function() {
        navList.classList.remove('active');
        toggleMenu(); // Panggil fungsi untuk menyesuaikan tampilan hamburger menu
    });

    // Menambahkan fungsi untuk menutup menu ketika salah satu item navigasi diklik
    navList.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 769) {
                navList.classList.remove('active');
                toggleMenu(); // Panggil fungsi untuk menyesuaikan tampilan hamburger menu
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.nav-bar');

    // Fungsi untuk menambahkan atau menghapus kelas saat di-scroll
    function toggleNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.classList.add('scroll-background');
        } else {
            navbar.classList.remove('scroll-background');
        }
    }

    // Panggil fungsi saat halaman dimuat dan di-scroll
    toggleNavbarBackground(); // Panggil saat halaman dimuat
    window.addEventListener('scroll', toggleNavbarBackground); // Panggil saat di-scroll
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.nav-bar');

    // Fungsi untuk menambahkan atau menghapus kelas saat di-scroll
    function toggleNavbarTextColor() {
        // Periksa apakah lebar layar lebih besar dari 800px
        if (window.innerWidth > 800 && window.scrollY > 50) {
            navbar.classList.add('scroll-text-color');
        } else {
            navbar.classList.remove('scroll-text-color');
        }
    }

    // Panggil fungsi saat halaman dimuat dan di-scroll
    toggleNavbarTextColor(); // Panggil saat halaman dimuat
    window.addEventListener('scroll', toggleNavbarTextColor); // Panggil saat di-scroll
});