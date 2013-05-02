/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var newNamePopupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(newNamePopupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupNewName").fadeIn("slow");
		newNamePopupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(newNamePopupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupNewName").fadeOut("slow");
		newNamePopupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupNewName").height();
	var popupWidth = $("#popupNewName").width();
	//centering
	$("#popupNewName").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
        // Popup New Name
	//Click the button event!
	$("#homeBtnNewName").click(function(){
        //$('#popupNewName').html('');
		centerPopup();//centering with css
		loadPopup();//load popup
	});

	//CLOSING POPUP
	$("#popupNewNameClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && newNamePopupStatus==1){
			disablePopup();
		}
	});


});

