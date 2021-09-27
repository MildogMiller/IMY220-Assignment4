$(document).ready(() => {
    //handle update logic
    $("button").on('click', function () {
        if ($(this).hasClass("update")) {
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

    //since we cant add more classes just using the col
    $(".col").append("<input type='file' class='form-control' name='img' id='img' accept='image/png,image/jpg'/>");
    $("#img").change(function () {
        if($('#img').get(0).files[0]){
            var read=new FileReader();
            read.onload=()=>$("img").attr("src",read.result);
            read.readAsDataURL($('#img').get(0).files[0]);
        }
    });


});
