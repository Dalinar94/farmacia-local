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
  STOCK_AGOTADO:" Stock Agotado",
  VALOR_INVENTARIO: "Valor del Inventario",
  PRODUCTOS: "Productos",
  PANEL_PRODUCTOS: "Panel de Productos",
  REGISTRO: "Registro",
  CONTACTO: "Contacto",
  ENLACES_UTILES: "Enlaces Útiles",
  SOPORTE: "Soporte",
  REPORTAR_INCIDENCIA: "Reportar una Incidencia",
  ESTADO_STOCK: "Estado del Stock",
  PERFIL_USUARIO: "Perfil de Usuario",
  PANEL_DE_PROVEEDORES: "Panel de Proveedores",
};

// Labels
export const LABELS = {
  BUSCAR_PRODUCTOS: "Buscar productos...",
  NOMBRE: "Nombre",
  APELLIDO: "Apellido",
  TELEFONO: "Teléfono",
  DESCRIPCION: "Descripción",
  HORARIO: "Horario",
  CANTIDAD: "Cantidad",
  DIRECCION: "Dirección",
  CORREO: "Correo",
  PRECIO: "Precio",
  DASHBOARD: "Dashboard",
  PRODUCTOS: "Productos",
  PROVEEDORES: "Proveedores",
  STOCK: "Stock", 
  VALOR_INVENTARIO: "Valor Inventario",
  VENTAS_HOY: "Ventas Hoy",
  STOCK_BAJO: "Stock Bajo",
  STOCK_NORMAL: "Stock Normal",
  STOCK_AGOTADO: "Stock Agotado",
  SOPORTE: "Soporte",
  VALOR: "Valor",
  VALOR_UNIDAD: "Valor por unidad",
  ACCIONES: "Acciones",
  ESTADO: "Estado",
  EMAIL: "Email",
  CONTRASENA: "Contraseña",
  NO_CUENTA: "¿No tienes cuenta?",
  YA_CUENTA: "¿Ya tienes cuenta?",
  TIPO_INCIDENCIA: "Tipo de Incidencia",
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
  CERRAR_SESION: "Logout",
  INICIAR_SESION: "Iniciar Sesión",
  REGISTRAR: "Registrar",
  ACCEDER: "Acceder",
  ENVIAR: "Enviar",
  RESTABLECER: "Restablecer",
  GUARDAR: "Guardar",
};
export const OPTIONS={
  ESTANDAR:"Seleccione una opción",
  ERROR_TECNICO:"Error técnico",
  PROBLEMA_INVENTARIO:"Problema con el inventario",
  CONSULTA_GENERAL:"Consulta general",

}
export const INFORMACION={
  HORARIO_DIAS: "Lunes a Viernes, 9:00 AM - 6:00 PM",
  TELEFONO_NUMERO: "+34 123 456 789",
}

export const ENLACES={
  REGISTRATE: "Regístrate",
  ACCEDE: "Accede",
  IR_PANEL: "Ir al Panel de Control",
  GESTION_PRODUCTOS: "Gestión de Productos",
  SOPORTE_EMAIL: "soporte@farmastock.com",
}

// Mensajes
export const MENSAJES = {
  SIN_PRODUCTOS: "No hay productos disponibles.",
  BIENVENIDA: "Bienvenido a FarmaStock",
  COPYRIGHT: "© 2025 FarmaStock. Todos los derechos reservados.",
  INGRESE_CREDENCIAL: "Ingrese sus credenciales de acceso",
  INGRESE_REGISTRO: "Ingrese sus datos de registro",
  CERRAR_SESION: "¿Está seguro de que desea cerrar sesión?",
  NO_USUARIO: "No hay datos de usuario disponibles. Por favor, inicia sesión.",
};

export const FOOTER ={
  DESARROLLADO_POR: "Desarrollado por",
  DESARROLLADOR: "Francisco Israel Davó Cabrera",
  FOOTER_TITULO: "💊 ©2025 - FarmaStock®",
  CONTACTO: "Contacto",
  POLITICAS: "Política de privacidad",
  TERMINOS: "Términos y condiciones",
  COOKIES: "Política de Cookies",
  SIGUENOS: "Síguenos",
  EMAIL:"frandavowork@gmail.com",
  // Redes sociales
  FACEBOOK: { name: "Facebook", icon: "fab fa-facebook-f" },
  TWITTER: { name: "Twitter", icon: "fab fa-x-twitter" },
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