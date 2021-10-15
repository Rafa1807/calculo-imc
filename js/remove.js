var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    alvoEvento.parentNode.classList.add("fadeOut");

    setTimeout(function(){

        alvoEvento.parentNode.remove();

    },800);

   



})