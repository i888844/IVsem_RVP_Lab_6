$(document).ready(function(){
    var boxes = [$("#div1"), $("#div2"), $("#div3"), $("#div4"), $("#div5")]
    var index = 0
    var direction = 1

    function toggleBox() {
        boxes[index].fadeToggle(500, function() {
            index += direction
            if (index >= boxes.length) {
                index = boxes.length - 1
                direction = -1
            } else if (index < 0) {
                index = 0
                direction = 1
            }
            toggleBox()
        })
    }

    $("#toggle").click(toggleBox)
})
