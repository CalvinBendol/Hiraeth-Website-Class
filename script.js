// --- LOGIKA NAVBAR HAMBURGER ---
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  // Toggle class 'mobile-active' untuk animasi slide
  navLinks.classList.toggle("mobile-active");

  // Ganti icon (opsional, jika mau ganti jadi X)
  const icon = document.querySelector(".hamburger i");
  if (navLinks.classList.contains("mobile-active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// --- NAVIGATION LOGIC ---
function showPage(pageId) {
  // 1. Pindah Halaman
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  // 2. Update Warna Link
  document.querySelectorAll(".nav-links a").forEach((link) => link.classList.remove("active-link"));
  document.getElementById("link-" + pageId).classList.add("active-link");

  // 3. Scroll ke atas
  window.scrollTo(0, 0);

  // 4. TUTUP MENU HAMBURGER (Jika sedang dibuka di HP)
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("mobile-active")) {
    toggleMenu(); // Panggil fungsi toggle untuk menutup
  }
}

// --- DATA SISWA & RENDER (Sama seperti sebelumnya) ---
const students = [
  { id: 1, name: "Afril Irham Walidin", photo: "foto/individu/afril.jpg", hobby: "Renang dan Membaca buku pelajaran", quote: "Percaya diri sendiri dan yakin kepada Tuhan YME", ig: "@afriilrhm", ultah: "04-07", nametag: "Adik Kecil" },
  { id: 2, name: "Afrina Zahra", photo: "foto/individu/fiza.jpg", hobby: "Membaca", quote: "always find time for the things that make you feel happy to be alive.", ig: "@friinaa_", ultah: "03-05", nametag: "Fizzo Novel" },
  { id: 3, name: "Aisyah Aulia Zahra", photo: "https://i.vvvar.cc/150?u=3", hobby: "Gaming", quote: "GG WP.", ig: "@candra_gg" },
  { id: 4, name: "Amira Celshi Khumaira", photo: "https://i.vvvar.cc/150?u=4", hobby: "Membaca", quote: "Buku jendela dunia.", ig: "@dina_reads" },
  {
    id: 5,
    name: "Arroshikan Halim Shani",
    photo: "foto/individu/rosi.jpg",
    hobby: "Berolahraga, mendengar musik, menonton film, memasak dan makan makan",
    quote: "Fokus masa depan mu, karna kalah mu sudah banyak.",
    ig: "@arrosikhan",
    ultah: "07-11",
    nametag: "Rosident",
  },
  { id: 6, name: "Ayu Pembayun Tri Jati Wardani", photo: "https://i.vvvar.cc/150?u=6", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 7, name: "Balqis Alya Aziza Maulana", photo: "foto/individu/balqis.jpeg", hobby: "Membaca", quote: "Assalamualaikum UNER #IZIN #SIKAP", ig: "@balqis.mln", ultah: "03-28", nametag: "Balbalan" },
  { id: 8, name: "Belva Maulidah Afif Jacinda", photo: "foto/individu/belva.jpeg", hobby: "Baca Buku dan Dance", quote: "To dream is to live, and to pursue it is keep on Living.", ig: "@bebelvva", ultah: "03-10" },
  { id: 9, name: "Cowryand Muazzam Afkarbi", photo: "https://i.vvvar.cc/150?u=9", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 10, name: "Daffa Aryobimo Nugroho", photo: "https://i.vvvar.cc/150?u=10", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  {
    id: 11,
    name: "Dhafa Ardhi Salman Alaudin",
    photo: "foto/individu/dhafaa.jpg",
    hobby: "Menyanyi, mencari tantangan dan mencoba hal baru",
    quote: "Jika ada bara di hatimu, biarkan ia tumbuh.",
    ig: "@dhafa.ardhi",
    ultah: "11-09",
    nametag: "Salman",
  },
  { id: 12, name: "Eka Jeny Firnanda", photo: "foto/individu/jeny.jpg", hobby: "Membaca", quote: "tenang, nggak semua harus ada jawabannya sekarang.", ig: "@je01nyy", ultah: "01-31", nametag: "Jeny" },
  { id: 13, name: "Falend Lionard Ramadhan F.", photo: "https://i.vvvar.cc/150?u=13", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 14, name: "Fitrianur Aidila Septianing Putri", photo: "foto/individu/fitri.jpg", hobby: "Memasak", quote: "Jangan pernah menyerah apapun yang terjadi.", ig: "@fitrianur.aidila", ultah: "09-28", nametag: "Fitri" },
  {
    id: 15,
    name: "Galita Indika Putri",
    photo: "foto/individu/galita.jpg",
    hobby: "Memasak",
    quote: "jangan takut mencoba hal baru, karena disitulah peluang besar sering kali tersembunyi.",
    ig: "@raa2927_",
    ultah: "12-29",
    nametag: "Gal-Gal",
  },
  { id: 16, name: "Gladisya Nalla Putri Ariesandi", photo: "https://i.vvvar.cc/150?u=16", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 17, name: "Herizza Wahidatun Nisa", photo: "https://i.vvvar.cc/150?u=17", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 18, name: "Hexy Berliansyah Fauzi", photo: "foto/individu/hexy.jpg", hobby: "Olahraga", quote: "Fainnama al usri yusro.", ig: "@hexx_20", ultah: "12-20", nametag: "Cece" },
  { id: 19, name: "Izdihar Faza Insyirah", photo: "https://i.vvvar.cc/150?u=19", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 20, name: "Kirana Larasati Wibowo", photo: "foto/individu/kirana.jpg", hobby: "Berenang", quote: "everything is going to be alright, maybe not today, but eventually", ig: "@@lrstiiii.kirana", ultah: "10-13", nametag: "Kus Kus" },
  { id: 21, name: "Muhamad Calvin Alfiansyah", photo: "foto/individu/calvin.JPG", hobby: "Desain", quote: "Sedikit bicara bukan berarti tidak punya kata-kata; aku hanya memilih siapa yang layak mendengarnya.", ig: "@calvinbendol", nametag: "BendolGoreng", ultah: "12-09" },
  { id: 22, name: "Nadzwa Atalla Hadisyanti", photo: "foto/individu/nadzwa.webp", hobby: "Membaca Novel", quote: "Semakin banyak kamu membaca, semakin banyak hal yang akan kamu ketahui.", ig: "@dyivee_ndz", ultah: "07-02", nametag: "-" },
  { id: 23, name: "Naufal Azmi Aryasatya", photo: "https://i.vvvar.cc/150?u=23", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 24, name: "Naura Nixie Franchiella", photo: "https://i.vvvar.cc/150?u=24", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 25, name: "Neola Salsabilla Jasmine", photo: "https://i.vvvar.cc/150?u=25", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 26, name: "Nurin Keysha Hasya Mastura", photo: "https://i.vvvar.cc/150?u=26", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  {
    id: 27,
    name: "Nyx Aurora Nayyara Diksty",
    photo: "foto/individu/nyx.jpg",
    hobby: "Membaca buku dan Menonton film",
    quote: "Carpe diem. Seize the day. Make your lives extraordinary. — John Keating.",
    ig: "@nyx.nacht",
    ultah: "10-02",
    nametag: "En Ye Ex",
  },
  {
    id: 28,
    name: "Quaneisha Hafizah",
    photo: "foto/individu/anes.jpg",
    hobby: "Membaca novel dan menonton drakor",
    quote: "jangan menunda senang karena selalu mengingat yang sakit. Tidak baik. -0 mdpl",
    ig: "@quaneisyaaaa",
    ultah: "08-10",
    nametag: "Aness",
  },
  { id: 29, name: "Raisa Muthia Umma", photo: "foto/individu/raisa.jpg", hobby: "Menari, Desain, Mewarnai", quote: "luangkan waktumu sesingkat mungkin untuk beristirahat", ig: "@rrais4sa_", ultah: "02-24", nametag: "Raimut" },
  {
    id: 30,
    name: "Resita Kanaya Putri",
    photo: "foto/individu/resita.jpg",
    hobby: "Menggambar, melukis, memasak, dan membaca buku. ",
    quote: "With doubt in my heart, i still take the next step.",
    ig: "@this.rree",
    ultah: "10-09",
    nametag: "Resita",
  },
  { id: 31, name: "Satrio Sakshathkara Jauhar", photo: "https://i.vvvar.cc/150?u=31", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  {
    id: 32,
    name: "Selvi Zakia Tristi",
    photo: "foto/individu/selvi.jpg",
    hobby: "Berenang dan Traveling",
    quote: "I think the tiniest little thing can change the course of your day, which can change the course of your year, which can change who you are. - T. S. ",
    ig: "@selvizakia",
    ultah: "12-26",
    nametag: "Selvi",
  },
  {
    id: 33,
    name: "Talitha Abiyya Nabila Althaf",
    photo: "foto/individu/talita.jpg",
    hobby: "Bersepeda",
    quote: "Hanya perlu lebih baik dari kemarin, bukan lebih baik dari orang lain.",
    ig: "@thafnabilaa",
    ultah: "10-08",
    nametag: "Thalithoyy",
  },
  { id: 34, name: "Yastin Abby Ahmad", photo: "https://i.vvvar.cc/150?u=34", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 35, name: "Zaneta Putri Levina", photo: "https://i.vvvar.cc/150?u=35", hobby: "Musik", quote: "Enjoy the rhythm.", ig: "@eko_music" },
  { id: 36, name: "Ziviantita Ethaqailla Efizza L.", photo: "foto/individu/zivin.jpg", hobby: "Masak", quote: "JJ PTN,PTK I'M COMING", ig: "@ethaa4_", ultah: "01-04", nametag: "Jipin" },
];

const studentContainer = document.getElementById("studentList");
students.forEach((s) => {
  const el = document.createElement("div");
  el.className = "student-card";
  el.innerHTML = `
                <div class="student-id">ABSEN ${s.id}</div>
                <img src="${s.photo}" class="student-thumb" alt="${s.name}" loading="lazy">
                <div class="student-name">${s.name}</div>
            `;
  el.onclick = () => openModal(s);
  studentContainer.appendChild(el);
});

// --- MODAL FUNCTIONS ---
function openModal(s) {
  const content = document.getElementById("modalContent");
  content.innerHTML = `
                <div class="modal-header">
                    <img src="${s.photo}" class="modal-img" alt="${s.name}">
                    <h2 style="color:white; font-size:1.4rem;">${s.name}</h2>
                    <span style="color:var(--primary); font-size:0.9rem; font-weight:600;">ABSEN ${s.id}</span>
                </div>
                <div class="modal-body">
                    <div class="info-item">
                <i class="fa-solid fa-user-tag"></i> 
                <span>AKA : ${s.nametag || "-"}</span>
                </div>
                    <div class="info-item"><i class="fas fa-heart"></i><span>${s.hobby}</span></div>
                    <div class="info-item"><i class="fab fa-instagram"></i><span>${s.ig}</span></div>
                    <div class="quote-container"><i class="fas fa-quote-left"></i> ${s.quote}</div>
                </div>
            `;
  document.getElementById("bioModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bioModal").style.display = "none";
}

window.onclick = function (e) {
  if (e.target == document.getElementById("bioModal")) closeModal();
};

function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "";

  if (hour >= 5 && hour < 11) message = "Selamat Pagi";
  else if (hour >= 11 && hour < 15) message = "Selamat Siang";
  else if (hour >= 15 && hour < 18) message = "Selamat Sore";
  else message = "Selamat Malam";

  greetingElement.innerText = message;
}

// Panggil fungsi saat web dibuka
updateGreeting();

// Fungsi Ulang Tahun
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

function renderBirthdays() {
  const grid = document.getElementById("birthdayGrid");
  grid.innerHTML = ""; // Clear grid

  const today = new Date();
  const currentMD = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  monthNames.forEach((month, index) => {
    const monthNum = String(index + 1).padStart(2, "0");

    // Filter siswa yang lahir di bulan ini
    const studentsInMonth = students.filter((s) => s.ultah && s.ultah.startsWith(monthNum));

    let monthHTML = `
            <div class="month-card">
                <h3>${month.toUpperCase()}</h3>
                <div class="month-list">
        `;

    if (studentsInMonth.length > 0) {
      // Urutkan berdasarkan tanggal
      studentsInMonth.sort((a, b) => a.ultah.localeCompare(b.ultah));

      studentsInMonth.forEach((s) => {
        const isToday = s.ultah === currentMD ? "is-today" : "";
        const day = s.ultah.split("-")[1];

        monthHTML += `
                    <div class="bday-item ${isToday}" onclick="openModalById(${s.id})">
                        <img src="${s.photo}" class="bday-img">
                        <span><strong>${day}</strong> - ${s.name}</span>
                    </div>
                `;
      });
    } else {
      monthHTML += `<p style="color:var(--text-muted); font-size:0.7rem; text-align:center;">Tidak ada ultah</p>`;
    }

    monthHTML += `</div></div>`;
    grid.innerHTML += monthHTML;
  });
}

// Fungsi pembantu untuk buka modal dari ID
function openModalById(id) {
  const student = students.find((s) => s.id === id);
  if (student) openModal(student);
}

// Panggil fungsi render saat web pertama kali dimuat
renderBirthdays();

function openZoom(imageSrc) {
  const modal = document.getElementById("galleryModal");
  const img = document.getElementById("imgZoom");
  const downloadBtn = document.getElementById("downloadBtn");

  img.src = imageSrc; // Menampilkan foto yang diklik
  downloadBtn.href = imageSrc; // Menyiapkan link download

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Kunci scroll saat dizoom
}

function closeZoom() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Aktifkan scroll lagi
}

// Tutup zoom jika user menekan tombol 'Esc' di keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeZoom();
});
