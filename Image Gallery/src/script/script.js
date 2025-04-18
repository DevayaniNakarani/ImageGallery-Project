const thumbnails = document.querySelectorAll(".thumbnail");
const previewBox = document.getElementById("previewBox");
const previewImg = document.getElementById("previewImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function showPreview(index) {
  currentIndex = index;
  previewImg.src = thumbnails[index].src;
  previewBox.style.display = "flex";
}

thumbnails.forEach((img, index) => {
  img.addEventListener("click", () => {
    showPreview(index);
  });
});

closeBtn.addEventListener("click", () => {
  previewBox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  previewImg.src = thumbnails[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  previewImg.src = thumbnails[currentIndex].src;
});
