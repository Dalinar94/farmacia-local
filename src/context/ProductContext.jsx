import React, { createContext, useState } from 'react';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Paracetamol', description: 'El Paracetamol es un medicamento utilizado para aliviar el dolor y reducir la fiebre', stock: 50, price: 100 , img: 'https://media.istockphoto.com/id/1359178154/es/foto/paracetamol-caja-de-pastillas-de-ibuprofeno-caja-papel-comprimidos-en-bl%C3%ADster.jpg?s=612x612&w=0&k=20&c=5zcjASMBvwk_5zIIw0g1IUBnM0qpmvsx69xMy-fr0x4='},
    { id: 2, name: 'Ibuprofeno', description: 'El Ibuprofeno es un medicamento utilizado para aliviar el dolor, reducir la inflamación y bajar la fiebre.', stock: 0, price: 50,img:'https://media.istockphoto.com/id/1359178057/es/foto/caja-de-p%C3%ADldoras-de-ibuprofeno-caja-papel-comprimidos-en-bl%C3%ADster.jpg?s=612x612&w=0&k=20&c=9Hju42OJ6Q-JfhEDvaereSH8xUlt_N5klWob3x5PJuA=' },
    { id: 3, name: 'Omoxicilina', description: 'La amoxicilina es un antibiótico de amplio espectro utilizado para tratar diversas infecciones bacterianas.', stock: 60, price: 200, img:'https://media.istockphoto.com/id/1295333389/es/foto/amoxicilina.jpg?s=612x612&w=0&k=20&c=mr9mgFIk-9B7VEEdYMaMMkT03vhdn7FadpMQw-Hsv6U=' },
    { id: 4, name: 'Gasas', description: 'Las gasas son compresas de tela o material sintético utilizadas para cubrir heridas y ayudar en su curación.', stock: 10, price: 150,img: 'https://media.istockphoto.com/id/1436838760/es/foto/primeros-auxilios-envoltura-protectora-de-lesiones-y-concepto-de-vendaje-de-heridas-vendaje-de.jpg?s=612x612&w=0&k=20&c=Ghsmaph8oN43F50cuW90587nrpv8c3cu55cbP3kNZWo='},
    { id: 5, name: 'Tijeras', description: 'Las tijeras son herramientas de corte utilizadas para cortar papel, tela y otros materiales.', stock: 20, price: 300,img:'https://media.istockphoto.com/id/471367927/es/foto/medical-tijeras.jpg?s=612x612&w=0&k=20&c=9CziwTrI6jElZLgnjFvBBmBcvofPOtyj03HR_GdC2zA='},
    { id: 6, name: 'Termómetro', description: 'El termómetro es un dispositivo utilizado para medir la temperatura corporal.', stock: 30, price: 400,img:'https://media.istockphoto.com/id/1211644246/es/foto/term%C3%B3metro-m%C3%A9dico-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=gBmUXZDtgusNRLsk6JKlmCkCl1Y_m9vkJ1sxpswzbS4=' },
    { id: 7, name: 'Jeringas', description: 'Las jeringas son dispositivos médicos utilizados para inyectar líquidos en el cuerpo o extraer líquidos del cuerpo.', stock: 40, price: 500,img:'https://media.istockphoto.com/id/1297754565/es/foto/jeringa-de-pl%C3%A1stico-vac%C3%ADa-m%C3%A9dica-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=vJzqcVn02n3vj6UwZIy6WUHTm1DCDrA2-V3l2ldwayc=' },
    { id: 8, name: 'Guantes', description: 'Los guantes son prendas que cubren las manos y se utilizan para protegerlas de sustancias nocivas.', stock: 70, price: 600,img:'https://media.istockphoto.com/id/1134873108/es/foto/guantes-de-l%C3%A1tex-blanco-y-azul-aislados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=4se3LctQUq10eMKR1T_o3fRZPjwFhAfrUjam6cCveR4='},
    { id: 9, name: 'Mascarillas', description: 'Las mascarillas son dispositivos que cubren la boca y la nariz para proteger contra la inhalación de partículas nocivas.', stock: 80, price: 700,img:'https://media.istockphoto.com/id/1206385911/es/foto/m%C3%A1scara-m%C3%A9dica.jpg?s=612x612&w=0&k=20&c=t77-6aDmhMHFBy0tFUT1XgX-tYq738JoGP92FGgimq0=' },
    { id: 10, name: 'Alcohol', description: 'El alcohol es un desinfectante utilizado para limpiar heridas y superficies.', stock: 90, price: 800,img:'https://media.istockphoto.com/id/1212253684/photo/alcohol-dispenser-in-hospital.jpg?s=612x612&w=0&k=20&c=LglWYLpyDDj7BX6xm6c0BMfZa20vIUyT_V2JTUfanOo=' },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};