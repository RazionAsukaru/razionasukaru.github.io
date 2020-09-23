
$('.scroll').on('click',function(e){
    
    var tujuan = $(this).attr('href');
    
    var elemen = $(tujuan);
    console.log(elemen)
    $('body').animate({
        scrollTop: elemen.offset()
    });
    e.preventDefault()
});
