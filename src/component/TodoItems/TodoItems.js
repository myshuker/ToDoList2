import React from 'react';
import './TodoItems'

const TodoItems = (props)=>{
    const {items, deleteItem} = props;
    let length = items.length;
    const listItem = length ? ( items.map(item =>{
            return(
               <div key={item.id}>               
                    <li>
                     <span className="description">{item.description}</span>  
                      <span className="checkbox"> <input type="checkbox" /></span>
                      <span> <button className="button" onClick={() => deleteItem(item.id)}>Delete</button></span> 
                    </li>
               </div>
            )
        })
    ) : <p>No item to show</p>
return(
    <div className="listItems">
            {listItem}       
    </div>
    )
}

export default TodoItems;
