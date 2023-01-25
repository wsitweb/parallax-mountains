const   heightContentBlock = document.querySelector('.content').clientHeight,
        heightParallaxBlock = document.querySelector('.parallax').clientHeight,

        elementFog = document.querySelector('.parallax__fog'),

        elementMontainMain = document.querySelector('.parallax__montain_1'),
        elementMontainAfterOne = document.querySelector('.parallax__montain_2'),
        elementMontainAfterTwo = document.querySelector('.parallax__montain_3');

window.addEventListener('scroll',function(event) {
    let scrollTop = this.scrollY,
        widthWindow = this.innerWidth,

        calcScrollContent = scrollTop / heightContentBlock * 100,
        calcScrollParallax = scrollTop / heightParallaxBlock * 100,

        opacityElements = 1 - 1 / 100 * calcScrollParallax,


        scaleElements = 1 + (widthWindow / 1e4 * calcScrollParallax),
        scaleElementsSlow = 1 + (widthWindow / 5e6 * calcScrollContent),
        scaleElementsSlowTwo = 1 + (widthWindow / 5e5 * calcScrollParallax),
        scaleElementsSlowThre = 1 + (widthWindow / 1e5 * calcScrollParallax),

        translate3dElements =  widthWindow / 3000 * calcScrollParallax,
        translate3dElementsTwo =  widthWindow / 1500 * calcScrollParallax;
        
    elementFog.style.transform = `scale(${scaleElements})`;
    elementFog.style.opacity = `${opacityElements}`;

    elementMontainMain.style.transform = `scale(${scaleElementsSlow})`;
    elementMontainAfterOne.style.transform = `translate3d(${translate3dElements}px, 0, 0) scale(${scaleElementsSlowTwo})`;
    elementMontainAfterTwo.style.transform = `translate3d(${translate3dElementsTwo}px, 0, 0) scale(${scaleElementsSlowThre})`;
});
console.log();