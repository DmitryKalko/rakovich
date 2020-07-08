const lightBoxContainer = document.querySelector(".lightbox");
const portfolioItems = document.querySelector(".portfolio-item").children;
const lightboxImage = document.querySelector(".lightbox-img");
const counter = document.querySelector(".lightbox-counter");
const lightboxText = document.querySelector(".lightbox-text");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let index;
let imgSrc;

lightBoxContainer.addEventListener("click", function(event){
    
    if(event.target !== lightboxImage && event.target !== prevButton && event.target !== nextButton) {
        lightbox();
    }
})

for(let i = 0; i < portfolioItems.length; i++){
    
    portfolioItems[i].addEventListener("click", function(){
        index = i;
        
        changeImage();
        lightbox();
    })
}

function next() {
    if(index === portfolioItems.length - 1) {
        index = 0;
    } else{
        index++;
    }
    changeImage();
}
function prev() {
    if(index === 0){
        index = portfolioItems.length - 1;
    } else {
        index --;
    }
    changeImage();
}

function lightbox() {
    lightBoxContainer.classList.toggle("open");
}

function changeImage() {
    imgSrc = portfolioItems[index].querySelector("img").getAttribute("src");
    lightboxImage.src = imgSrc;
    counter.innerHTML = (index + 1) + " из " + portfolioItems.length;
    lightboxText.innerHTML = portfolioItems[index].querySelector("h2").innerHTML;
}




