$(document).ready(function(){


    $('#fname').on('focusout', function(){

        if($('#fname').val() != ""){

           if(validateName($('#fname').val())){

            $('.error').fadeOut('slow');

                }else{
                    $('.error').text('Neplatné jméno!');
                    $('.error').fadeIn('slow');
                }

        }else{
            $('.error').text('Povinný údaj!');
            $('.error').fadeIn("slow");
        };
    });

    $('#fsurename').on('focusout', function(){

        if($('#fsurename').val() != ""){

            if(validateSureN($('#fsurename').val())){
        
             $('.error2').fadeOut('slow');
        
                }else{
                    $('.error2').text('Neplatné přijmení!');
                    $('.error2').fadeIn('slow');
                }
        
         }else{
             $('.error2').text('Povinný údaj!');
             $('.error2').fadeIn("slow");
         };
    });

    $('#fage').on('focusout', function(){

        if($('#fage').val() != ""){

            if(validateAge($('#fage').val())){
        
             $('.error1').fadeOut('slow');
        
                }else{
                $('.error1').text('Neplatný věk!');
                $('.error1').fadeIn('slow');
                }
        
         }else{
             $('.error1').text('Povinný údaj!');
             $('.error1').fadeIn("slow");
         };
    });

    $('#ftel').on('focusout', function(){

        if($('#ftel').val() != ""){

            if(validateTelephone($('#ftel').val())){
        
             $('.error3').fadeOut('slow');
        
                }else{
                $('.error3').text('Neplatné telefoní číslo!');
                $('.error3').fadeIn('slow');
                }
        
         }else{
             $('.error3').text('Povinný údaj!');
             $('.error3').fadeIn("slow");
         };
    });

});

/*$(`#save_btn`).click(function() {

    if (document.getElementById("jmeno").value == "" || document.getElementById("prijmeni").value == "" || document.getElementById("vek").value == "" || document.getElementById("telefon").value == "") {
        $(`#confirmMsg`).fadeIn(1000).fadeOut(5000);

    } else {
        $(`.confirmA`).hide(`slow`);
    }


});*/


function validateName(nVal){
    nVal = document.getElementById("fname").value;
    var val = /^([a-zA-ZěšŠčČřŘžŽýáíéůúťŤ]{3,10})+$/;
    
    if( val.test(nVal)){
        return true;
    }else{
        return false;
    }
}

function validateSureN(sVal){
    sVal = document.getElementById("fsurename").value;
    var val = /^([a-zA-ZěšŠčČřŘžŽýáíéůúŤť]{3,10})+$/;
    
    if( val.test(sVal)){
        return true;
    }else{
        return false;
    }
}

function validateAge(aVal){
    aVal = document.getElementById("fage").value;
    

    if(aVal >= 18 && aVal <= 100){
        return true;
    }else{
        return false;
    }
}

function validateTelephone(tVal){
    tVal = document.getElementById("ftel").value;
    var val = /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;
    
    if( val.test(tVal)){
        return true;
    }else{
        return false;
    }
}



 

