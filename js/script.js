document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        padding: { left: 0, right: 0 },
        pagination: false,
        width: 1200,
        autoWidth: true,
        gap: 24,

        breakpoints: {
            1024: {
                perPage: 3,
                width: 894
            },
            768: {
                perPage: 2,
                width: 588
            },
            425: {
                perPage: 1,
                width: 288
            }
        }

    });
    splide.mount();
});