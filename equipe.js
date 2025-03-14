document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the container
  var container = document.getElementById("img-equipe-grid");

  // List of image file names
  const imageFileNames = [
    "Alexandre Macari Baptista.jpg",
    "Ana Carolina Nascimento Camanzano.jpg",
    "Claudia Maria Ramos Araujo dos Santos.jpg",
    "Eduardo Brandao Machado.jpg",
    "Enzo Peloso.jpg",
    "Enzo Ruza Martins.jpg",
    "Fabio Bruno Gusmao Silva.jpg",
    "Gabriel Matos Momesso Mercuri.jpg",
    "Guilherme Bagnoli.jpg",
    "Guilherme Gomes dos Santos.jpg",
    "Gustavo Ferreira Benassi.jpg",
    "Jose Roberto Ferraz Junior.jpg",
    "Karen Varro Beluomo Carneiro.jpg",
    "Kleber Da Silva Almeida.jpg",
    "Leandro Pereira dos Santos.jpg",
    "Leonardo de Paula Silva.jpg",
    "Raphael Graziano Vasques.jpg",
    "Talita Mathias Colombo.jpg",
    "Tuanny Santos Campos.jpg",
    "Daiane Rocha Maron Pagan.jpg",
    "Lucas Pinheiro Sanches.jpg",
    "Danielle Cezar Severo Muniz.jpg",
  ];

  const employeesWithoutImage = [
    "Daiane Rocha Maron Pagan",
    "Lucas Pinheiro Sanches",
    "Danielle Cezar Severo Muniz",
  ];

  // Loop through the image file names array
  imageFileNames.forEach(function (fileName) {
    // Create a div element for each image
    var div = document.createElement("div");
    div.classList.add("image-grid-item");

    var imgDiv = document.createElement("div");

    var description = document.createElement("p");
    description.classList.add("equipe-img-description");
    description.textContent = fileName.split(".")[0];

    div.appendChild(imgDiv);
    div.appendChild(description);

    var sFolderPath = `url('assets/fotos-funcionarios/${fileName}')`;
    if (employeesWithoutImage.includes(description.textContent)) {
      imgDiv.style.backgroundImage = `url('assets/fotos-funcionarios/generic.jpg')`;
      imgDiv.classList.add("image-container");
    } else {
      imgDiv.style.backgroundImage = sFolderPath;
      imgDiv.classList.add("image-container");
      imgDiv.classList.add("image-shadow");
    }

    // Append the div to the container
    container.appendChild(div);
  });
});
