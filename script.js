const materias = [
  { id: "1", nombre: "Bases Biológicas 1", horas: 6, abre: ["6"], anio: 1, cuatrimestre: 1 },
  { id: "2", nombre: "Historia", horas: 3, abre: [], anio: 1, cuatrimestre: 1 },
  { id: "3", nombre: "Articulación Básico Clínica 1", horas: 10, abre: ["7"], anio: 1, cuatrimestre: 1 },
  { id: "4", nombre: "Salud Ambiental", horas: 4, abre: [], anio: 1, cuatrimestre: 1 },
  { id: "5", nombre: "Fundamentos de la salud", horas: 4, abre: [], anio: 1, cuatrimestre: 1 },
  { id: "6", nombre: "Bases Biológicas 2", horas: 6, abre: ["11", "13"], anio: 1, cuatrimestre: 2 },
  { id: "7", nombre: "Articulación Básico Clínica 2", horas: 10, abre: ["12", "13", "15", "16"], anio: 1, cuatrimestre: 2 },
  { id: "8", nombre: "Sujetos, instituciones y sociedad", horas: 4, abre: ["13", "15", "16"], anio: 1, cuatrimestre: 2 },
  { id: "9", nombre: "Alteridad y salud", horas: 4, abre: ["13", "15", "16"], anio: 1, cuatrimestre: 2 },
  { id: "10", nombre: "Comunicación", horas: 4, abre: ["13", "15"], anio: 1, cuatrimestre: 2 },
  { id: "11", nombre: "Bases Biológicas 3", horas: 6, abre: ["17", "20"], anio: 2, cuatrimestre: 1 },
  { id: "12", nombre: "Articulación Básico Clínica 3", horas: 10, abre: ["18", "19", "20", "21"], anio: 2, cuatrimestre: 1 },
  { id: "13", nombre: "Salud Sexual", horas: 4, abre: ["14"], anio: 2, cuatrimestre: 1 },
  { id: "14", nombre: "Salud Reproductiva", horas: 4, abre: ["22"], anio: 2, cuatrimestre: 1 },
  { id: "15", nombre: "Producción y Análisis crítico", horas: 4, abre: ["19", "21"], anio: 2, cuatrimestre: 1 },
  { id: "16", nombre: "Discapacidad", horas: 4, abre: [], anio: 2, cuatrimestre: 1 },
  { id: "17", nombre: "Bases Biológicas 4", horas: 4, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 1 },
  { id: "18", nombre: "Articulación Básico Clínica 4", horas: 10, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 1 },
  { id: "19", nombre: "Epidemiología", horas: 4, abre: ["23", "24", "25", "26", "27", "28", "36"], anio: 3, cuatrimestre: 1 },
  { id: "20", nombre: "Tamizaje y ciencias del diagnóstico", horas: 4, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 1 },
  { id: "21", nombre: "Redes y sistema de salud", horas: 4, abre: ["23", "24", "25", "26", "27", "28", "37"], anio: 3, cuatrimestre: 1 },
  { id: "22", nombre: "Salud integral de la mujer", horas: 6, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 1 },
  { id: "23", nombre: "Medicina interna y campos clínicos 1", horas: 8, abre: ["29", "30", "31", "32", "33", "34", "35", "39"], anio: 4, cuatrimestre: 1 },
  { id: "24", nombre: "Salud colectiva y comunitaria", horas: 4, abre: ["31"], anio: 4, cuatrimestre: 1 },
  { id: "25", nombre: "Terapéuticas y farmacología", horas: 4, abre: ["32"], anio: 4, cuatrimestre: 1 },
  { id: "26", nombre: "Salud del trabajador, recreación y tiempo libre", horas: 4, abre: [], anio: 4, cuatrimestre: 1 },
  { id: "27", nombre: "Salud del niño, niña y adolescente", horas: 6, abre: [], anio: 4, cuatrimestre: 1 },
  { id: "28", nombre: "Salud mental", horas: 5, abre: ["33", "35"], anio: 4, cuatrimestre: 1 },
  { id: "29", nombre: "Medicina interna y campos clínicos 2", horas: 8, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "30", nombre: "Medicina general", horas: 6, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "31", nombre: "Programas de salud", horas: 4, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "32", nombre: "Salud de las personas mayores", horas: 4, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "33", nombre: "Clínica quirúrgica y emergentología", horas: 15, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "34", nombre: "Bioética y derechos humanos", horas: 3, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "35", nombre: "Medicina legal y toxicología", horas: 3, abre: ["43", "44", "45", "46", "47", "48", "49"], anio: 5, cuatrimestre: 1 },
  { id: "36", nombre: "Salud internacional", horas: 3, abre: [], anio: 4, cuatrimestre: 2 },
  { id: "37", nombre: "Economía política de la salud", horas: 3, abre: [], anio: 4, cuatrimestre: 2 },
  { id: "38", nombre: "Cuidados paliativos y manejo del dolor", horas: 3, abre: [], anio: 4, cuatrimestre: 2 },
  { id: "39", nombre: "Gestión y acción en Emergencias y desastres", horas: 3, abre: [], anio: 4, cuatrimestre: 2 },
  { id: "40", nombre: "Taller de informática aplicada a la salud", horas: 4, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 2 },
  { id: "41", nombre: "Taller de inglés técnico 1", horas: 4, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 2 },
  { id: "42", nombre: "Taller de inglés técnico 2", horas: 4, abre: ["23", "24", "25", "26", "27", "28"], anio: 3, cuatrimestre: 2 },
  { id: "43", nombre: "Clínica médica", horas: 30, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "44", nombre: "Clínica quirúrgica", horas: 25, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "45", nombre: "Primer nivel de atención", horas: 30, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "46", nombre: "Clínica tocoginecológica", horas: 25, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "47", nombre: "Salud mental", horas: 30, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "48", nombre: "Clínica pediátrica", horas: 30, abre: [], anio: 6, cuatrimestre: 1 },
  { id: "49", nombre: "Emergencias", horas: 24, abre: [], anio: 6, cuatrimestre: 1 }
];

// Resto del código sin cambios...

const estadoMaterias = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");

  const agrupadas = {};
  materias.forEach(m => {
    if (!agrupadas[m.anio]) agrupadas[m.anio] = {};
    if (!agrupadas[m.anio][m.cuatrimestre]) agrupadas[m.anio][m.cuatrimestre] = [];
    agrupadas[m.anio][m.cuatrimestre].push(m);
    estadoMaterias[m.id] = false;
  });

  for (const anio in agrupadas) {
    const divAnio = document.createElement("div");
    divAnio.classList.add("year");
    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = `Año ${anio}`;
    divAnio.appendChild(tituloAnio);

    for (const cuatri in agrupadas[anio]) {
      const divCuatri = document.createElement("div");
      divCuatri.classList.add("cuatrimestre");
      const tituloCuatri = document.createElement("h3");
      tituloCuatri.textContent = `${cuatri}º cuatrimestre`;
      divCuatri.appendChild(tituloCuatri);

      agrupadas[anio][cuatri].forEach(m => {
        const divMateria = document.createElement("div");
        divMateria.classList.add("materia", "bloqueada");
        divMateria.id = `materia-${m.id}`;
        divMateria.textContent = `${m.nombre} [${m.horas}hs]`;
        divMateria.addEventListener("click", () => toggleMateria(m.id));
        divCuatri.appendChild(divMateria);
      });

      divAnio.appendChild(divCuatri);
    }

    contenedor.appendChild(divAnio);
  }

  desbloquearIniciales();
}

function desbloquearIniciales() {
  materias.forEach(m => {
    const tieneRequisitos = materias.some(mat => mat.abre.includes(m.id));
    if (!tieneRequisitos) {
      desbloquearMateria(m.id);
    }
  });
}

function desbloquearMateria(id) {
  const div = document.getElementById(`materia-${id}`);
  if (div) div.classList.remove("bloqueada");
}

function toggleMateria(id) {
  const div = document.getElementById(`materia-${id}`);
  if (div.classList.contains("bloqueada")) return;

  estadoMaterias[id] = !estadoMaterias[id];
  div.classList.toggle("activa", estadoMaterias[id]);

  actualizarDesbloqueos();
}

function actualizarDesbloqueos() {
  materias.forEach(m => {
    const requisitos = materias.filter(mat => mat.abre.includes(m.id));
    const desbloqueada = requisitos.every(req => estadoMaterias[req.id]);
    const div = document.getElementById(`materia-${m.id}`);
    if (div && !estadoMaterias[m.id]) {
      if (desbloqueada) div.classList.remove("bloqueada");
      else div.classList.add("bloqueada");
    }
  });
}

crearMalla();
