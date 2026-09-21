
/* =========================================================
   🌻 CONFIGURACIÓN PERSONALIZABLE
   =========================================================
   
   AQUÍ puedes modificar fácilmente:
   - Textos
   - Cantidad de girasoles
   - Velocidad de aparición
   - Pétalos finales
   
   ========================================================= */

const CONFIG = {

    // ─────────────── TEXTOS ───────────────

    titulo: " " +
    "🌻Para mi Bestie🌻"+
    " ",

    subtitulo:
        "Te aprecio mucho así como a la amistad que tenemos " +
        "y aunque a veces te haga emputar o te joda mucho sabes que te quiero y siempre " +
        "puedes contar conmigo Aliiii, te mando un abrazo enorme.",

    mensajeFinal:
        "Te hubiese regalado las de verdad, pero como sé que si " +
        "hago eso ni tu puerta me vas a abrir o no las vas a querer " +
        "recibir pjj entonces aunque así 💛, hubiese puesto fotos de los dos pero como ni tenemos pipipi",

    firma:
        "Con cariño, Juan",


    // ─────────────── GIRASOLES ───────────────

    // Cantidad total de girasoles
    cantidadGirasoles: 50,

    // Tiempo entre la aparición de cada girasol
    // 1000 = 1 segundo
    intervaloFlores: 200,


    // ─────────────── EFECTOS ───────────────

    // true  = aparecen pétalos al final
    // false = no aparecen pétalos al final
    petalosFinales: true

};


/* =========================================================
   🌻 ELEMENTOS DEL HTML
   ========================================================= */

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");
const signature = document.getElementById("signature");

const startButton = document.getElementById("startButton");

const backgroundMusic = document.getElementById("backgroundMusic");

const intro = document.getElementById("intro");
const garden = document.getElementById("garden");

const flowersContainer =
    document.getElementById("flowers");

const petalsContainer =
    document.getElementById("petals");

const finalMessage =
    document.getElementById("finalMessage");

const tapAgain =
    document.getElementById("tapAgain");

const stars =
    document.getElementById("stars");


/* =========================================================
   ✏️ COLOCAR LOS TEXTOS DE CONFIG EN EL HTML
   ========================================================= */

title.textContent = CONFIG.titulo;

subtitle.textContent = CONFIG.subtitulo;

finalText.textContent = CONFIG.mensajeFinal;

signature.textContent = CONFIG.firma;


/* =========================================================
   ⭐ CREAR ESTRELLAS DEL FONDO
   ========================================================= */

const CANTIDAD_ESTRELLAS = 100;

for (let i = 0; i < CANTIDAD_ESTRELLAS; i++) {

    const star = document.createElement("span");

    // Clase que utilizará el CSS
    star.className = "star";

    // Posición horizontal aleatoria
    star.style.left =
        `${Math.random() * 100}%`;

    // Posición vertical aleatoria
    star.style.top =
        `${Math.random() * 65}%`;

    // Retraso aleatorio de la animación
    star.style.animationDelay =
        `${Math.random() * 3}s`;

    // Agregar estrella al fondo
    stars.appendChild(star);
}


/* =========================================================
   🌻 POSICIONES DE LOS GIRASOLES
   =========================================================
   
   Cada posición tiene:

   [IZQUIERDA, ARRIBA]

   Ejemplo:

   [50, 50]

   significa:
   50% desde la izquierda
   50% desde arriba

   Puedes modificar estas posiciones para cambiar
   la distribución de los girasoles.
   ========================================================= */

const flowerPositions = [

    [3, 86],
    [8, 81],
    [13, 88],
    [18, 82],
    [23, 77],
    [28, 85],
    [33, 80],
    [38, 89],
    [43, 83],
    [48, 78],
    [53, 87],
    [58, 81],
    [63, 90],
    [68, 84],
    [73, 79],
    [78, 88],
    [83, 82],
    [88, 77],
    [93, 86],
    [97, 80],

    // ─────────────── FILA 2 ───────────────

    [5, 90],
    [10, 84],
    [15, 78],
    [20, 87],
    [25, 81],
    [30, 89],
    [35, 83],
    [40, 85],
    [45, 86],
    [50, 80],
    [55, 88],
    [60, 82],
    [65, 88],
    [70, 85],
    [75, 90],
    [80, 83],
    [85, 87],
    [90, 81],
    [95, 89],
    [99, 84],

    // ─────────────── FLORES EXTRA ───────────────

    [12, 85],
    [27, 88],
    [42, 81],
    [57, 90],
    [72, 83],
    [87, 89],
    [8, 77],
    [36, 87],
    [64, 80],
    [92, 78]

];


/* =========================================================
   🌻 CREAR UN GIRASOL
   ========================================================= */

function createSunflower(index) {

    // ─────────────── CONTENEDOR ───────────────

    const flower = document.createElement("div");

    flower.className = "sunflower";


    // ─────────────── POSICIÓN ───────────────

    // Elegir una posición de la lista
    const basePosition =
    flowerPositions[
        index % flowerPositions.length
    ];

const position = [
    basePosition[0] + (Math.random() * 6 - 3),
    basePosition[1] + (Math.random() * 6 - 3)
    ];

    flower.style.left =
        `${position[0]}%`;

    flower.style.top =
        `${position[1]}%`;


    // ─────────────── TAMAÑO ───────────────

    const tamañoMinimo = 22;
    const tamañoExtra = Math.random() * 32;

    flower.style.setProperty(
        "--size",
        `${tamañoMinimo + tamañoExtra}px`
    );


    // ─────────────── ANIMACIÓN ───────────────

    flower.style.setProperty(
        "--delay",
        `${index * CONFIG.intervaloFlores}ms`
    );


    // ─────────────── TALLO ───────────────

    const stem = document.createElement("div");

    stem.className = "stem";

    flower.appendChild(stem);


    // ─────────────── PÉTALOS ───────────────

    const CANTIDAD_PETALOS = 10;

    for (let p = 0; p < CANTIDAD_PETALOS; p++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        const rotacion =
            p * (360 / CANTIDAD_PETALOS);

        petal.style.setProperty(
            "--rotation",
            `${rotacion}deg`
        );

        flower.appendChild(petal);
    }


    // ─────────────── CENTRO ───────────────

    const center = document.createElement("div");

    center.className = "center";

    flower.appendChild(center);


    // ─────────────── CLICK EN EL GIRASOL ───────────────

    flower.addEventListener("click", () => {

        createPetalBurst(
            position[0],
            position[1]
        );

    });


    // ─────────────── AGREGAR AL JARDÍN ───────────────

    flowersContainer.appendChild(flower);
}


/* =========================================================
   🌼 EXPLOSIÓN DE PÉTALOS
   ========================================================= */

function createPetalBurst(xPercent, yPercent) {

    const CANTIDAD_PETALOS = 6;

    for (let i = 0; i < CANTIDAD_PETALOS; i++) {

        const petal =
            document.createElement("div");

        petal.className =
            "petal-particle";


        // Posición inicial
        petal.style.left =
            `${xPercent}%`;

        petal.style.top =
            `${yPercent}%`;


        // Movimiento horizontal aleatorio
        const movimientoX =
            (Math.random() - 0.5) * 220;

        petal.style.setProperty(
            "--x",
            `${movimientoX}px`
        );


        // Movimiento vertical
        const movimientoY =
            80 + Math.random() * 180;

        petal.style.setProperty(
            "--y",
            `${movimientoY}px`
        );


        // Agregar al contenedor
        petalsContainer.appendChild(petal);


        // Eliminar después de la animación
        setTimeout(() => {

            petal.remove();

        }, 4500);
    }
}


/* =========================================================
   🌼 PÉTALOS DEL FINAL
   ========================================================= */

function createFinalPetals() {

    // Si está desactivado, salir de la función
    if (!CONFIG.petalosFinales) {
        return;
    }


    const CANTIDAD_PETALOS_FINALES = 32;


    for (
        let i = 0;
        i < CANTIDAD_PETALOS_FINALES;
        i++
    ) {

        setTimeout(() => {

            const petal =
                document.createElement("div");

            petal.className =
                "petal-particle";


            // Posición horizontal aleatoria
            petal.style.left =
                `${10 + Math.random() * 80}%`;


            // Posición vertical inicial
            petal.style.top =
                `${10 + Math.random() * 25}%`;


            // Movimiento horizontal
            petal.style.setProperty(
                "--x",
                `${(Math.random() - 0.5) * 300}px`
            );


            // Movimiento vertical
            petal.style.setProperty(
                "--y",
                `${250 + Math.random() * 250}px`
            );


            // Duración aleatoria
            petal.style.animationDuration =
                `${6 + Math.random() * 3}s`;


            // Agregar pétalo
            petalsContainer.appendChild(petal);


            // Eliminar después de la animación
            setTimeout(() => {

                petal.remove();

            }, 7500);

        }, i * 170);
    }
}


/* =========================================================
   🌻 INICIAR TODA LA EXPERIENCIA
   ========================================================= */

function startExperience() {

    // ─────────────── OCULTAR INTRODUCCIÓN ───────────────

    intro.classList.add("hide");


    // ─────────────── MOSTRAR JARDÍN ───────────────

    garden.classList.add("visible");


    // ─────────────── LIMPIAR GIRASOLES ANTERIORES ───────────────

    flowersContainer.innerHTML = "";

backgroundMusic.volume = 1;
backgroundMusic.play();


    // ─────────────── CREAR GIRASOLES ───────────────
  setTimeout(() => {

        for (
            let i = 0;
            i < CONFIG.cantidadGirasoles;
            i++
        ) {
            createSunflower(i);
        }

    }, 1000);


    // ─────────────── MOSTRAR MENSAJE FINAL ───────────────

    const tiempoFlores =
        CONFIG.cantidadGirasoles *
        CONFIG.intervaloFlores;

    const TIEMPO_EXTRA = 100;

    setTimeout(() => {

        finalMessage.classList.add("show");

        tapAgain.classList.add("show");

        createFinalPetals();

    }, tiempoFlores + TIEMPO_EXTRA);
} 


/* =========================================================
   🖱️ BOTÓN DE INICIO
   ========================================================= */

startButton.addEventListener("click", (event) => {

    // Evita que el clic se propague a la escena
    event.stopPropagation();

    // Iniciar experiencia
    startExperience();
});


/* =========================================================
   🌼 CLIC EN LA ESCENA
   ========================================================= */

const scene =
    document.getElementById("scene");


scene.addEventListener("click", (event) => {

    // Si el jardín todavía no está visible,
    // no hacemos nada.
    if (!garden.classList.contains("visible")) {
        return;
    }


    // Si ya apareció el mensaje final,
    // no hacemos nada.
    if (finalMessage.classList.contains("show")) {
        return;
    }


    // Si se hizo clic sobre un girasol,
    // el propio girasol ya tiene su efecto.
    if (event.target.closest(".sunflower")) {
        return;
    }


    // Si se hizo clic en otro lugar,
    // crear explosión en posición aleatoria.
    const x =
        Math.random() * 80 + 10;

    const y =
        Math.random() * 50 + 20;

    createPetalBurst(x, y);
});

