const button = document.getElementById("bottone");

const image = document.createElement("img");

const figure = document.getElementById("lamps");

const switchButton = document.getElementById("switch-button");

figure.append(image);
image.src = "./img/white_lamp.png";
image.className = "d-block";

button.addEventListener("click", () => {
    if (image.src.includes("yellow_lamp.png")) {
        image.src = "./img/white_lamp.png";
        switchButton.innerHTML = "ACCENDI";
    } else {
        image.src = "./img/yellow_lamp.png";
        switchButton.innerHTML = "SPEGNI";
    }

    button.classList.toggle("btn-danger");
});
