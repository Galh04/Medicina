// script.js

console.log("📘 script.js cargado correctamente");

const materias = [
  { id: "1", nombre: "Bases Biológicas 1", requisitos: [], abre: ["6"] },
  { id: "2", nombre: "Historia", requisitos: [], abre: [] },
  { id: "3", nombre: "Articulación Básico Clínica 1", requisitos: [], abre: ["7"] },
  { id: "4", nombre: "Salud Ambiental", requisitos: [], abre: [] },
  { id: "5", nombre: "Fundamentos de la salud", requisitos: [], abre: [] },
  { id: "6", nombre: "Bases Biológicas 2", requisitos: ["1"], abre: ["11", "13"] },
  { id: "7", nombre: "Articulación Básico Clínica 2", requisitos: ["3"], abre: ["12", "13", "15", "16"] },
  { id: "8", nombre: "Sujetos, instituciones y sociedad", requisitos: [], abre: ["13", "15", "16"] },
  { id: "9", nombre: "Alteridad y salud", requisitos: [], abre: ["13", "15", "16"] },
  { id: "10", nombre: "Comunicación", requisitos: [], abre: ["13", "15"] },
  { id: "11", nombre: "Bases Biológicas 3", requisitos: ["6"], abre: ["17", "20"] },
  { id: "12", nombre: "Articulación Básico Clínica 3", requisitos: ["7"], abre: ["18", "19", "20", "21"] },
  { id: "13", nombre: "Salud Sexual", requisitos: ["6", "7", "8", "9", "10"], abre: ["14"] },
  { id: "14", nombre: "Salud Reproductiva", requisitos: ["13"], abre: ["22"] },
  { id: "15", nombre: "Producción y Análisis crítico", requisitos: ["7", "8", "9", "10"], abre: ["19", "21"] },
  { id: "16", nombre: "Discapacidad", requisitos: ["7", "8", "9"], abre: [] },
  { id: "17", nombre: "Bases Biológicas 4", requisitos: ["11"], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "18", nombre: "Articulación Básico Clínica 4", requisitos: ["12"], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "19", nombre: "Epidemiología", requisitos: ["12", "15"], abre: ["23", "24", "25", "26", "27", "28", "36"] },
  { id: "20", nombre: "Tamizaje y ciencias del diagnóstico", requisitos: ["11", "12"], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "21", nombre: "Redes y sistema de salud", requisitos: ["12", "15"], abre: [] },
  { id: "22", nombre: "Salud y sociedad", requisitos: ["14"], abre: [] },
  { id: "23", nombre: "Clínica 1", requisitos: ["17", "18", "19", "20"], abre: ["29"] },
  { id: "24", nombre: "Clínica 2", requisitos: ["17", "18", "19", "20"], abre: ["30"] },
  { id: "25", nombre: "Clínica 3", requisitos: ["17", "18", "19", "20"], abre: ["31"] },
  { id: "26", nombre: "Clínica 4", requisitos: ["17", "18", "19", "20"], abre: ["32"] },
  { id: "27", nombre: "Clínica 5", requisitos: ["17", "18", "19", "20"], abre: ["33"] },
  { id: "28", nombre: "Clínica 6", requisitos: ["17", "18", "19", "20"], abre: ["34"] },
  { id: "29", nombre: "Práctica 1", requisitos: ["23"], abre: [] },
  { id: "30", nombre: "Práctica 2", requisitos: ["24"], abre: [] },
  { id: "31", nombre: "Práctica 3", requisitos: ["25"], abre: [] },
  { id: "32", nombre: "Práctica 4", requisitos: ["26"], abre: [] },
  { id: "33", nombre: "Práctica 5", requisitos: ["27"], abre: [] },
  { id: "34", nombre: "Práctica 6", requisitos: ["28"], abre: [] },
  { id: "35", nombre: "Internado", requisitos: ["29", "30", "31", "32", "33", "34"], abre: [] },
  { id: "36", nombre: "Taller de investigación", requisitos: ["19"], abre: [] }
];

const niveles = {};
function calcularNivel(id, visitados = new Set()) {
  if (niveles[id]) return niveles[id];
  const materia = materias.find(m => m.id === id);
  if (!materia) return 0;
  if (materia.requisitos.length === 0) return (niveles[id] = 1);
  if (visitados.has(id)) return 0;
  visitados.add(id);
  const nivel = Math.max(...materia.requisitos.map(r => calcularNivel(r, visitados))) + 1;
  niveles[id] = nivel;
  return nivel;
}

materias.forEach(m => calcularNivel(m.id));
const grid = document.getElementById("grid");
const nivelesMax = Math.max(...Object.values(niveles));

for (let nivel = 1; nivel <= nivelesMax; nivel++) {
  const contenedor = document.createElement("div");
  contenedor.className = "nivel";
  const titulo = document.createElement("h2");
  titulo.textContent = `Año ${nivel}`;
  contenedor.appendChild(titulo);

  materias
    .filter(m => niveles[m.id] === nivel)
    .forEach(materia => {
      const boton = document.createElement("button");
      boton.textContent = materia.nombre;
      boton.className = "materia";
      boton.onclick = () => {
        boton.classList.toggle("aprobada");
      };
      contenedor.appendChild(boton);
    });

  grid.appendChild(contenedor);
}
