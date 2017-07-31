$(".enlarge").on("click", function()
{
    $('.enlargedimage').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');
})