document.getElementById("celebrateButton").addEventListener("click", function () {
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    message.style.animation = "fadeIn 1s ease-in-out forwards";

    // Trigger a confetti effect (optional, can use a library like canvas-confetti for better results)
    alert("🎉 Thank you for celebrating with us! 🎉");
});
