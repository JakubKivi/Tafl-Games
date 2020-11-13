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
				gameName='Alea Evangelii';
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
    	$('#Escape').val('Narożnik');
    	$('#Move-throught-throne').val('Włączone');
    	$('#King-weapon').val('Zabójczy');
    	$('#Throne-return').val('Włączone');
    	$('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
    	$('#King-surroundings').val('4');
    	$('#Throne-protecting').val('Włączone');
    	$('#Throne-surroundings').val('4');
    	$('#Starting-Player').val('Atakujący');
    	$('#Shield-wall').val('Włączone');
    }else if(gameName == "Tablut"){
    	$('#Map-size').val('9');
    	$('#Escape').val('Krawędź');
    	$('#Move-throught-throne').val('Włączone');
    	$('#King-weapon').val('Zabójczy');
    	$('#Throne-return').val('Wyłączone');
    	$('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
    	$('#King-surroundings').val('2');
    	$('#Throne-protecting').val('Włączone');
    	$('#Throne-surroundings').val('4');
    	$('#Starting-Player').val('Atakujący');
    	$('#Shield-wall').val('Włączone');
    }else if(gameName == "Brandubh"){
    	$('#Map-size').val('7'); 
    	$('#Escape').val('Narożnik'); 
    	$('#Move-throught-throne').val('Włączone'); 
    	$('#King-weapon').val('Nieuzbrojony'); 
    	$('#Throne-return').val('Wyłączone'); 
    	$('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
    	$('#King-surroundings').val('2'); 
    	$('#Throne-protecting').val('Wyłączone'); 
    	$('#Throne-surroundings').val('4'); 
    	$('#Starting-Player').val('Atakujący');
    	$('#Shield-wall').val('Włączone');
    }else if(gameName == "Ard Ri"){
    	$('#Map-size').val('7'); 
    	$('#Escape').val('Narożnik'); 
    	$('#Move-throught-throne').val('Włączone'); 
    	$('#King-weapon').val('Nieuzbrojony'); 
    	$('#Throne-return').val('Wyłączone'); 
    	$('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
    	$('#King-surroundings').val('2'); 
    	$('#Throne-protecting').val('Wyłączone'); 
    	$('#Throne-surroundings').val('4'); 
    	$('#Starting-Player').val('Atakujący');
    	$('#Shield-wall').val('Włączone');
    }else if(gameName == "Tawlbwrdd"){
        $('#Map-size').val('11'); 
        $('#Escape').val('Narożnik'); 
        $('#Move-throught-throne').val('Włączone'); 
        $('#King-weapon').val('Zabójczy'); 
        $('#Throne-return').val('Wyłączone'); 
        $('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
        $('#King-surroundings').val('2'); 
        $('#Throne-protecting').val('Wyłączone'); 
        $('#Throne-surroundings').val('4'); 
        $('#Starting-Player').val('Atakujący');
        $('#Shield-wall').val('Włączone');
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



