$(document).ready(function(){
    $("#move").click(function(){
        $("p:odd").each(function(index, element){
            var text = $(element).text()
            $(element).addClass("moved")
            $("p:even").eq(index).text(text)
        })
    })
})
