$(document).ready(function(){
    $(".menu-item").mouseenter(function(){
        $(this).animate({width: '300px'}, 300)
    })

    $(".menu-item").mouseleave(function(){
        $(this).animate({width: '100px'}, 300)
    })

    $(".menu-item").click(function(){
        alert($(this).attr('data-name'))
    })
})
