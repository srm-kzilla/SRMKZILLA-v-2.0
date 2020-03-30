var swiper = new Swiper('.swiper-container', {
        speed:1000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
});