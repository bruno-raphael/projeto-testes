const myDiv = document.querySelector(".container");

// Função para verificar o mouse dentro ou fora do contêiner
function insideOutside(event) {
    if (event.type === "mouseenter") {
        myDiv.textContent = "CLIQUE PARA DESCOBRIR.";
        myDiv.classList.add("inside");
        myDiv.classList.remove("outside", "clicked");
    } else if (event.type === "mouseleave") {
        myDiv.textContent = "COLOQUE O MOUSE AQUI.";
        myDiv.classList.add("outside");
        myDiv.classList.remove("inside", "clicked");
    }
}

// Função para o clique no contêiner
function mundial() {
    myDiv.textContent = "O PALMEIRAS NÃO TEM MUNDIAL!!!";
    myDiv.classList.add("clicked");
    myDiv.classList.remove("inside", "outside");
}

// Adiciona os eventos de mouseenter, mouseleave e click
myDiv.addEventListener("mouseenter", insideOutside);
myDiv.addEventListener("mouseleave", insideOutside);
myDiv.addEventListener("click", mundial);

// Define o estado inicial ao carregar a página
window.onload = () => {
    myDiv.textContent = "COLOQUE O MOUSE AQUI."; // Mensagem inicial
    myDiv.classList.add("outside"); // Cor inicial
};
