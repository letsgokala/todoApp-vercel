import React, {useState} from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';

function EditTodo({todo}){
    const [description , setDescription] = useState(todo.description)

    async function updateDescription(e){
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/todo/${todo.id}` , {
                description:description
            })
            window.location = "/"
            console.log(response);
            
        } catch (err) {
            console.error(err.message);        
        }
    }
    return (
    <>
        
<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.id}`}>
  <EditIcon/>
</button>


<div className="modal fade" id={`id${todo.id}`}>
  <div className="modal-dialog" onClick={() => setDescription(todo.description)}>
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal"
            onClick={() => setDescription(todo.description)}></button>
      </div>

      
      <div className="modal-body">
        <input 
            type="text" 
            className="form-control" 
            value={description || ""} 
            onChange={e => setDescription(e.target.value)}/>
      </div>

      
      <div className="modal-footer">
        <button 
            type="button" 
            className="btn btn-warning" 
            data-bs-dismiss="modal" 
            onClick={e => updateDescription(e)}><EditIcon /></button>
        <button 
            type="button" 
            className="btn btn-danger" 
            data-bs-dismiss="modal" 
            onClick={() => setDescription(todo.description)}
            >Close
        </button>
      </div>

    </div>
  </div>
</div>
    </>

)
}

export default EditTodo;