const lightRed = document.querySelector("#red");
const lightYellow = document.querySelector("#yellow");
const lightGreen = document.querySelector("#green");
const actionText = document.querySelector("#action-text");

const lights = [lightRed, lightYellow, lightGreen];
const messages = ["Стой!", "Жди!", "Иди!"];

function trafficLights() {
    const activeLight = document.querySelector(".light.active");
    activeLight.classList.remove("active");
    const currentIndex = lights.indexOf(activeLight);
    const nextIndex = (currentIndex + 1) % lights.length;
    lights[nextIndex].classList.add("active");
    actionText.textContent = messages[nextIndex];
}
lightRed.onclick = trafficLights;
lightYellow.onclick = trafficLights;
lightGreen.onclick = trafficLights;
