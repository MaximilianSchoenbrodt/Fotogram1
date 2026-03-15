const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
];

const labels = [
  "Surferin",
  "Schuhe",
  "Ungeheuer",
  "blauer Planet",
  "Haus",
  "Frau in schwarz/weis",
  "Pflanze",
  "Meer & Mond",
  "Zitronen",
  "Katzen",
];

const grid = document.getElementById("picGrid");
const viewer = document.getElementById("imgViewer");
const viewerImg = document.getElementById("viewerImg");
const viewerText = document.getElementById("viewerText");

let current = 0;

function buildGallery() {
  for (let i = 0; i < images.length; i++) {
    const figure = document.createElement("figure");
    figure.classList.add("thumb-item");

    const img = document.createElement("img");
    img.src = images[i];
    img.alt = labels[i];
    img.classList.add("thumb-img");

    img.addEventListener("click", () => openViewer(i));

    figure.appendChild(img);
    grid.appendChild(figure);
  }
}

function openViewer(index) {
  current = index;
  viewerImg.src = images[current];
  viewerText.textContent = labels[current];
  viewer.showModal();
}

function closeViewer() {
  viewer.close();
}

function nextImage() {
  current++;
  if (current >= images.length) current = 0;
  viewerImg.src = images[current];
  viewerText.textContent = labels[current];
}

function prevImage() {
  current--;
  if (current < 0) current = images.length - 1;
  viewerImg.src = images[current];
  viewerText.textContent = labels[current];
}

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) closeViewer();
});

document.querySelector(".viewer-next").addEventListener("click", nextImage);
document.querySelector(".viewer-prev").addEventListener("click", prevImage);
document.querySelector(".viewer-close").addEventListener("click", closeViewer);

buildGallery();
