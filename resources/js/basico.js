$(document).ready(function(){
    /*programar slider*/
    let listaImg = $('#sliderImg img').length;
    let posicionImg = 1;

    $('#sliderImg img').hide();
    $('#sliderImg img:first-child').show(); //visualiza la primera imagen

    //funcion de delay, para que despues de 4s visualice la siguiente imagen
    setInterval(function(){
        //posicionImg = posicionImg + 1;
        //posicionImg++;
        //Evaluamos si ya no hay mas imagenes
        if (posicionImg < listaImg ) {
            posicionImg++;
        }
        else {
            posicionImg = 1; 
        }
        $('#sliderImg img').hide();
        $('#sliderImg img:nth-child(' + posicionImg +')').show();
    }, 4000);

    /*Boton Toggle*/
    $('.btnToggle').click(function(){
        $('#miMenu').toggle(1500);
    })
})