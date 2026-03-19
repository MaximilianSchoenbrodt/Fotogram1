let images = [
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

let labels = [
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

let currentIndex = 0;

function init() {
  let gridRef = document.getElementById("picGrid");
  for (let i = 0; i < images.length; i++) {
    gridRef.innerHTML += renderThumbnail(i);
  }
}

function renderThumbnail(index) {
  return `
    <figure class="thumb-item">
      <img 
        class="thumb-img" 
        src="${images[index]}" 
        alt="${labels[index]}" 
        tabindex="0"
        onclick="openViewer(${index})"
        onkeydown="openOnEnter(event, ${index})">
    </figure>
  `;
}

function openOnEnter(event, index) {
  if (event.key === "Enter") {
    openViewer(index);
  }
}

function openViewer(index) {
  currentIndex = index;
  updateViewerContent();
  let viewer = document.getElementById("imgViewer");
  viewer.showModal();
}

function updateViewerContent() {
  let viewerImg = document.getElementById("viewerImg");
  let viewerText = document.getElementById("viewerText");
  viewerImg.src = images[currentIndex];
  viewerImg.alt = labels[currentIndex];
  viewerText.textContent = labels[currentIndex] + " (" + (currentIndex + 1) + "/" + images.length + ")";
}

function closeViewer() {
  let viewer = document.getElementById("imgViewer");
  viewer.close();
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  updateViewerContent();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  updateViewerContent();
}

function handleKeydown(event) {
  let viewer = document.getElementById("imgViewer");
  if (!viewer.open) return;
  if (event.key === "ArrowRight") nextImage();
  if (event.key === "ArrowLeft") prevImage();
  if (event.key === "Escape") closeViewer();
}

window.onclick = function (event) {
  let viewer = document.getElementById("imgViewer");
  if (event.target === viewer) closeViewer();
};

document.onkeydown = handleKeydown;
