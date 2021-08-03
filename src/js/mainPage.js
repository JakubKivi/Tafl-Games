var ele = document.getElementsByName('rd'); 

var hOptionsH = true;
$(".modal-body-options").hide();

$('#btn-info-zasady').hover(function(){
    $(this).addClass('active');
}, function(){
    $(this).removeClass('active');
})

$('#hOptions').on('click', function(e){

    if(!$('#btn-info-zasady').hasClass('active'))  {
        if(hOptionsH){
            hOptionsH=false;
            $(".modal-body-options").show();
        }else{
            hOptionsH=true;
            $(".modal-body-options").hide();
        }
    }
});

$('.opt').on('click', function(e){
    // console.log("pupka");
    // $('#rd_8').attr('checked', true);

    // gameName='Custom';
    // hOptionsH=false;
    // $(".modal-body-options").show();

    
    
    // document.getElementById("hint").innerHTML = "<b>Własne</b> - twoje własne Szachy Wikingów, sam znasz zasady";


});

$('input').on('click', function (e) {
    var ai = document.getElementsByName('ai'); 

    for (var i = 0, length = ai.length; i < length; i++) {
        if (ai[i].checked) {
            switch(i+1){
                case 1:
                    AI=0;
                break;
                case 2:
                    AI=1;
                break;
                case 3:
                    AI=2;
                break;
            }
        }
    }

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
                document.getElementById("hint").innerHTML = "Hnefatafl<br>Najpopularniejszy i najbardziej zbalansowany wariant szachów wikingów.";
			break;
			case 2:
				gameName='Tablut';
                document.getElementById("hint").innerHTML = "Tablut<br>Do ucieczki wystarczy krawędź planszy, ale wystarczy dwóch do złapania króla";
			break;
			case 3:
				gameName='Brandubh';
                document.getElementById("hint").innerHTML = "Brandubh<br>Mała plansza. każdy ruch może być kluczowy";
			break;
			case 4:
				gameName='Ard Ri';
                document.getElementById("hint").innerHTML = "Ard Ri<br>Każdy pionek rusza się maksymalnie o jedno pole";
			break;
			case 5:
				gameName='Tawlbwrdd';
                document.getElementById("hint").innerHTML = "Tawlbwrdd<br>Pamiętaj o słownym sygnalizowaniu ruchów";
			break;
			case 6:
				gameName='Alea Evangelii';
                document.getElementById("hint").innerHTML = "Alea Evangelii<br>Olbrzmyia plansza, 16 pól ucieczki";
			break;
			case 7:
				gameName='Custom';
                hOptionsH=false;
                $(".modal-body-options").show();

                
                
                document.getElementById("hint").innerHTML = "<b>Własne</b> - twoje własne Szachy Wikingów, sam znasz zasady";
			break;
		}

		break;
		}
	}

    if(gameName == "Hnefatafl"){
    	$('#Map-size').val('11x11 (Hnefatafl)');
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
    	$('#Map-size').val('9x9 (Tablut)');
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
    	$('#Map-size').val('7x7 (Brandubh)'); 
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
    	$('#Map-size').val('7x7 (Ard Ri)'); 
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
        $('#Map-size').val('11x11 (Tawlbwrdd)'); 
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
    }else if(gameName == "Alea Evangelii"){
        $('#Map-size').val('19x19 (Alea Evangelii)'); 
        $('#Escape').val('Narożnik (4 pola)'); 
        $('#Move-throught-throne').val('Włączone'); 
        $('#King-weapon').val('Zabójczy'); 
        $('#Throne-return').val('Wyłączone'); 
        $('#Throne-deadliness').val('Dla obu graczy');  //chyba ze krol siedzi
        $('#King-surroundings').val('2'); 
        $('#Throne-protecting').val('Wyłączone'); 
        $('#Throne-surroundings').val('2'); 
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
    navb.style.display = "none";
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

var navb = document.getElementById("navhide");
navb.style.display = "block";

btn.onclick = function() {
	window.location.hash = openModalHashStateId;
    console.log(mem);
	onModalOpen();
    navb.style.display = "none";
	modal.style.display = "block";

}

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"&&window.location.hash == openModalHashStateId){
        modal.style.display = "none";
        navb.style.display = "block";
        resumeBtn.style.display = "inline-block";
        window.location.hash = closedModalHashStateId;
    }
})



function handleBackPress(event) {
    console.log("dupa");
    event.preventDefault();
    event.stopPropagation();
    resumeBtn.style.display = "inline-block";
    $('.modal').modal('hide');
    $('.modal-backdrop').remove();
    navb.style.display = "block"; 
}

