document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(event) {
        const scrolledPixels = window.pageYOffset;
        const widthWindow = window.outerWidth;
        const heightContentBox = document.querySelector('.content').offsetHeight;
        const heightTopBox = document.querySelector('.parallax').offsetHeight;
        const scrolledProcent = scrolledPixels / heightContentBox * 100;
        const scrolledTopBoxProcent = scrolledPixels / heightTopBox * 100;
        const customOpacity = 1 - 1 / 100 * scrolledTopBoxProcent;

        const zoomLevel1 = 1 + (widthWindow / 10000 * scrolledTopBoxProcent);
        document.querySelector('.parallax_fog').style.transform = 'scale(' + zoomLevel1 + ')';
        document.querySelector('.parallax_fog').style.opacity = customOpacity;

        const zoomLevel2 = 1 + (widthWindow / 5000000 * scrolledProcent);
        document.querySelector('.parallax_mountain_1').style.transform = 'scale(' + zoomLevel2 + ')';

        const hrizontal = widthWindow / 2000 * scrolledTopBoxProcent;
        const zoomLevel3 = 1 + (widthWindow * 0.000005 * scrolledTopBoxProcent);
        document.querySelector('.parallax_mountain_2').style.transform = 'translate3d(' + hrizontal + 'px, 0, 0) scale(' + zoomLevel3 + ')';

        const hrizontal2 = widthWindow / 1500 *scrolledTopBoxProcent;
        const zoomLevel4 = 1 + (widthWindow * 0.00001 * scrolledTopBoxProcent);
        document.querySelector('.parallax_mountain_3').style.transform = 'translate3d(' + hrizontal2 + 'px, 0, 0) scale(' + zoomLevel4 + ')';


        const scrollBlock = document.querySelector('.scroll-block');
        if(scrolledPixels > 50) {
            scrollBlock.style.display = 'none';
        } else {
            scrollBlock.style.display = 'flex'; 
        }

        
        
        const fog = document.querySelector('.fog');
        const parallaxFog = document.querySelector('.parallax_fog');
        if(scrolledPixels > 550) {
            fog.style.zIndex = "0";
            parallaxFog.style.display = 'none';
        } else {
            fog.style.zIndex = "3"; 
            parallaxFog.style.display = 'block';
        }

        // const parallaxMountain2 = document.querySelector('.parallax_mountain_2');
        // const parallaxMountain3 = document.querySelector('.parallax_mountain_3');

        // if(scrolledPixels > 599) {
        //   parallaxMountain2.style.zIndex = "0";
        //   parallaxMountain3.style.zIndex = "0";
        // } else {
        //    parallaxMountain2.style.zIndex = "2";
        //    parallaxMountain3.style.zIndex = "2";
        // }
        
    });
});
 

const scrollIco = document.querySelector('.scroll-ico');
scrollIco.onclick = function() {
    window.scroll({
        top: 600,  
        behavior: 'smooth',
      });
};



// ---- отмена hover на мобильных устройствах ---  пока не работает -----


// if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
//     console.log('this is a touch device');
//   } else {
//     console.log('this is not a touch device');
//     document.body.classList.add('no-touch');
//   }


// -----------------------------------









// const scrollIco = document.querySelector('.scroll-ico');
// scrollIco.onclick = scrollTo(window, 700, 2000);
// function scrollTo(element, to, duration) {
//     if (duration <= 0) return;
//     var difference = to - element.scrollTop;
//     var perTick = difference / duration * 10;

//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }


// window.onload = function(){

// 	var scrolled;
// 	var timer;

// 	document.querySelector('.scroll-ico').onclick = function(){
// 		//scrolled = window.pageYOffset;
// 		//window.scrollTo(0,0);
// 		scrollToTop();
// 	}
// 	function scrollToTop(){
// 		if (scrolled < 10) {
// 			window.scrollTo(0, scrolled);
// 			scrolled = scrolled - 50; //100 - скорость прокрутки
// 			timer = setTimeout(scrollToTop, 200);
// 		}
// 		else {
// 			clearTimeout(timer);
// 			window.scrollTo(0,0);
// 		}
// 	}
// }


