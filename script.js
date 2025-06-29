let navClose = document.getElementById("navClose");
let navList = document.getElementById("list");
let nav = document.getElementById("nav");
let close_url = document.getElementById("close_url");
let urlList = document.getElementById("urlList");
let ring = document.getElementById("ring");
let toggleButtons = document.querySelectorAll(".toggleQuestion");
let allParagraphs = document.querySelectorAll(".paragraphQ");
let titleP = document.querySelectorAll(".titleP");

navClose.onclick = () => {
  nav.style.display = "none";
};

navList.onclick = () => {
  nav.style.display = "block";
};

close_url.onclick = () => {
  urlList.style.display = "none";
};

ring.onclick = () => {
  urlList.style.display = "block";
};

toggleButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const paragraph = allParagraphs[index];
    const heading = titleP[index];

    if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
      heading.classList.add("active");
      btn.src = "./assets/image/Star-open.png";
    } else {
      paragraph.style.display = "none";
      btn.src = "./assets/image/star-white.png";
      heading.classList.remove("active");
    }
  });
});

function showCurrentTime() {
  const dates = document.querySelectorAll(".date");

  const updateTime = () => {
    const now = new Date();

    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const format = (n) => n.toString().padStart(2, "0");

    if (dates.length >= 4) {
      dates[0].textContent = format(day);
      dates[1].textContent = format(hours);
      dates[2].textContent = format(minutes);
      dates[3].textContent = format(seconds);
    }
  };

  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener("DOMContentLoaded", showCurrentTime);
