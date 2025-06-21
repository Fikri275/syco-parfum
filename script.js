const stokProduk = {
  Korelis: 5,
  Melankolis: 3,
  Sanguinis: 4,
  Plegmatis: 2
};

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
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

