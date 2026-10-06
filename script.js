/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");

    opening.style.transition = "opacity 1s ease, transform 1s ease";
    opening.style.opacity = "0";
    opening.style.transform = "scale(1.05)";

    setTimeout(function () {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startFloatingHearts();
        startCounter();

    }, 1000);
}


/* =========================
   FLOATING HEARTS
========================= */

function startFloatingHearts() {

    const container =
        document.getElementById("floatingHearts");

    setInterval(function () {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const hearts = [
            "❤️",
            "♡",
            "💕",
            "💗"
        ];

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        const duration =
            6 + Math.random() * 6;

        heart.style.animationDuration =
            duration + "s";

        container.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, duration * 1000);

    }, 900);
}


/* =========================
   LIVE LOVE COUNTER
========================= */

function startCounter() {

    const startDate =
        new Date("2026-09-07T00:00:00");

    function updateCounter() {

        const now =
            new Date();

        let difference =
            now.getTime() -
            startDate.getTime();

        if (difference < 0) {
            difference = 0;
        }

        const totalSeconds =
            Math.floor(
                difference / 1000
            );

        const days =
            Math.floor(
                totalSeconds / 86400
            );

        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );

        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );

        const seconds =
            totalSeconds % 60;

        const months =
            Math.floor(days / 30);

        const remainingDays =
            days % 30;


        document.getElementById("months").innerText =
            months;

        document.getElementById("days").innerText =
            remainingDays;

        document.getElementById("hours").innerText =
            hours;

        document.getElementById("minutes").innerText =
            minutes;

        document.getElementById("seconds").innerText =
            seconds;
    }

    updateCounter();

    setInterval(
        updateCounter,
        1000
    );
}


/* =========================
   PHOTO FULLSCREEN VIEWER
========================= */

const photos =
    document.querySelectorAll(".photo-card");

const viewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");


photos.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const image =
                card.querySelector("img");

            viewerImage.src =
                image.src;

            viewer.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";
        }
    );

});


function closeViewer() {

    viewer.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


/* Close viewer by clicking outside image */

viewer.addEventListener(
    "click",
    function (event) {

        if (
            event.target === viewer
        ) {

            closeViewer();

        }

    }
);


/* Close viewer with ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeViewer();

        }

    }
);


/* =========================
   CELEBRATE
========================= */

function celebrate() {

    const container =
        document.getElementById(
            "celebration"
        );

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨",
        "🌸"
    ];

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.className =
            "celebration-heart";

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        container.appendChild(
            heart
        );

        setTimeout(
            function () {

                heart.remove();

            },
            4500
        );
    }


    const button =
        document.querySelector(
            ".celebrate-button"
        );

    button.innerHTML =
        "❤️ Love Forever ❤️";

    button.style.transform =
        "scale(1.08)";


    setTimeout(
        function () {

            button.innerHTML =
                "Celebrate Our Love ❤️";

            button.style.transform =
                "scale(1)";

        },
        4000
    );
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".timeline-item, " +
        ".letter, " +
        ".promise-content, " +
        ".final-content"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 1s ease, " +
            "transform 1s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =========================
   IMAGE LAZY LOADING
========================= */

document
    .querySelectorAll(
        ".photo-card img"
    )
    .forEach(
        function (image) {

            image.loading =
                "lazy";

        }
    );


/* =========================
   MUSIC
========================= */

let musicStarted = false;

let audio = null;


function toggleMusic() {

    const button =
        document.getElementById(
            "musicButton"
        );


    if (!audio) {

        audio =
            new Audio(
                "music.mp3"
            );

        audio.loop = true;

    }


    if (audio.paused) {

        audio.play()
            .then(
                function () {

                    musicStarted =
                        true;

                    button.innerHTML =
                        "♫";

                    button.style.transform =
                        "rotate(360deg)";

                }
            )
            .catch(
                function () {

                    alert(
                        "Please add a music.mp3 file inside your GitHub repository."
                    );

                }
            );

    } else {

        audio.pause();

        button.innerHTML =
            "♪";

        button.style.transform =
            "rotate(0deg)";
    }
}


/* =========================
   DOUBLE TAP HEART
========================= */

let lastTap = 0;


document.addEventListener(
    "touchend",
    function (event) {

        const now =
            new Date().getTime();

        const timeSinceLastTap =
            now - lastTap;


        if (
            timeSinceLastTap < 350 &&
            timeSinceLastTap > 0
        ) {

            const target =
                event.target.closest(
                    ".photo-card"
                );


            if (target) {

                createTapHeart(
                    event.changedTouches[0].clientX,
                    event.changedTouches[0].clientY
                );

            }

        }


        lastTap = now;

    }
);


function createTapHeart(
    x,
    y
) {

    const heart =
        document.createElement(
            "div"
        );

    heart.innerHTML =
        "❤️";

    heart.style.position =
        "fixed";

    heart.style.left =
        x + "px";

    heart.style.top =
        y + "px";

    heart.style.zIndex =
        "30000";

    heart.style.pointerEvents =
        "none";

    heart.style.fontSize =
        "55px";

    heart.style.transform =
        "translate(-50%, -50%) scale(.5)";

    heart.style.transition =
        "all .8s ease";

    document.body.appendChild(
        heart
    );


    requestAnimationFrame(
        function () {

            heart.style.transform =
                "translate(-50%, -100px) scale(1.4)";

            heart.style.opacity =
                "0";

        }
    );


    setTimeout(
        function () {

            heart.remove();

        },
        900
    );
}


/* =========================
   PREVENT IMAGE DRAG
========================= */

document
    .querySelectorAll("img")
    .forEach(
        function (image) {

            image.addEventListener(
                "dragstart",
                function (event) {

                    event.preventDefault();

                }
            );

        }
    );
