$(document).ready(() => {
    $("button").on('click', function () {
        if($(this).hasClass("update")){
            $(this).parent().children().not("button").toggle();
            $(this).parent().children("span").html($(this).parent().children("input").val());
            $(this).parent().children("input").remove();
            $(this).parent().children("button").toggleClass("update").html("Edit");
        }
        else {
            $(this).parent().children().not("button").toggle();
            $(this).parent().prepend("<input class='col-8' type='" + $(this).parent().attr("data-type") + "' value='" + $(this).parent().children("span").html() + "'></input>");
            $(this).parent().children("button").toggleClass("update").html("Update");
        }
    });
});
