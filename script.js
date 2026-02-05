const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");


noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);


function moveButton() {
const x = Math.random() * 200 - 100;
const y = Math.random() * 200 - 100;
noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


yesBtn.addEventListener("click", () => {
window.location.href = "yes.html";
});