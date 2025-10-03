console.log("hola");

const trabajos= [
  {
    Título: "Proyecto 1",
    categoría: "Diseño de producto",
    foto: "./img/Foto 1.1",
    descripción: "Propuesta de diseño para Atakamaoutdoor, nueva línea de pantuflas"
  },
   {
    Título: "Proyecto 2",
    categoría: "Diseño de producto",
    foto: "./img/Foto 2.1",
    descripción: "Proyecto para Atakamaoutdoor, Nueva línea de hidratación y regalos"
  },
  {
    Título: "Proyecto 4",
    categoría: "textil",
    foto: "./img/Foto 3.1",
    descripción: "Este trabajo lo realicé en un curso textil en taller 8, el cual buscaba utilizar el upcylclin"
  },
  {
    Título: "Proyecto 5",
    categoría: "textil",
    foto: "./img/Foto 4.1",
    descripción: "Este trabajo lo realicé en un curso textil en taller 8, el cual buscaba utilizar la intervención en prendas"
  },
  {
    Título: "Proyecto 6",
    categoría: "UX",
    foto: "./img/Foto 5.5.jpg",
    descripción: "Este trabajo se realizó para mido, un emprendimiento de domótica el cual busca automatizar tu hogar"
  },
];


const grid = document.querySelector(".gallery-grid");

trabajos.forEach((trabajo) => {
  grid.innerHTML += `
    <div class="gallery-item">
      <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
      <div class="gallery-overlay">
        <h3>${trabajo.titulo}</h3>
        <p>${trabajo.categoría}</p>
        <p class="descripcion">${trabajo.descripcion}</p>
      </div>
    </div>
`;
});
