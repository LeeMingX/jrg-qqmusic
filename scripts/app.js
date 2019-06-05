$(document).ready(function () {
    fetch("json/slide.json")
        .then((resp) => resp.json())
        .then(init_slide)

    function init_slide(slide) {
        let slider = new Slider(".swiper-container",
            slide.data.slider.map((item) => {
                return {
                    href: item.linkUrl,
                    img: item.picUrl
                }
            }))
        slider.render()
    }

    let nav = new NavigationBar($("nav>ul>li"), $("section>div"))
})