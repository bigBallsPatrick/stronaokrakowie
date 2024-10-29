// Otwieranie modalu
function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

// Zamykanie modalu
function closeModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    const iframe = modal.querySelector("iframe");
    const src = iframe.src;
    iframe.src = ""; // Zatrzymanie filmu
    iframe.src = src; // Przywrócenie oryginalnego src
}

// Zamknij modal przy kliknięciu poza treścią modalu
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeModal();
    }
}
