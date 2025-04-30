/**
 * Constantes de texto para toda la aplicación
 * Centraliza los textos para facilitar cambios y posible internacionalización futura
 */

// Títulos
export const TITULOS = {
  NOMBRE_EMPRESA: "FarmaStock",
  DASHBOARD_TITULO: "Panel de Control",
  PRODUCTOS_TITULO: "Gestión de Productos",
  EDITAR_PRODUCTO: "Editar Producto",
  AGREGAR_PRODUCTO: "Agregar Producto",
  PREGUNTAS_FRECUENTES: "Preguntas Frecuentes",
};

// Labels
export const LABELS = {
  BUSCAR_PRODUCTOS: "Buscar productos...",
  NOMBRE: "Nombre",
  DESCRIPCION: "Descripción",
  CANTIDAD: "Cantidad",
  PRECIO: "Precio",
  DASHBOARD: "Dashboard",
  PRODUCTOS: "Productos",
  STOCK: "Stock", 
  VALOR_INVENTARIO: "Valor Inventario",
  VENTAS_HOY: "Ventas Hoy",
  STOCK_BAJO: "Stock Bajo",
  STOCK_NORMAL: "Stock Normal",
};

// Botones
export const BOTONES = {
  CONFIRMAR: "Confirmar",
  CANCELAR: "Cancelar",
  ELIMINAR: "Eliminar",
  EDITAR: "Editar",
  AGREGAR: "Agregar",
  AGREGAR_PRODUCTO: "Agregar Producto",
  BUSCAR: "Buscar",
};

// Mensajes
export const MENSAJES = {
  SIN_PRODUCTOS: "No hay productos disponibles.",
  BIENVENIDA: "Bienvenido a FarmaStock",
  COPYRIGHT: "© 2025 FarmaStock. Todos los derechos reservados.",
};

export const FOOTER ={
  DESARROLLADO_POR: "Desarrollado por",
  DESARROLLADOR: "Francisco Israel Davó Cabrera",
  FOOTER_TITULO: "💊 ©2025 - FarmaStock®",
  CONTACTO: "Contacto",
  POLITICAS: "Política de privacidad",
  TERMINOS: "Términos y condiciones",
  COOKIES: "Cookies",
  SIGUENOS: "Síguenos",
  EMAIL:"soporte@farmastock.com",
  // Redes sociales
  FACEBOOK: { name: "Facebook", icon: "fab fa-facebook-f" },
  TWITTER: { name: "Twitter", icon: "fab fa-twitter" },
  INSTAGRAM: { name: "Instagram", icon: "fab fa-instagram" },
  WHATSAPP: { name: "WhatsApp", icon: "fab fa-whatsapp" },
  GITHUB: { name: "GitHub", icon: "fab fa-github" },
}


/**
 * Función para formatear moneda (Euro)
 * @param {number} valor - Valor a formatear
 * @returns {string} Valor formateado como moneda
 */
export const formatearMoneda = (valor) => {
  return `${valor.toFixed(2)} €`;
};

/**
 * Función para formatear fecha
 * @param {string} fechaStr - Fecha en formato string (YYYY-MM-DD)
 * @returns {string} Fecha formateada en formato local
 */
export const formatearFecha = (fechaStr) => {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleDateString("es-ES");
};