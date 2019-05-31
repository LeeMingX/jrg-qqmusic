class Slider {
    constructor(slide_cls, slide_el = [], options = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        }
    }) {
        this.slide_cls = slide_cls
        this.slide_el = slide_el
        this.options = options
        this.insert_slide_el(slide_el)
        this.slider = null
    }

    set_option(key, value) {
        this.options[key] = value
    }

    insert_slide_el() {
        for (let i = 0; i < this.slide_el.length; ++i) {
            $(`${this.slide_cls}> .swiper-wrapper`).append(
                `<div class="swiper-slide">
                    <a href="${this.slide_el[i].href}">
                        <img src="${this.slide_el[i].img}" alt="slide${i+1}">
                    </a>
                </div>`
            )
        }
    }

    render() {
        this.slider = new Swiper(this.slide_cls, this.options)
    }
}
// ! function () {
//     let swiper_generator = {
//         view: '.swiper-container',
//         init_attr: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             loop: true,
//             autoplay: {
//                 delay: 2500,
//                 disableOnInteraction: false
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: false,
//             }
//         },
//         init: function () {
//             return new Swiper(this.view, this.init_attr)
//         }
//     }
//     let swiper = swiper_generator.init()
// }()