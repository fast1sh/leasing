import $ from 'jquery';
import 'slick-carousel';

const slider = () => {
    const mainSlider = $('.main-slider');
    const svgLoader = `
            <div class="main-slider__loader">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1" filter="url(#filter0_d)">
                    <circle cx="24" cy="24" r="23" stroke="white" stroke-width="2" stroke-dasharray="629"/>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feOffset dy="10"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </div>`;

    mainSlider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    const mainSliderNextBtn = $('.main-slider .slick-next');
    mainSliderNextBtn.append(svgLoader);

    const mainSliderNextBtnLoader = $('.main-slider .slick-next .main-slider__loader');
    mainSliderNextBtnLoader.addClass('going');

    mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        mainSliderNextBtnLoader.removeClass('going');
    });

    mainSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        mainSliderNextBtnLoader.addClass('going');
    });
};

export default slider;