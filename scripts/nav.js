class NavigationBar {
    constructor($bar_btn, $ctl_view) {
        $($bar_btn[0]).addClass("active")
        $($ctl_view[0]).siblings().hide()
        $bar_btn.on("click", (e) => {
            $(e.currentTarget)
                .addClass("active")
                .siblings()
                .removeClass("active")
            $($ctl_view[$(e.currentTarget).index()])
                .show()
                .siblings()
                .hide()
        })
    }
}