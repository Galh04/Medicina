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
  { id: "21", nombre: "Redes y sistema de salud", requisitos: ["12", "15"], abre: ["23", "24", "25", "26", "27", "28", "37"] },
  { id: "22", nombre: "Salud integral de la mujer", requisitos: ["14"], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "23", nombre: "Medicina interna y campos clínicos 1", requisitos: ["17", "18", "19", "20", "21", "22"], abre: ["29", "30", "31", "32", "33", "34", "39"] },
  { id: "24", nombre: "Salud colectiva y comunitaria", requisitos: ["17", "18", "19", "20", "21", "22"], abre: ["31"] },
  { id: "25", nombre: "Terapéuticas y farmacología", requisitos: ["17", "18", "19", "20", "21", "22"], abre: ["32"] },
  { id: "26", nombre: "Salud del trabajador, recreación y tiempo libre", requisitos: ["17", "18", "19", "20", "21", "22"], abre: [] },
  { id: "27", nombre: "Salud del niño, niña y adolescente", requisitos: ["17", "18", "19", "20", "21", "22"], abre: [] },
  { id: "28", nombre: "Salud mental", requisitos: ["17", "18", "19", "20", "21", "22"], abre: ["33", "35"] },
  { id: "29", nombre: "Medicina interna y campos clínicos 2", requisitos: ["23"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "30", nombre: "Medicina general", requisitos: ["23"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "31", nombre: "Programas de salud", requisitos: ["24"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "32", nombre: "Salud de las personas mayores", requisitos: ["25"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "33", nombre: "Clínica quirúrgica y emergentología", requisitos: ["23", "28"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "34", nombre: "Bioética y derechos humanos", requisitos: ["23"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "35", nombre: "Medicina legal y toxicología", requisitos: ["28"], abre: ["43", "44", "45", "46", "47", "48", "49"] },
  { id: "36", nombre: "Salud internacional", requisitos: ["19"], abre: [] },
  { id: "37", nombre: "Economía política de la salud", requisitos: ["21"], abre: [] },
  { id: "38", nombre: "Cuidados paliativos y manejo del dolor", requisitos: ["23"], abre: [] },
  { id: "39", nombre: "Gestión y acción en Emergencias y desastres", requisitos: ["23"], abre: [] },
  { id: "40", nombre: "Taller de informática aplicada a la salud", requisitos: [], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "41", nombre: "Taller de inglés técnico 1", requisitos: [], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "42", nombre: "Taller de inglés técnico 2", requisitos: [], abre: ["23", "24", "25", "26", "27", "28"] },
  { id: "43", nombre: "Clínica médica", requisitos: [], abre: [] },
  { id: "44", nombre: "Clínica quirúrgica", requisitos: [], abre: [] },
  { id: "45", nombre: "Primer nivel de atención", requisitos: [], abre: [] },
  { id: "46", nombre: "Clínica tocoginecológica", requisitos: [], abre: [] },
  { id: "47", nombre: "Salud mental", requisitos: [], abre: [] },
  { id: "48", nombre: "Clínica pediátrica", requisitos: [], abre: [] },
  { id: "49", nombre: "Emergencias", requisitos: [], abre: [] }
];

const grid = document.getElementById("grid");
const materiasMap = new Map();

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia bloqueada";
  div.innerHTML = `<h3>${m.nombre}</h3><p>ID: ${m.id}</p>`;
  div.dataset.id = m.id;
  div.addEventListener("click", () => toggleMateria(m.id));
  grid.appendChild(div);
  materiasMap.set(m.id, { ...m, element: div, aprobada: false });
});

function toggleMateria(id) {
  const materia = materiasMap.get(id);
  if (materia.aprobada || !isDesbloqueada(materia)) return;
  materia.aprobada = true;
  materia.element.classList.remove("bloqueada");
  materia.element.classList.add("aprobada");
  materia.abre.forEach(habilitadaID => {
    const siguiente = materiasMap.get(habilitadaID);
    if (siguiente && isDesbloqueada(siguiente)) {
      siguiente.element.classList.remove("bloqueada");
    }
  });
}

function isDesbloqueada(materia) {
  return materia.requisitos.every(req => materiasMap.get(req)?.aprobada);
}

materias.forEach(m => {
  if (m.requisitos.length === 0) {
    const el = materiasMap.get(m.id);
    el.element.classList.remove("bloqueada");
  }
});
// script.js

console.log("📘 script.js cargado correctamente");

const materias = [
  // (la lista de materias sigue igual, sin cambios)
];

const grid = document.getElementById("grid");
const materiasMap = new Map();

// Crear contenedores por año
const anios = ["Primer año", "Segundo año", "Tercer año", "Cuarto año", "Quinto año", "Sexto año", "Optativas"];
const secciones = {};

anios.forEach(anio => {
  const seccion = document.createElement("div");
  seccion.className = "anio";
  const titulo = document.createElement("h2");
  titulo.textContent = anio;
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-grid";
  seccion.appendChild(titulo);
  seccion.appendChild(contenedor);
  grid.appendChild(seccion);
  secciones[anio] = contenedor;
});

// Función auxiliar para obtener año según ID
function obtenerAnio(id) {
  if (id >= 1 && id <= 10) return "Primer año";
  if (id >= 11 && id <= 16) return "Segundo año";
  if (id >= 17 && id <= 22) return "Tercer año";
  if (id >= 23 && id <= 28) return "Cuarto año";
  if (id >= 29 && id <= 35) return "Quinto año";
  if (id >= 36 && id <= 42) return "Optativas";
  return "Sexto año";
}

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia bloqueada";
  div.innerHTML = `<h3>${m.nombre}</h3><p>ID: ${m.id}</p>`;
  div.dataset.id = m.id;
  div.addEventListener("click", () => toggleMateria(m.id));

  const anio = obtenerAnio(m.id);
  secciones[anio].appendChild(div);

  materiasMap.set(m.id, { ...m, element: div, aprobada: false });
});

function toggleMateria(id) {
  const materia = materiasMap.get(id);

  if (materia.aprobada) {
    materia.aprobada = false;
    materia.element.classList.remove("aprobada");
    materia.element.classList.add("bloqueada");
    bloquearDependientes();
  } else {
    if (!isDesbloqueada(materia)) return;
    materia.aprobada = true;
    materia.element.classList.remove("bloqueada");
    materia.element.classList.add("aprobada");
    desbloquearDependientes();
  }
}

function isDesbloqueada(materia) {
  return materia.requisitos.every(req => materiasMap.get(req)?.aprobada);
}

function desbloquearDependientes() {
  materias.forEach(m => {
    if (!materiasMap.get(m.id).aprobada && isDesbloqueada(m)) {
      materiasMap.get(m.id).element.classList.remove("bloqueada");
    }
  });
}

function bloquearDependientes() {
  materias.forEach(m => {
    if (!isDesbloqueada(m)) {
      const el = materiasMap.get(m.id);
      el.aprobada = false;
      el.element.classList.remove("aprobada");
      el.element.classList.add("bloqueada");
    }
  });
}

materias.forEach(m => {
  if (m.requisitos.length === 0) {
    const el = materiasMap.get(m.id);
    el.element.classList.remove("bloqueada");
  }
});
