const CONFIG = {timeLimit: 60, lifelines: {fiftyFifty: true, phone: true, audience: true}, lifelineUses: 1};
const QUESTIONS = {
transicion: [
{q:"¿Cuántos triángulos puedes formar con 6 palitos?",a:["1","2","3","4"],c:2,d:"easy"},
{q:"Si tienes 4 manzanas y comes 2, ¿cuántas te quedan?",a:["1","2","3","4"],c:1,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 2, 4, __, 8, 10?",a:["5","6","7","9"],c:1,d:"easy"},
{q:"¿Qué figura tiene exactamente 4 lados y 4 vértices?",a:["Triángulo","Cuadrado","Círculo","Pentágono"],c:1,d:"easy"},
{q:"Si tienes 3 cajas con 2 pelotas cada una, ¿cuántas pelotas tienes en total?",a:["5","6","7","8"],c:1,d:"easy"},
{q:"¿Cuál es el doble de 5?",a:["8","9","10","12"],c:2,d:"medium"},
{q:"¿Cuántos lados tiene un hexágono?",a:["5","6","7","8"],c:1,d:"medium"},
{q:"Si tienes 10 caramelos y los repartes en 2 grupos iguales, ¿cuántos hay en cada grupo?",a:["2","3","4","5"],c:3,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos triángulos por un lado?",a:["Cuadrado","Rectángulo","Trapecio","Paralelogramo"],c:1,d:"medium"},
{q:"¿Cuál es el resultado de 3 + 4 - 2?",a:["4","5","6","7"],c:1,d:"medium"},
{q:"Si tienes 5 globos y 3 se pinchan, ¿cuántos quedan?",a:["1","2","3","4"],c:1,d:"hard"},
{q:"¿Cuántos vértices tiene un cubo?",a:["6","8","10","12"],c:1,d:"hard"},
{q:"¿Cuál es el número mayor: 17, 13, 15 o 12?",a:["12","13","15","17"],c:3,d:"hard"},
{q:"Si tienes 2 filas de 4 sillas, ¿cuántas sillas hay en total?",a:["6","7","8","9"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar cuántos niños tienen cada color de camiseta?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
primero: [
{q:"¿Cuánto es 7 + 6?",a:["11","12","13","14"],c:2,d:"easy"},
{q:"¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?",a:["Rectángulo","Cuadrado","Triángulo","Círculo"],c:1,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 5, 10, __, 20, 25?",a:["12","13","15","18"],c:2,d:"easy"},
{q:"Si tienes 3 cajas con 4 lápices cada una, ¿cuántos lápices tienes?",a:["7","10","12","14"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un pentágono?",a:["4","5","6","7"],c:1,d:"easy"},
{q:"¿Cuál es el triple de 4?",a:["8","10","12","14"],c:2,d:"medium"},
{q:"¿Qué figura tiene 6 caras iguales?",a:["Cubo","Prisma","Esfera","Pirámide"],c:0,d:"medium"},
{q:"Si tienes 15 caramelos y los repartes en 3 grupos iguales, ¿cuántos hay en cada grupo?",a:["3","4","5","6"],c:2,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos cuadrados por un lado?",a:["Rectángulo","Triángulo","Trapecio","Paralelogramo"],c:0,d:"medium"},
{q:"¿Cuál es el resultado de 8 + 5 - 3?",a:["8","9","10","11"],c:2,d:"medium"},
{q:"Si tienes 10 globos y 4 se pinchan, ¿cuántos quedan?",a:["4","5","6","7"],c:2,d:"hard"},
{q:"¿Cuántos vértices tiene una pirámide cuadrangular?",a:["4","5","6","8"],c:1,d:"hard"},
{q:"¿Cuál es el número mayor: 21, 19, 23 o 20?",a:["19","20","21","23"],c:3,d:"hard"},
{q:"Si tienes 3 filas de 5 sillas, ¿cuántas sillas hay en total?",a:["10","12","15","18"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la cantidad de frutas que tiene cada niño?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
segundo: [
{q:"¿Cuánto es 15 + 9?",a:["22","23","24","25"],c:2,d:"easy"},
{q:"¿Qué figura tiene 8 lados?",a:["Hexágono","Octágono","Pentágono","Decágono"],c:1,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 10, 20, __, 40, 50?",a:["25","30","35","45"],c:1,d:"easy"},
{q:"Si tienes 4 cajas con 6 lápices cada una, ¿cuántos lápices tienes?",a:["20","22","24","26"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un decágono?",a:["8","9","10","12"],c:2,d:"easy"},
{q:"¿Cuál es el doble de 12?",a:["20","22","24","26"],c:2,d:"medium"},
{q:"¿Qué figura tiene 12 caras?",a:["Dodecaedro","Cubo","Prisma","Esfera"],c:0,d:"medium"},
{q:"Si tienes 24 caramelos y los repartes en 4 grupos iguales, ¿cuántos hay en cada grupo?",a:["4","5","6","8"],c:2,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos triángulos equiláteros por un lado?",a:["Cuadrado","Rectángulo","Trapecio","Paralelogramo"],c:1,d:"medium"},
{q:"¿Cuál es el resultado de 12 + 8 - 5?",a:["13","14","15","16"],c:2,d:"medium"},
{q:"Si tienes 18 globos y 11 se pinchan, ¿cuántos quedan?",a:["6","7","8","9"],c:1,d:"hard"},
{q:"¿Cuántos vértices tiene un prisma triangular?",a:["6","8","9","12"],c:0,d:"hard"},
{q:"¿Cuál es el número mayor: 34, 38, 36 o 32?",a:["32","34","36","38"],c:3,d:"hard"},
{q:"Si tienes 4 filas de 6 sillas, ¿cuántas sillas hay en total?",a:["20","22","24","26"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la cantidad de libros leídos por cada estudiante?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
tercero: [
{q:"¿Cuánto es 18 + 14?",a:["30","31","32","33"],c:2,d:"easy"},
{q:"¿Qué figura tiene 9 lados?",a:["Octágono","Eneágono","Decágono","Undecágono"],c:1,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 15, 25, __, 45, 55?",a:["30","32","35","40"],c:2,d:"easy"},
{q:"Si tienes 5 cajas con 7 lápices cada una, ¿cuántos lápices tienes?",a:["30","32","35","37"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un undecágono?",a:["9","10","11","12"],c:2,d:"easy"},
{q:"¿Cuál es el doble de 15?",a:["25","28","30","32"],c:2,d:"medium"},
{q:"¿Qué figura tiene 20 caras?",a:["Icosaedro","Cubo","Prisma","Esfera"],c:0,d:"medium"},
{q:"Si tienes 35 caramelos y los repartes en 5 grupos iguales, ¿cuántos hay en cada grupo?",a:["5","6","7","8"],c:2,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos hexágonos por un lado?",a:["Octágono","Decágono","Dodecágono","Tetradecágono"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 18 + 12 - 7?",a:["21","22","23","24"],c:2,d:"medium"},
{q:"Si tienes 25 globos y 16 se pinchan, ¿cuántos quedan?",a:["8","9","10","11"],c:1,d:"hard"},
{q:"¿Cuántos vértices tiene un prisma cuadrangular?",a:["6","8","10","12"],c:1,d:"hard"},
{q:"¿Cuál es el número mayor: 47, 43, 45 o 49?",a:["43","45","47","49"],c:3,d:"hard"},
{q:"Si tienes 5 filas de 7 sillas, ¿cuántas sillas hay en total?",a:["30","32","35","37"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la cantidad de libros leídos por cada estudiante?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
cuarto: [
{q:"¿Cuánto es 23 + 19?",a:["40","41","42","43"],c:2,d:"easy"},
{q:"¿Qué figura tiene 12 lados?",a:["Hexágono","Octágono","Dodecágono","Decágono"],c:2,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 25, 30, __, 40, 45?",a:["32","34","35","38"],c:2,d:"easy"},
{q:"Si tienes 6 cajas con 8 lápices cada una, ¿cuántos lápices tienes?",a:["40","44","48","52"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un pentadecágono?",a:["12","13","14","15"],c:3,d:"easy"},
{q:"¿Cuál es el doble de 18?",a:["32","34","36","38"],c:2,d:"medium"},
{q:"¿Qué figura tiene 30 caras?",a:["Triacontaedro","Cubo","Prisma","Esfera"],c:0,d:"medium"},
{q:"Si tienes 48 caramelos y los repartes en 6 grupos iguales, ¿cuántos hay en cada grupo?",a:["6","7","8","9"],c:2,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos pentágonos por un lado?",a:["Decágono","Hexágono","Trapecio","Paralelogramo"],c:0,d:"medium"},
{q:"¿Cuál es el resultado de 30 + 18 - 12?",a:["34","35","36","37"],c:2,d:"medium"},
{q:"Si tienes 20 globos y 13 se pinchan, ¿cuántos quedan?",a:["6","7","8","9"],c:1,d:"hard"},
{q:"¿Cuántos vértices tiene un prisma hexagonal?",a:["10","12","14","16"],c:1,d:"hard"},
{q:"¿Cuál es el número mayor: 58, 54, 56 o 60?",a:["54","56","58","60"],c:3,d:"hard"},
{q:"Si tienes 6 filas de 8 sillas, ¿cuántas sillas hay en total?",a:["40","44","48","52"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la cantidad de mascotas por familia?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
quinto: [
{q:"¿Cuánto es 34 + 27?",a:["59","60","61","62"],c:2,d:"easy"},
{q:"¿Qué figura tiene 14 lados?",a:["Dodecágono","Tridecágono","Tetradecágono","Pentadecágono"],c:2,d:"easy"},
{q:"¿Cuál es el número que falta en la secuencia: 35, 40, __, 50, 55?",a:["42","44","45","48"],c:2,d:"easy"},
{q:"Si tienes 7 cajas con 9 lápices cada una, ¿cuántos lápices tienes?",a:["56","60","63","67"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un icoságono?",a:["18","19","20","21"],c:2,d:"easy"},
{q:"¿Cuál es el doble de 22?",a:["40","42","44","46"],c:2,d:"medium"},
{q:"¿Qué figura tiene 50 caras?",a:["Pentacontaedro","Cubo","Prisma","Esfera"],c:0,d:"medium"},
{q:"Si tienes 63 caramelos y los repartes en 7 grupos iguales, ¿cuántos hay en cada grupo?",a:["7","8","9","10"],c:2,d:"medium"},
{q:"¿Qué figura se obtiene al juntar dos octágonos por un lado?",a:["Decágono","Dodecágono","Hexadecágono","Octadecágono"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 42 + 25 - 18?",a:["47","48","49","50"],c:2,d:"medium"},
{q:"Si tienes 30 globos y 21 se pinchan, ¿cuántos quedan?",a:["8","9","10","11"],c:1,d:"hard"},
{q:"¿Cuántos vértices tiene un prisma octagonal?",a:["14","16","18","20"],c:1,d:"hard"},
{q:"¿Cuál es el número mayor: 67, 63, 65 o 69?",a:["63","65","67","69"],c:3,d:"hard"},
{q:"Si tienes 7 filas de 9 sillas, ¿cuántas sillas hay en total?",a:["56","60","63","67"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la cantidad de deportes practicados por estudiante?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
sexto: [
{q:"Resuelve: 3x + 5 = 20. ¿Cuál es el valor de x?",a:["3","4","5","6"],c:2,d:"easy"},
{q:"¿Cuál es el área de un triángulo de base 8 cm y altura 5 cm?",a:["20 cm²","30 cm²","40 cm²","45 cm²"],c:0,d:"easy"},
{q:"¿Cuántos lados tiene un decágono?",a:["8","9","10","12"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 6, 8, 10 y 12?",a:["8","9","10","11"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un cuadrado de lado 7 cm?",a:["21 cm","24 cm","28 cm","30 cm"],c:2,d:"easy"},
{q:"¿Cuál es el resultado de 2³?",a:["6","8","9","12"],c:1,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma hexagonal?",a:["10","12","14","16"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 3, 7, 9, 11, 15?",a:["7","9","11","15"],c:1,d:"medium"},
{q:"¿Cuál es el área de un rectángulo de base 9 cm y altura 4 cm?",a:["32 cm²","34 cm²","36 cm²","40 cm²"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 5! (factorial de 5)?",a:["60","100","120","150"],c:2,d:"medium"},
{q:"¿Cuál es la moda de los números 2, 4, 4, 6, 8?",a:["2","4","6","8"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un triángulo?",a:["90°","180°","270°","360°"],c:1,d:"hard"},
{q:"¿Cuál es el resultado de 2x² si x = 3?",a:["12","16","18","20"],c:2,d:"hard"},
{q:"¿Cuál es el área de un círculo de radio 3 cm? (π ≈ 3.14)",a:["18.84 cm²","21.24 cm²","28.26 cm²","31.42 cm²"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la frecuencia de colores favoritos en un grupo?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:0,d:"hard"}
],
septimo: [
{q:"Resuelve: 2x - 7 = 9. ¿Cuál es el valor de x?",a:["6","7","8","9"],c:2,d:"easy"},
{q:"¿Cuál es el área de un círculo de radio 5 cm? (π ≈ 3.14)",a:["25 cm²","50 cm²","78.5 cm²","100 cm²"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un dodecágono?",a:["10","11","12","13"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 12, 15, 18 y 21?",a:["15","16.5","17","18"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un triángulo equilátero de lado 9 cm?",a:["18 cm","24 cm","27 cm","30 cm"],c:2,d:"easy"},
{q:"¿Cuál es el resultado de 3⁴?",a:["27","64","81","243"],c:2,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma octagonal?",a:["14","16","18","20"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 5, 9, 11, 13, 17?",a:["9","11","13","17"],c:1,d:"medium"},
{q:"¿Cuál es el área de un triángulo de base 12 cm y altura 7 cm?",a:["36 cm²","42 cm²","48 cm²","54 cm²"],c:1,d:"medium"},
{q:"¿Cuál es el resultado de 6! (factorial de 6)?",a:["360","480","720","840"],c:2,d:"medium"},
{q:"¿Cuál es la moda de los números 3, 5, 5, 7, 9?",a:["3","5","7","9"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un cuadrilátero?",a:["180°","270°","360°","540°"],c:2,d:"hard"},
{q:"¿Cuál es el resultado de 3x² si x = 4?",a:["36","44","48","52"],c:2,d:"hard"},
{q:"¿Cuál es el área de un rectángulo de base 15 cm y altura 6 cm?",a:["80 cm²","85 cm²","90 cm²","95 cm²"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la distribución porcentual de edades en un grupo?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:2,d:"hard"}
],
octavo: [
{q:"Resuelve: 4x + 3 = 27. ¿Cuál es el valor de x?",a:["5","6","7","8"],c:1,d:"easy"},
{q:"¿Cuál es el área de un círculo de radio 7 cm? (π ≈ 3.14)",a:["120.38 cm²","140.34 cm²","153.86 cm²","160.22 cm²"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un pentadecágono?",a:["13","14","15","16"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 18, 22, 26 y 30?",a:["22","24","25","26"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un hexágono regular de lado 11 cm?",a:["55 cm","60 cm","66 cm","72 cm"],c:2,d:"easy"},
{q:"¿Cuál es el resultado de 4⁴?",a:["64","128","256","512"],c:2,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma decagonal?",a:["18","20","22","24"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 8, 12, 16, 20, 24?",a:["12","16","20","24"],c:1,d:"medium"},
{q:"¿Cuál es el área de un triángulo de base 16 cm y altura 9 cm?",a:["64 cm²","68 cm²","72 cm²","76 cm²"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 7! (factorial de 7)?",a:["2,520","3,600","5,040","7,200"],c:2,d:"medium"},
{q:"¿Cuál es la moda de los números 6, 8, 8, 10, 12?",a:["6","8","10","12"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un pentágono?",a:["360°","450°","540°","630°"],c:2,d:"hard"},
{q:"¿Cuál es el resultado de 4x² si x = 5?",a:["80","90","100","110"],c:2,d:"hard"},
{q:"¿Cuál es el área de un rectángulo de base 18 cm y altura 7 cm?",a:["120 cm²","126 cm²","132 cm²","138 cm²"],c:1,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la evolución de temperaturas durante una semana?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:1,d:"hard"}
],
noveno: [
{q:"Resuelve: 5x - 8 = 37. ¿Cuál es el valor de x?",a:["7","8","9","10"],c:2,d:"easy"},
{q:"¿Cuál es el área de un círculo de radio 9 cm? (π ≈ 3.14)",a:["254.34 cm²","260.18 cm²","254.34 cm²","280.26 cm²"],c:0,d:"easy"},
{q:"¿Cuántos lados tiene un icoságono?",a:["18","19","20","21"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 24, 28, 32 y 36?",a:["28","30","32","34"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un octágono regular de lado 13 cm?",a:["96 cm","100 cm","104 cm","108 cm"],c:2,d:"easy"},
{q:"¿Cuál es el resultado de 5⁴?",a:["125","256","512","625"],c:3,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma dodecagonal?",a:["22","24","26","28"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 10, 14, 18, 22, 26?",a:["14","18","22","26"],c:1,d:"medium"},
{q:"¿Cuál es el área de un triángulo de base 20 cm y altura 11 cm?",a:["100 cm²","105 cm²","110 cm²","115 cm²"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 8! (factorial de 8)?",a:["20,160","30,240","40,320","50,400"],c:2,d:"medium"},
{q:"¿Cuál es la moda de los números 9, 11, 11, 13, 15?",a:["9","11","13","15"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un hexágono?",a:["540°","630°","720°","810°"],c:2,d:"hard"},
{q:"¿Cuál es el resultado de 5x² si x = 6?",a:["150","160","170","180"],c:3,d:"hard"},
{q:"¿Cuál es el área de un rectángulo de base 21 cm y altura 8 cm?",a:["160 cm²","164 cm²","168 cm²","172 cm²"],c:2,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la correlación entre horas de estudio y calificaciones?",a:["Gráfico de barras","Gráfico de dispersión","Gráfico circular","Tabla"],c:1,d:"hard"}
],
decimo: [
{q:"Resuelve: 6x + 7 = 49. ¿Cuál es el valor de x?",a:["6","7","8","9"],c:1,d:"easy"},
{q:"¿Cuál es el área de un círculo de radio 11 cm? (π ≈ 3.14)",a:["360.22 cm²","370.46 cm²","379.94 cm²","389.12 cm²"],c:2,d:"easy"},
{q:"¿Cuántos lados tiene un pentacontágono?",a:["40","45","50","55"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 32, 36, 40 y 44?",a:["36","38","40","42"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un dodecágono regular de lado 15 cm?",a:["120 cm","150 cm","180 cm","210 cm"],c:2,d:"easy"},
{q:"¿Cuál es el resultado de 6³?",a:["36","216","256","324"],c:1,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma pentadecagonal?",a:["28","30","32","34"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 14, 18, 22, 26, 30?",a:["18","22","26","30"],c:1,d:"medium"},
{q:"¿Cuál es el área de un triángulo de base 18 cm y altura 13 cm?",a:["108 cm²","117 cm²","126 cm²","135 cm²"],c:1,d:"medium"},
{q:"¿Cuál es el resultado de 9! (factorial de 9)?",a:["181,440","362,880","403,200","504,000"],c:1,d:"medium"},
{q:"¿Cuál es la moda de los números 12, 14, 14, 16, 18?",a:["12","14","16","18"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un decágono?",a:["1,440°","1,620°","1,800°","2,000°"],c:0,d:"hard"},
{q:"¿Cuál es el resultado de 6x² si x = 7?",a:["282","294","306","318"],c:1,d:"hard"},
{q:"¿Cuál es el área de un rectángulo de base 24 cm y altura 9 cm?",a:["204 cm²","216 cm²","228 cm²","240 cm²"],c:1,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar la relación entre dos variables numéricas?",a:["Gráfico de barras","Gráfico de dispersión","Gráfico circular","Tabla"],c:1,d:"hard"}
],
undecimo: [
{q:"Resuelve: 7x - 5 = 51. ¿Cuál es el valor de x?",a:["7","8","9","10"],c:1,d:"easy"},
{q:"¿Cuál es el área de un círculo de radio 13 cm? (π ≈ 3.14)",a:["520.22 cm²","530.66 cm²","530.74 cm²","531.12 cm²"],c:1,d:"easy"},
{q:"¿Cuántos lados tiene un tetracontaedro?",a:["30","36","40","44"],c:2,d:"easy"},
{q:"¿Cuál es el promedio de los números 40, 44, 48 y 52?",a:["44","46","48","50"],c:1,d:"easy"},
{q:"¿Cuál es el perímetro de un pentadecágono regular de lado 17 cm?",a:["225 cm","255 cm","275 cm","285 cm"],c:1,d:"easy"},
{q:"¿Cuál es el resultado de 7³?",a:["343","512","729","1,024"],c:0,d:"medium"},
{q:"¿Cuántos vértices tiene un prisma tetracontagonal?",a:["78","80","82","84"],c:1,d:"medium"},
{q:"¿Cuál es la mediana de los números 18, 22, 26, 30, 34?",a:["22","26","30","34"],c:1,d:"medium"},
{q:"¿Cuál es el área de un triángulo de base 22 cm y altura 15 cm?",a:["155 cm²","160 cm²","165 cm²","170 cm²"],c:2,d:"medium"},
{q:"¿Cuál es el resultado de 10! (factorial de 10)?",a:["1,814,400","3,628,800","4,032,000","5,040,000"],c:1,d:"medium"},
{q:"¿Cuál es la moda de los números 15, 17, 17, 19, 21?",a:["15","17","19","21"],c:1,d:"hard"},
{q:"¿Cuántos grados suma el interior de un dodecágono?",a:["1,620°","1,800°","2,160°","2,520°"],c:1,d:"hard"},
{q:"¿Cuál es el resultado de 7x² si x = 8?",a:["392","420","448","476"],c:2,d:"hard"},
{q:"¿Cuál es el área de un rectángulo de base 26 cm y altura 11 cm?",a:["276 cm²","286 cm²","296 cm²","306 cm²"],c:1,d:"hard"},
{q:"¿Qué gráfico es mejor para mostrar tendencias a lo largo del tiempo?",a:["Gráfico de barras","Gráfico de líneas","Gráfico circular","Tabla"],c:1,d:"hard"}
]
};
const POINTS = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
let game = {grade: null, questions: [], current: 0, points: 0, lifelines: {fiftyFifty: 1, phone: 1, audience: 1}, timer: null, timeLeft: 60};
const screens = {home: document.getElementById('homeScreen'), config: document.getElementById('configScreen'), game: document.getElementById('gameScreen'), result: document.getElementById('resultScreen')};
const elements = {gradeButtons: document.querySelectorAll('.grade-btn'), configBtn: document.getElementById('configBtn'), saveConfigBtn: document.getElementById('saveConfigBtn'), backToHomeBtn: document.getElementById('backToHomeBtn'), resetGameBtn: document.getElementById('resetGameBtn'), currentGrade: document.getElementById('currentGrade'), questionNumber: document.getElementById('questionNumber'), timer: document.getElementById('timer'), pointsLadder: document.getElementById('pointsLadder'), questionText: document.getElementById('questionText'), answerButtons: document.querySelectorAll('.answer-btn'), fiftyFifty: document.getElementById('fiftyFifty'), phoneAFriend: document.getElementById('phoneAFriend'), askAudience: document.getElementById('askAudience'), modal: document.getElementById('lifelineModal'), modalTitle: document.getElementById('modalTitle'), modalBody: document.getElementById('modalBody'), modalOkBtn: document.getElementById('modalOkBtn'), closeModal: document.querySelector('.close-modal'), resultIcon: document.getElementById('resultIcon'), resultTitle: document.getElementById('resultTitle'), resultMessage: document.getElementById('resultMessage'), finalScore: document.getElementById('finalScore'), playAgainBtn: document.getElementById('playAgainBtn'), homeBtn: document.getElementById('homeBtn')};
document.addEventListener('DOMContentLoaded', init);
function init() {setupEventListeners(); showScreen('home'); createPointsLadder();}
function setupEventListeners() {elements.gradeButtons.forEach(btn => {btn.addEventListener('click', () => startGame(btn.dataset.grade));}); elements.configBtn.addEventListener('click', () => showScreen('config')); elements.saveConfigBtn.addEventListener('click', saveConfig); elements.backToHomeBtn.addEventListener('click', () => showScreen('home')); elements.resetGameBtn.addEventListener('click', resetGame); elements.answerButtons.forEach((btn, i) => {btn.addEventListener('click', () => selectAnswer(i));}); elements.fiftyFifty.addEventListener('click', () => useLifeline('fiftyFifty')); elements.phoneAFriend.addEventListener('click', () => useLifeline('phone')); elements.askAudience.addEventListener('click', () => useLifeline('audience')); elements.modalOkBtn.addEventListener('click', closeModal); elements.closeModal.addEventListener('click', closeModal); elements.playAgainBtn.addEventListener('click', () => startGame(game.grade)); elements.homeBtn.addEventListener('click', () => showScreen('home'));}
function showScreen(screen) {Object.values(screens).forEach(s => s.classList.remove('active')); screens[screen].classList.add('active');}
function startGame(grade) {if (!QUESTIONS[grade]) {alert('Preguntas no disponibles para este grado'); return;} game.grade = grade; game.questions = [...QUESTIONS[grade]]; game.current = 0; game.points = 0; game.lifelines = {fiftyFifty: CONFIG.lifelineUses, phone: CONFIG.lifelineUses, audience: CONFIG.lifelineUses}; elements.currentGrade.textContent = grade.charAt(0).toUpperCase() + grade.slice(1); showScreen('game'); updateLifelines(); displayQuestion();}
function displayQuestion() {if (game.current >= game.questions.length) {endGame(true); return;} const q = game.questions[game.current]; elements.questionNumber.textContent = `Pregunta ${game.current + 1} de 15`; elements.questionText.textContent = q.q; elements.answerButtons.forEach((btn, i) => {btn.classList.remove('correct', 'incorrect', 'selected', 'disabled'); btn.style.display = 'flex'; btn.disabled = false; btn.querySelector('.answer-text').textContent = q.a[i];}); updatePointsLadder(); startTimer();}
function selectAnswer(index) {stopTimer(); const q = game.questions[game.current]; const correct = index === q.c; elements.answerButtons.forEach(btn => btn.disabled = true); elements.answerButtons[index].classList.add('selected'); setTimeout(() => {elements.answerButtons[q.c].classList.add('correct'); if (!correct) {elements.answerButtons[index].classList.add('incorrect');} setTimeout(() => {if (correct) {game.points = POINTS[game.current]; game.current++; if (game.current === 5 || game.current === 10) {showModal('¡Nivel Seguro!', `Has alcanzado un nivel seguro con ${formatPoints(game.points)} puntos.`);} else if (game.current >= 15) {endGame(true);} else {displayQuestion();}} else {endGame(false);}}, 2000);}, 1000);}
function startTimer() {game.timeLeft = CONFIG.timeLimit; updateTimerDisplay(); game.timer = setInterval(() => {game.timeLeft--; updateTimerDisplay(); if (game.timeLeft <= 0) {stopTimer(); endGame(false);}}, 1000);}
function stopTimer() {if (game.timer) {clearInterval(game.timer); game.timer = null;}}
function updateTimerDisplay() {elements.timer.textContent = game.timeLeft; elements.timer.className = 'timer'; if (game.timeLeft <= 10) {elements.timer.classList.add('danger');} else if (game.timeLeft <= 20) {elements.timer.classList.add('warning');}}
function useLifeline(type) {if (game.lifelines[type] <= 0) return; game.lifelines[type]--; updateLifelines(); const q = game.questions[game.current]; switch(type) {case 'fiftyFifty': const wrong = []; q.a.forEach((_, i) => {if (i !== q.c) wrong.push(i);}); for (let i = 0; i < 2; i++) {const idx = wrong.splice(Math.floor(Math.random() * wrong.length), 1)[0]; elements.answerButtons[idx].style.display = 'none';} break; case 'phone': const advice = Math.random() < 0.8 ? `Creo que es la ${String.fromCharCode(65 + q.c)}` : `No estoy seguro, pero diría la ${String.fromCharCode(65 + Math.floor(Math.random() * 4))}`; showModal('Llamada a un Amigo', advice); break; case 'audience': const results = generateAudiencePoll(q.c); let pollText = 'Resultados de la encuesta:\n\n'; results.forEach((pct, i) => {pollText += `${String.fromCharCode(65 + i)}: ${pct}%\n`;}); showModal('Voto del Público', pollText); break;}}
function generateAudiencePoll(correct) {const results = [0, 0, 0, 0]; results[correct] = 40 + Math.random() * 30; let remaining = 100 - results[correct]; for (let i = 0; i < 4; i++) {if (i !== correct) {if (i === 3) {results[i] = remaining;} else {results[i] = Math.random() * remaining; remaining -= results[i];}}} return results.map(r => Math.round(r));}
function updateLifelines() {elements.fiftyFifty.disabled = game.lifelines.fiftyFifty <= 0; elements.phoneAFriend.disabled = game.lifelines.phone <= 0; elements.askAudience.disabled = game.lifelines.audience <= 0; elements.fiftyFifty.querySelector('.uses-left').textContent = game.lifelines.fiftyFifty; elements.phoneAFriend.querySelector('.uses-left').textContent = game.lifelines.phone; elements.askAudience.querySelector('.uses-left').textContent = game.lifelines.audience;}
function createPointsLadder() {elements.pointsLadder.innerHTML = ''; POINTS.forEach((points, i) => {const item = document.createElement('div'); item.className = 'ladder-item'; if (i === 4 || i === 9) item.classList.add('safe'); item.innerHTML = `<span>${i + 1}</span><span>${formatPoints(points)}</span>`; elements.pointsLadder.appendChild(item);});}
function updatePointsLadder() {const items = elements.pointsLadder.querySelectorAll('.ladder-item'); items.forEach((item, i) => {item.classList.remove('current', 'completed'); if (i === game.current) {item.classList.add('current');} else if (i < game.current) {item.classList.add('completed');}});}
function showModal(title, message) {elements.modalTitle.textContent = title; elements.modalBody.textContent = message; elements.modal.classList.add('active');}
function closeModal() {elements.modal.classList.remove('active');}
function endGame(won) {stopTimer(); const safePoints = game.current >= 10 ? 32000 : game.current >= 5 ? 1000 : 0; const finalPoints = won ? game.points : safePoints; elements.resultIcon.textContent = won ? '🏆' : '😔'; elements.resultTitle.textContent = won ? '¡Felicitaciones!' : 'Juego Terminado'; elements.resultMessage.textContent = won ? '¡Has completado todas las preguntas!' : 'No te preocupes, ¡puedes intentarlo de nuevo!'; elements.finalScore.textContent = `Puntos: ${formatPoints(finalPoints)}`; showScreen('result');}
function resetGame() {if (confirm('¿Reiniciar el juego actual?')) {stopTimer(); showScreen('home');}}
function saveConfig() {CONFIG.timeLimit = parseInt(document.getElementById('timeLimit').value) || 60; CONFIG.lifelines.fiftyFifty = document.getElementById('fiftyFiftyEnabled').checked; CONFIG.lifelines.phone = document.getElementById('phoneEnabled').checked; CONFIG.lifelines.audience = document.getElementById('audienceEnabled').checked; CONFIG.lifelineUses = parseInt(document.getElementById('lifelineUses').value) || 1; alert('Configuración guardada'); showScreen('home');}
function formatPoints(points) {return points.toLocaleString();}