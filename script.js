
/* getElementById */
function $id(id) {
	return document.getElementById(id);
}

/* вывод сообщений */
function Output(msg) {
	var m = $id("messages");
	m.innerHTML = msg + m.innerHTML;
}

/* проверка поддержки API */
if (window.File && window.FileList && window.FileReader){
	Init();
}
/* инициализация */
function Init(){
	var fileselect   = $id("fileselect"),
		filedrag     = $id("filedrag"),
		submitbutton = $id("submitbutton");

	/* выбор файла */
	fileselect.addEventListener("change", FileSelectHandler, false);

	/* проверка поддержки XHR2 */
	var xhr = new XMLHttpRequest();
	if (xhr.upload){
		/* сброс файла */
		filedrag.addEventListener("dragover", FileDragHover, false);
		filedrag.addEventListener("dragleave", FileDragHover, false);
		filedrag.addEventListener("drop", FileSelectHandler, false);
		filedrag.style.display = "block";

		/* удаление кнопки сабмитта */
		submitbutton.style.display = "none";
	}
}

// Файл над нужной областью
function FileDragHover(e){
	e.stopPropagation();
	e.preventDefault();
	e.target.className = (e.type == "dragover" ? "hover" : "");
}

// выбор файла
function FileSelectHandler(e){
	FileDragHover(e);

	// проходимся по объекту FileList 
	var files = e.target.files || e.dataTransfer.files;
	
	document.querySelector('[id="fileselect"]').files = files;

	// парсим все объекты типа File
	//for (var i = 0, f; f = files[i]; i++){
   // ParseFile(files[0]);
	//}
}

function ParseFile(file) {
	document.querySelector('[name="fileselect[]"]').file = file;
}