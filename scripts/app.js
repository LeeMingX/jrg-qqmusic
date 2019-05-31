$(document).ready(function () {
    let slider = new Slider(".swiper-container",
        [{
                href: "#",
                img: "images/slide1.jpg"
            },
            {
                href: "#",
                img: "images/slide2.jpg"
            },
            {
                href: "#",
                img: "images/slide3.jpg"
            },
            {
                href: "#",
                img: "images/slide4.jpg"
            },
            {
                href: "#",
                img: "images/slide5.jpg"
            }
        ])
    slider.render()
})