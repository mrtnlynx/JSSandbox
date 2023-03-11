const currentMainImage = document.querySelector(".gallery-image4 img");
const imageToChooseFrom = document.querySelectorAll(".gallery img");

imageToChooseFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {

    imageToChooseFrom.forEach(img => img.style.opacity = 1);

    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}