function openSurprise() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");

    opening.style.opacity = "0";
    opening.style.transition = "opacity 0.8s ease";

    setTimeout(function () {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts();

    }, 800);
}


function celebrate() {

    createHearts();

    const button = document.querySelector(".final button");

    button.innerHTML = "❤️ Love Forever ❤️";

    setTimeout(function () {
        button.innerHTML = "Celebrate ❤️";
    }, 3000);
}


function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 2000 + Math.random() * 2500;

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            heart.remove();
        }, duration);
    }
}
