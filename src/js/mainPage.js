
$('#exampleModalLong').on('shown.bs.modal', function () {

  $("#exampleModalLong").focus();
})

var closedModalHashStateId = "#menu";
var openModalHashStateId = "#game";

window.location.hash = closedModalHashStateId;

var radios = document.getElementsByName('gameName');

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

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"&&window.location.hash == openModalHashStateId){
        modal.style.display = "none";
        resumeBtn.style.display = "inline-block";
        window.location.hash = closedModalHashStateId;
    }
})



