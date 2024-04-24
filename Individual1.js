$(document).ready(function(){
    $("#hide").click(function(){
        $("tr:even").hide()
    })

    $("#show").click(function(){
        $("tr:even").show()
    })
})
