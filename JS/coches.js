/**
 * coches.js
 * aqui esta toda la informacion de los coches.
 * este array lo usan index.html y catalogo.html.
 * si quieres añadir un coche nuevo solo tienes que
 * copiar uno de abajo, pegarlo al final y cambiar
 * los datos. no hace falta tocar nada mas.
 *
 * campos de cada coche:
 *   id          -> numero unico, lo usa el modal para saber que ficha abrir
 *   marca       -> nombre del fabricante
 *   modelo      -> nombre del modelo
 *   año         -> año de matriculacion
 *   potencia    -> caballos (CV)
 *   combustible -> "Gasolina", "Diesel", "Electrico" o "Hibrido"
 *   precio      -> en euros, sin puntos ni simbolo
 *   km          -> kilometros recorridos (0 = nuevo)
 *   color       -> color oficial del fabricante
 *   descripcion -> texto largo que sale en la ficha del modal
 *   imagen      -> url de la foto
 *   destacado   -> true si tiene que aparecer en la pagina de inicio
 */

const coches = [
  {
    id: 1,
    marca: "BMW",
    modelo: "M3 Competition",
    año: 2024,
    potencia: 510,
    combustible: "Gasolina",
    precio: 95000,
    km: 0, // 0 = nuevo
    color: "Azul Portimao",
    descripcion: "El BMW M3 Competition es la berlina deportiva definitiva: motor de 6 cilindros en línea biturbo, tracción trasera y un sonido inconfundible. Ideal para quien no quiere renunciar a nada.",
    imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    destacado: true // sale en la portada
  },
  {
    id: 2,
    marca: "Tesla",
    modelo: "Model 3",
    año: 2024,
    potencia: 358,
    combustible: "Eléctrico",
    precio: 45990,
    km: 0,
    color: "Blanco Perla",
    descripcion: "El Tesla Model 3 redefine el coche eléctrico. Autonomía de hasta 629 km, carga rápida y un interior minimalista dominado por una pantalla táctil de 15,4 pulgadas.",
    imagen: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
    destacado: true
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "GR86",
    año: 2023,
    potencia: 234,
    combustible: "Gasolina",
    precio: 33900,
    km: 5200,
    color: "Rojo Prominence",
    descripcion: "El GR86 recupera la esencia del coupé deportivo puro: ligero, ágil y con propulsión trasera. Motor bóxer 2.4 aspirado y una conexión con el asfalto difícil de igualar.",
    imagen: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    destacado: true
  },
  {
    id: 4,
    marca: "Volkswagen",
    modelo: "Golf GTI",
    año: 2023,
    potencia: 265,
    combustible: "Gasolina",
    precio: 42500,
    km: 12000,
    color: "Gris Nardo",
    descripcion: "El GTI es el referente eterno del hot hatch. Motor TSI 2.0 turbo, diferencial de deslizamiento limitado de serie y un interior deportivo sin renunciar a la practicidad del Golf.",
    imagen: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=600&q=80",
    destacado: false // este no sale en portada
  },
  {
    id: 5,
    marca: "Ford",
    modelo: "Mustang Mach-E GT",
    año: 2024,
    potencia: 487,
    combustible: "Eléctrico",
    precio: 67000,
    km: 0,
    color: "Negro Azabache",
    descripcion: "La evolución eléctrica del icónico Mustang. SUV con 487 CV, 0-100 en 3,7 segundos y una autonomía de 490 km. Muscle car redefinido para la era eléctrica.",
    imagen: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    destacado: false
  },
  {
    id: 6,
    marca: "Audi",
    modelo: "A4 TDI",
    año: 2022,
    potencia: 204,
    combustible: "Diésel",
    precio: 38000,
    km: 28000,
    color: "Gris Glacier",
    descripcion: "La berlina premium por excelencia. Motor diésel 2.0 de 204 CV con caja S-tronic, tracción quattro y un interior de alta calidad que justifica cada euro de su precio.",
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    destacado: false
  },
  {
    id: 7,
    marca: "Toyota",
    modelo: "RAV4 Hybrid",
    año: 2023,
    potencia: 222,
    combustible: "Híbrido",
    precio: 41500,
    km: 8000,
    color: "Verde Juniper",
    descripcion: "El SUV híbrido más vendido del mundo. Combina un motor de gasolina 2.5 con dos motores eléctricos, tracción a las cuatro ruedas sin árbol de transmisión y un consumo de 6 l/100 km.",
    imagen: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80",
    destacado: false
  },
  {
    id: 8,
    marca: "Porsche",
    modelo: "911 Carrera S",
    año: 2023,
    potencia: 450,
    combustible: "Gasolina",
    precio: 138000,
    km: 1500,
    color: "Plata GT",
    descripcion: "El 911 Carrera S es el deportivo de referencia desde 1963. Motor bóxer 3.0 biturbo, PDK de 8 velocidades y una dinámica de conducción que sigue siendo el patrón de la industria.",
    imagen: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80",
    destacado: true
  }
];
