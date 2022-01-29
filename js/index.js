window.addEventListener("load", function() {
    var header_nav = document.querySelector("#header_nav");
    var banner = document.querySelector(".banner")
    var b_hight = 15;
    alert(1);
    window.addEventListener('resize', function() {
        b_hight = b_hight + header_nav.style.height;
        console.log(b_hight);
        banner.style.marginTop = b_hight + "px";
    })
})