// ===============================
// OPEN SURPRISE
// ===============================

let openBtn = document.querySelector("#openBtn");

openBtn.addEventListener("click", function () {

    document.querySelector(".message-section").scrollIntoView({
        behavior: "smooth"
    });

});



// ===============================
// ONE MORE THING
// ===============================

let moreBtn = document.querySelector("#moreBtn");

let hiddenMessage =
    document.querySelector("#hiddenMessage");


moreBtn.addEventListener("click", function () {

    hiddenMessage.classList.add("show");

    moreBtn.innerText = "❤️";

    createHearts();

});



// ===============================
// FLOATING HEARTS
// ===============================

function createHearts() {

    for (let i = 0; i < 18; i++) {

        let heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerText = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 6000);

    }

}