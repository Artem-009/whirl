let hamburgerMenu = document.querySelector('.hamburger-menu');
let navigationMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');
});



let accordion = document.getElementsByClassName("accordion-btn");
let i;

// select first element (querySelector) because then it will close when the user clicks on any accordion item
let currentPanel = document.querySelector('.panel');

let promise = new Promise(function (resolve, reject) {
    resolve(document.querySelector(".accordion-btn").classList.add('active'));
});

promise.then(function () {
    let panel = document.querySelector('.panel'); // querySelector - select first element
    panel.style.maxHeight = `${panel.scrollHeight}px`;
});

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (currentPanel) {
            let previousButton = currentPanel.previousElementSibling;
            previousButton.classList.remove('active');
        }
        if (currentPanel && currentPanel !== panel) {
            currentPanel.style.maxHeight = null;
        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            currentPanel = panel;
        }
    });
}