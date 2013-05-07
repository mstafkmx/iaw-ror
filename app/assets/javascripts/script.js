$(document).ready(function(){
    $('#logo').addClass('animated fadeInLeftBig');
    $("#logoImage")
        .mouseover(function() {
            $(this).fadeOut("slow");
//            var src = $(this).attr("src").match(/[^\.]+/) + "Amazigh.png";
            var src = $(this).attr("src").replace(".png", "Amazigh.png");
            $(this).attr("src", src);
            $(this).fadeIn("slow");
        })
        .mouseout(function() {
            $(this).fadeOut("slow");
            var src = $(this).attr("src").replace("Amazigh.png", ".png");
            $(this).attr("src", src);
            $(this).fadeIn("slow");
        });

//    $(document).ready(function(){
    $("#homeBtnSendCorrect").hide();
    $("#homeBtnCancelCorrect").hide();
    //Radio and Select
    $('input:radio[name=radioSex]').click(function () {
        changeSex();
    });
    function changeSex(namSex){
        var namSex = $('input:radio[name=radioSex]:checked').val();
        $("#homeSelectNameSelect").html('<div class="loadingNames"><img src="images/loading1.gif" title="Cargando..." alt="Cargando..."></div>');
        $("#homeSelectNameSelect").load("<?php echo base_url() ?>index.php/home/names/"+namSex);
        changeMeaning();
    }
    // Select and div content

    $('#name').live('change', function() {
        $("option:selected", $(this)).each(function(){
            $("#homeMeaning").html('<div class="loadingMeaning"><img src="images/loading50.gif" alt="Loading..."></div>');
            changeMeaning();
        });
    });
    function changeMeaning(){
        var name = document.getElementById('name').value;
        $("#homeMeaning").load("index.php/home/meaningName/"+name+"/");
    }
//    Correct Name
    $('#homeBtnCorrect').click(function(){
        $("#homeTextMeaning").css('background-color', '#454545')
        $("#homeTextMeaning").css('color', '#000000')
        $("#name").attr("disabled", "disabled");
        $("#homeRadio").attr("disabled", "disabled");
        $("#homeTextMeaning").removeAttr('disabled').focus();
        $('#homeBtnSendCorrect').show();
        $('#homeBtnCancelCorrect').show();
        $("#homeBtnCorrect").hide();
    });
    $('#homeBtnSendCorrect').click(function(){
        enableFileds();
        var name = document.getElementById('name').value;
        var meaning = $('#homeTextMeaning').val();
        if(meaning != ''){
            console.log(name);
            console.log(meaning);
            $("#homeMeaning").html('<div class="loadingMeaning"><img src="images/loading50.gif" alt="Loading..."></div>');
            $('#messageCorrectName').load("index.php/home/correctName/",{
                name: name,
                meaning: meaning
            });
            changeMeaning();
            resetCssTextArea();
        }else{
            $("#homeError").html('<div class="error">field_meaning_is_requiered</div>');
        }
    });
    $('#homeBtnCancelCorrect').click(function(){
        enableFileds();
        resetCssTextArea();
    });
    function enableFileds(){
        $('#homeBtnCorrect').show();
        $("#homeBtnSendCorrect").hide();
        $("#homeBtnCancelCorrect").hide();
        $("#homeRadio").removeAttr('disabled');
        $("#name").removeAttr('disabled');
        $("#homeTextMeaning").attr("disabled", "disabled");
    }
    function resetCssTextArea(){
        $("#homeTextMeaning").css('background-color', '#ededed')
        $("#homeTextMeaning").css('color', '#777777')
    }
    // New Name
    $("#newNameBtnSend").click(function(){
        $("#newNameError").html("");
        var nameNewName = $('input:text[name=newNameName]').val();
        var sexNewName = $('input:radio[name=newNameRadioSex]:checked').val();
        var meaningNewName = $('#newNameTextMeaning').val();
        if(nameNewName != '' & sexNewName != '' & meaningNewName != ''){
            $("#newNameMeaning").html('<div class="loadingMeaning"><img src="images/loading50.gif" alt="Loading..."></div>');
            $('#homeFormNewName').load("index.php/home/newName/",{
                name: nameNewName,
                sex: sexNewName,
                meaning: meaningNewName
            });
        // disablePopup();
        }else{
            if (nameNewName == ""){
                $("#newNameError").html('<div class="error">Campo nombre es obligatorio.</div>');
            }
            if (meaningNewName == ""){
                $("#newNameError").append('<div class="error">Campo significado es obligatorio.</div>');
            }
        }
    });
})


