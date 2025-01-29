document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const yesModal = document.getElementById("yes-modal");

    // Show "Yeyyyy" modal when "Yes" is clicked
    yesBtn.addEventListener("click", () => {
        yesModal.style.display = "flex";
    });

    // Make "No" button unclickable by moving it
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
