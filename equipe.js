document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the container
  var container = document.getElementById("img-equipe-grid");

  // List of image file names
  const imageFileNames = [
    "Alexandre Macari Baptista.jpg",
    "Ana Carolina Nascimento Camanzano.jpg",
    "Andreza Manucci Crozariolo.jpg",
    "Caio Alessandro do Nascimento Manoel.jpg",
    "Cayan de Lima Fernandes.jpg",
    "Claudia Maria Ramos Araujo dos Santos.jpg",
    "Eduardo Brandao Machado.jpg",
    "Enzo Peloso.jpg",
    "Enzo Ruza Martins.jpg",
    "Everson Caetano de Oliveira Filho.jpg",
    "Fabio Bruno Gusmao Silva.jpg",
    "Gabriel Matos Momesso Mercuri.jpg",
    "Gabriel Motto.jpg",
    "Guilherme Bagnoli.jpg",
    "Guilherme Gomes dos Santos.jpg",
    "Gustavo Ferreira Benassi.jpg",
    "Jose Roberto Ferraz Junior.jpg",
    "Karen Varro Beluomo Carneiro.jpg",
    "Kleber Da Silva Almeida.jpg",
    "Leandro Pereira dos Santos.jpg",
    "Leonardo de Paula Silva.jpg",
    "Leonardo de Rosa.jpg",
    "Matheus Silva Duarte.jpg",
    "Rafael Garcia Silva.jpg",
    "Raphael Graziano Vasques.jpg",
    "Talita Mathias Colombo.jpg",
    "Tuanny Santos Campos.jpg"
  ];

  // Loop through the image file names array
  imageFileNames.forEach(function (fileName) {
    // Create a div element for each image
    var div = document.createElement("div");
    div.classList.add("image-grid-item");

    // Create an img element
    var img = document.createElement("img");
    img.src = "assets/fotos-funcionarios/" + fileName;
    img.alt = fileName.split(".")[0]; // Set alt attribute using file name without extension

    var description = document.createElement("p");
    description.classList.add("equipe-img-description");
    description.textContent = fileName.split(".")[0];

    // Append the img element to the div
    div.appendChild(img);
    div.appendChild(description);

    // Append the div to the container
    container.appendChild(div);
  });
});
