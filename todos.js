$("ul").on("click", "li", function(){
    $(this).toggleClass("complete");

});
// click on x to delete

$("ul").on("click", "span", function(e){
    //removes containter li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //stops the bubbling to parents
    e.stopPropagation();


});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        let todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");

    }
});





















