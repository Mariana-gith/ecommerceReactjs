

const productos = [
    {id: 1, nombre :" Sx Les Paul", descripcion: "Guitarra Eléctrica Sx Les Paul Ee3-j Para Zurdo", price:44.955, img:"https://http2.mlstatic.com/D_NQ_NP_653528-MLA45874507725_052021-O.webp"},
    {id: 2, nombre :"Ibanez Sr500e", descripcion: "Bajo Eléctrico 4c Ibanez Brown Mahogany Bartolini", price:158.400, img:"https://http2.mlstatic.com/D_NQ_NP_816575-MLA45977666637_052021-O.webp"},
    {id: 3, nombre :" Telecaster Alder", descripcion: "Guitarra electroacústica Fender California Redondo Player", price:90000, img:"https://http2.mlstatic.com/D_NQ_NP_982991-MLA45185224875_032021-O.webp"},
    {id: 4, nombre :"Fender California", descripcion:"Guitarra electroacústica Fender California Redondo Player", price:20000, img:"https://http2.mlstatic.com/D_NQ_NP_833099-MLA43654089614_102020-O.webp"},
    {id: 5, nombre :" Telecaster Alder", descripcion: "Guitarra electroacústica Fender California Redondo Player", price:90000, img:"https://http2.mlstatic.com/D_NQ_NP_982991-MLA45185224875_032021-O.webp"},
    {id: 6, nombre :"Ibanez Sr500e", descripcion: "Bajo Eléctrico 4c Ibanez Brown Mahogany Bartolini", price:158.400, img:"https://http2.mlstatic.com/D_NQ_NP_816575-MLA45977666637_052021-O.webp"},
  ]
  
  export const mostrar = new Promise ((resolve)=>{ 
    setTimeout(() => {
      resolve(productos)      
    }, 3000);
})