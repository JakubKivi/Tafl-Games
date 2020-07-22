function handleBackPress(event) {
    event.preventDefault();
    event.stopPropagation();

    $('.modal').modal('hide');
    $('.modal-backdrop').remove();
}

var closedModalHashStateId = "#menu";
var openModalHashStateId = "#game";

/* Updating the hash state creates a new entry
 * in the web browser's history. The latest entry in the web browser's
 * history is "modal.html#modalClosed". */
window.location.hash = closedModalHashStateId;

var radios = document.getElementsByName('gameName');

$(function() {

    $('input[type="radio"]').bind('change', function (v) {

        for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				switch(i+1){
					case 1:
						//gameName='Modern Hnefatafl';
					break;
					case 2:
						//gameName='Classic Hnefatafl';
					break;
					case 3:
						//gameName='Tablut';
					break;
					case 4:
						//gameName='Brandubh';
					break;
					case 5:
						//gameName='Ard Ri';
					break;
					case 6:
						//gameName='Tawlbwrdd';
					break;
					case 7:
						//ameName='Alea Evangeli';
					break;
					case 8:
						//gameName='Custom';
					break;
				}

				break;
				}
			}
    });

});

var modal = document.getElementById("myModal");
modal.style.display = "none";

var resumeBtn = document.getElementById("resButton");
var btn = document.getElementById("playButton");

resumeBtn.onclick =function(){
	window.location.hash = openModalHashStateId;
	modal.style.display = "block";
}

btn.onclick = function() {
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
		switch(i+1){
			case 1:
				gameName='Modern Hnefatafl';
			break;
			case 2:
				gameName='Classic Hnefatafl';
			break;
			case 3:
				gameName='Tablut';
			break;
			case 4:
				gameName='Brandubh';
			break;
			case 5:
				gameName='Ard Ri';
			break;
			case 6:
				gameName='Tawlbwrdd';
			break;
			case 7:
				gameName='Alea Evangeli';
			break;
			case 8:
				gameName='Custom';
			break;
		}

		break;
		}
	}
	window.location.hash = openModalHashStateId;
	onModalOpen();
	modal.style.display = "block";
}

$(document).keyup(function(e) {
     if (e.key === "Escape" && modal.style.display!="none") {
        modal.style.display = "none";
        resButton.style.display = "block";
    }
});



