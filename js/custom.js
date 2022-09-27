$(document).ready(function(){


var totale = 0;

$(".domanda-1 input").on("click",function(){
    var selezione = $(".domanda-1 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-1 input[type='radio']").attr('disabled','disabled');
    totale = totale + parseInt(selezione);

    console.log(totale);

    $(".domanda-2").show();

});

$(".domanda-2 input").on("click",function(){
    var selezione = $(".domanda-2 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-2 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-3").show();

});

$(".domanda-3 input").on("click",function(){
    var selezione = $(".domanda-3 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-3 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-4").show();

});

$(".domanda-4 input").on("click",function(){
    var selezione = $(".domanda-4 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-4 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-5").show();

});
$(".domanda-5 input").on("click",function(){
    var selezione = $(".domanda-5 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-5 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-6").show();

});
$(".domanda-6 input").on("click",function(){
    var selezione = $(".domanda-6 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-6 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-7").show();

});
$(".domanda-7 input").on("click",function(){
    var selezione = $(".domanda-7 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-7 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-8").show();

});

$(".domanda-8 input").on("click",function(){
    var selezione = $(".domanda-8 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-8 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-9").show();

});

 $(".domanda-9 input").on("click",function(){
    var selezione = $(".domanda-9 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-9 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);

    $(".domanda-10").show();

});

$(".domanda-10 input").on("click",function(){
    var selezione = $(".domanda-10 input[type='radio']:checked").val();

    //Andiamo a disabilitare la possibilità di cliccare nuovamente
    $(".domanda-10 input[type='radio']").attr('disabled','disabled');

    totale = totale + parseInt(selezione);
    console.log(totale);
risultatoSupereroe(totale);
});

function risultatoSupereroe(punteggio){
    if(punteggio>=75 && punteggio<=89){
        alert('sei falcon');
    }
    
    if(punteggio>=90 && punteggio<=99){
        alert('sei spiderman');
    }
        if(punteggio>=100 && punteggio<=109){
            alert('sei thor');
        }
        
        if(punteggio>=110 && punteggio <=119){
            alert('sei black panther');
        }
        if(punteggio>=120 && punteggio <=134){
            alert('sei hulk');
        }

        if(punteggio>=135 && punteggio <=144){
            alert('sei capitan america');
        }
        if(punteggio>=145){
            alert('sei iron man');
        }



}












$(".bottone-click").click (function(){
click=click + 1 
supereroe(click);


})






















});


