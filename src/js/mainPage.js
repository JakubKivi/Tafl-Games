var ele = document.getElementsByName('rd'); 

$('input').on('click', function (e) {
	var ele = document.getElementsByName('rd'); 
              
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
        gameName = ele[i].value; 
    	}
    }

    for (var i = 0, length = ele.length; i < length; i++) {
		if (ele[i].checked) {
		switch(i+1){
			case 1:
				gameName='Hnefatafl';
			break;
			case 2:
				gameName='Tablut';
			break;
			case 3:
				gameName='Brandubh';
			break;
			case 4:
				gameName='Ard Ri';
			break;
			case 5:
				gameName='Tawlbwrdd';
			break;
			case 6:
				gameName='Alea Evangeli';
			break;
			case 7:
				gameName='Custom';
			break;
		}

		break;
		}
	}

    if(gameName == "Hnefatafl"){
    	$('#Map-size').val('11');
    	$('#Escape').val('Corner');
    	$('#Move-throught-throne').val('Enabled');
    	$('#King-weapon').val('Killing');
    	$('#Throne-return').val('Enabled');
    	$('#Throne-deadliness').val('Both');  //chyba ze krol siedzi
    	$('#King-surroundings').val('Four');
    	$('#Throne-protecting').val('Enabled');
    	$('#Throne-surroundings').val('Four');
    	$('#Starting-Player').val('Attackers');
    	$('#Shield-wall').val('Enabled');
    }else if(gameName == "Tablut"){
    	$('#Map-size').val('9');
    	$('#Escape').val('Edge');
    	$('#Move-throught-throne').val('Enabled');
    	$('#King-weapon').val('Killing');
    	$('#Throne-return').val('Disabled');
    	$('#Throne-deadliness').val('Both');  //chyba ze krol siedzi
    	$('#King-surroundings').val('Two');
    	$('#Throne-protecting').val('Enabled');
    	$('#Throne-surroundings').val('Four');
    	$('#Starting-Player').val('Attackers');
    	$('#Shield-wall').val('Enabled');
    }else if(gameName == "Brandubh"){
    	$('#Map-size').val('7'); 
    	$('#Escape').val('Corner'); 
    	$('#Move-throught-throne').val('Enabled'); 
    	$('#King-weapon').val('Unarmed'); 
    	$('#Throne-return').val('Disabled'); 
    	$('#Throne-deadliness').val('Both');  //chyba ze krol siedzi
    	$('#King-surroundings').val('Two'); 
    	$('#Throne-protecting').val('Disabled'); 
    	$('#Throne-surroundings').val('Four'); 
    	$('#Starting-Player').val('Attackers');
    	$('#Shield-wall').val('Enabled');
    }else if(gameName == "Ard Ri"){
    	$('#Map-size').val('7'); 
    	$('#Escape').val('Corner'); 
    	$('#Move-throught-throne').val('Enabled'); 
    	$('#King-weapon').val('Unarmed'); 
    	$('#Throne-return').val('Disabled'); 
    	$('#Throne-deadliness').val('Both');  //chyba ze krol siedzi
    	$('#King-surroundings').val('Two'); 
    	$('#Throne-protecting').val('Disabled'); 
    	$('#Throne-surroundings').val('Four'); 
    	$('#Starting-Player').val('Attackers');
    	$('#Shield-wall').val('Enabled');
    }
});


$('#exampleModalLong').on('shown.bs.modal', function () {

  $("#exampleModalLong").focus();
})

var closedModalHashStateId = "#menu";
var openModalHashStateId = "#game";

window.location.hash = closedModalHashStateId;

var modal = document.getElementById("myModal");
modal.style.display = "none";

var resumeBtn = document.getElementById("resButton");
var btn = document.getElementById("playButton");

resumeBtn.onclick =function(){
	window.location.hash = openModalHashStateId;
	modal.style.display = "block";

}

function handleBackPress(event) {
    event.preventDefault();
    event.stopPropagation();
	resumeBtn.style.display = "inline-block";
    $('.modal').modal('hide');
    $('.modal-backdrop').remove();
    
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});


btn.onclick = function() {
	window.location.hash = openModalHashStateId;
	onModalOpen();
	modal.style.display = "block";
}

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"&&window.location.hash == openModalHashStateId){
        modal.style.display = "none";
        resumeBtn.style.display = "inline-block";
        window.location.hash = closedModalHashStateId;
    }
})



