document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih telah melakukan pemesanan. Kami akan menghubungi Anda melalui WhatsApp atau email.");
});
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const metode = document.getElementById("metode").value;
  const qrisSection = document.getElementById("qrisSection");

  if (metode === "whatsapp") {
    const message = `Halo Syco Parfum,%0ASaya ingin memesan:%0A- Nama: ${name}%0A- Email: ${email}%0A- Produk: ${product}%0A- Jumlah: ${quantity}%0AMetode: WhatsApp`;
    const whatsappURL = `https://wa.me/6285759631758?text=${message}`;
    window.open(whatsappURL, "_blank");
    qrisSection.style.display = "none";
  } else if (metode === "qris") {
    qrisSection.style.display = "block";
    alert("Silakan scan QRIS untuk melanjutkan pembayaran.");
  }
});
 // Animasi scroll muncul
 const sections = document.querySelectorAll(".products-section, .payment-section, .contact-section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add("fade-up");
    }
  });
});
 // Animasi scroll ke kanan saat klik ikon ☰
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  nav.scrollBy({
    left: 200,
    behavior: "smooth"
  });
});
