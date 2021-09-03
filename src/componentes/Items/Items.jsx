
import Item from "../item/Item";



 const Items =({productos})=>productos.map((p)=><Item key ={p.id} p={p}/>)

 export default Items