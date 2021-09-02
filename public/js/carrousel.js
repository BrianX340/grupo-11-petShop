slideIndex = 0;

//showSlides();

async function showSlides() {
    slides = document.getElementsByClassName("carrouselImages");
    for (i = 0; i < slides.length; i++) {
        if(i==slideIndex-1){
            opacidad = 1.0
            slides[i].classList.remove('carrousel-in');
            slides[i].classList.add('carrousel-out');
            for (j=0 ; j<10 ; j++){
                slides[i].style.opacity = opacidad
                opacidad -= 0.1
                await sleep(50);
            }
        }
        slides[i].style.display = "none";
        slides[i].classList.remove('carrousel-in');
        slides[i].classList.remove('carrousel-out');
    }

    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].classList.add('carrousel-in');
        slides[slideIndex-1].style.display = "flex";

        opacidad = 0.1
        for (j=0 ; j<10 ; j++){
            slides[slideIndex-1].style.opacity = opacidad
            opacidad += 0.1
            await sleep(50);
        }

        setTimeout(showSlides,4000);
    }

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}