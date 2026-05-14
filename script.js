fetch("config.json")
  .then((r) => r.json())
  .then((cfg) => {
    const page = document.body.dataset.page;

    if (page === "yes") {
      document.querySelector("h1").textContent = cfg.yesTitle;
      document.querySelector("p").textContent = cfg.yesSubtext;
      document.querySelector("img").src = cfg.yesImageUrl;
      return;
    }

    document.getElementById("question").textContent = cfg.question;
    document.getElementById("mainGif").src = cfg.gifUrl;
    document.getElementById("yesBtn").textContent = cfg.yesLabel;
    document.getElementById("noBtn").textContent = cfg.noLabel;

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
  });
