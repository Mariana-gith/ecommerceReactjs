
import Item from "../item/Item";



 const Items =({producto})=>producto.map((p)=><Item key ={p.id} p={p}/>)

 export default Items