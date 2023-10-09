$(document).ready(function () {
    $(".one").on('click', function () {
        $("body").css({ color: '#fff', background: "#009689" })
        $(".btn").css({color:'black',background:"yellow"})
        // $(".product-img").attr("src","")
    })
    $(".two").on('click', function () {
        $("body").css({ color: '#000', background: "#ff00ff" })
        // $(".product-img").attr("src","")
           $(".btn").css({color:'#fff',background:"green"})
    })
    $(".three").on('click', function () {
        $("body").css({ color: 'black', background: "#fF5580" })
        // $(".product-img").attr("src","")
           $(".btn").css({color:'black',background:"white"})
    })
})