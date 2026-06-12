// ==========================================
// ROYAL JAVASCRIPT SYSTEM (LOGIKA SIHIR)
// ==========================================

// --- 1. SENSOR SCROLL MENU AKTIF (TERMASUK BLOK ORGANISASI) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Deteksi jika area layar sedang berada di koordinat section tertentu
        if (pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});



// --- 2. LOGIKA LEDAKAN SIHIR EMOJI (MAGIC BUTTON EFFECT) ---
const magicBtn = document.getElementById('royalMagicBtn');
const magicEmojis = ['🌸', '✨', '💖', '👑', '⭐', '🎈', '🕊️'];

magicBtn.addEventListener('click', (event) => {
    // Mendapatkan koordinat tengah tombol saat diklik
    const rect = magicBtn.getBoundingClientRect();
    const startX = rect.left + (rect.width / 2);
    const startY = rect.top + (rect.height / 2) + window.scrollY;

    // Menghasikan 20 partikel sihir secara acak
    for (let i = 0; i < 20; i++) {
        spawnMagicSparkle(startX, startY);
    }
});

function spawnMagicSparkle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('sparkle-particle');
    
    // Pilih emoji secara acak
    particle.innerText = magicEmojis[Math.floor(Math.random() * magicEmojis.length)];
    
    // Tentukan arah hamburan partikel (X dan Y) secara acak
    const dirX = (Math.random() - 0.5) * 300;
    const dirY = (Math.random() - 0.7) * 300; // Cenderung menyebar ke atas
    
    // Pasang arah ke dalam CSS Variable agar dibaca oleh animasi CSS
    particle.style.setProperty('--dir-x', `${dirX}px`);
    particle.style.setProperty('--dir-y', `${dirY}px`);
    
    // Set posisi awal partikel di titik tengah tombol
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    document.body.appendChild(particle);

    // Hapus otomatis elemen dari memori setelah 1.5 detik agar web tetap ringan
    setTimeout(() => {
        particle.remove();
    }, 1500);
}