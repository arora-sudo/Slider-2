v = {
    "main": $(".cd"),
    "spd": 3000,
    "blank": {}
};

$(document).ready(function () 
{
    v.blank = setInterval(nextSlide, v.spd);
})

$('.contBtns').on('click', '.prevBtn', function () 
{
    prevSlide();
    
})
$('.contBtns').on('click', '.nxtBtn', function () 
{
    nextSlide();
    
})
function nextSlide() {
    cur = $(".active");
    next = cur.removeClass('active').next();
    newCur = next.length ? next : cur.prevAll().last();
    newCur.addClass('active');

}

function prevSlide() {
    cur = $(".active");
    prev = cur.removeClass('active').prev();
    newCur = prev.length ? prev : cur.nextAll().last();
    newCur.addClass('active');
}