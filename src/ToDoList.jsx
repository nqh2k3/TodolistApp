
import {useState} from "react"
function ToDoList(){

    const[tasks,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !=""){
            setTask(t =>[...t,newTask]);
            setNewTask("");
        }
        
    }


    function deleteTask(index){
       const updateTask = tasks.filter((_, i) => i !== index);
       setTask(updateTask);

    }

   
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
            setTask(updatedTask);
        }
    }
    return(

         
        <div className="todo-list">
            <h1>To Do List App</h1>
            

            <div>
                <input type="text" placeholder="Enter your task !" value={newTask} onChange={handleInputChange}/>
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="down-btn" onClick={() => moveTaskDown(index)}>Down</button>

                    </li>
                )}
            </ol>

        </div>
          
       
    );
}

export default ToDoList