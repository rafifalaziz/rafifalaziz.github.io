const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {
    document.getElementById("guest-name").textContent = guest;
} else {
    document.getElementById("guest-name").textContent = "Tamu Undangan";
}

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
    ".flower",
    { scale: 0 },
    {
        scale: 1,
        duration: 1,
        ease: "power1.inOut"
    }
);
gsap.from(
    ".image-wrapper",
    {
        scale: 0.75,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    }
);
const openBtn = document.getElementById("openInvitation");

openBtn.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");

    music.play();
    gsap.to("#pageOne", {
        opacity: 0,
        y: -100,
        duration: 1,
        onComplete: () => {

            document.getElementById("pageOne").style.display = "none";

            const pageTwo = document.getElementById("pageTwo");

            pageTwo.style.display = "block";

            gsap.from(pageTwo, {
                opacity: 0,
                duration: 1
            });

            gsap.from("#flower5", {
                y: 150,
                rotation: 20,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });

            gsap.from("#flower6", {
                y: 150,
                rotation: -20,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.15
            });

            ScrollTrigger.refresh();

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pageTwo",
                    start: "1% top",
                    end: "+=500",
                    scrub: 1.5,
                }
            });

            tl.to("#flower5", {
                x: -180,
                y: 40,
                rotation: -20,
                autoAlpha: 0,
                ease: "none"
            }, 0);

            tl.to("#flower6", {
                x: 180,
                y: 40,
                rotation: 20,
                autoAlpha: 0,
                ease: "none"
            }, 0);
            const coupleTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".couple-section",
                    start: "top 75%",
                    end: "top 40%",
                    toggleActions: "play none none none",
                    markers: false
                }
            });

            coupleTl
                .from(".bismillah", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                })
                .from(".invite-text", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.4")
                .from(".person:first-of-type", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.3")
                .from(".ampersand", {
                    scale: 0,
                    rotation: 180,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(".person:last-of-type", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.3")
                .from(".date", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.7
                }, "-=0.3")
                .from(".event-box", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.3")
                .from(".address", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(".joglo-wrapper", {
                    opacity: 0,
                    duration: 3
                }, "-=0.3");

            const track = document.querySelector(".gallery-track");
        }
    });
});

const modal = document.getElementById("giftModal");

document.getElementById("openGiftModal").onclick = () => {
    modal.style.display = "flex";
};

document.getElementById("closeGiftModal").onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

function copyRekening(id) {
    const rekening = document.getElementById(id).textContent;

    navigator.clipboard.writeText(rekening);
}