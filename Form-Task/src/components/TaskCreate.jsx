import { useState } from "react";

function TaskCreate({onCreate}) {
    const [Title, setTitle] = useState('');
    const [TaskDesc, setTaskDesc] = useState('');

    const HandleChange=(event) => {
      setTitle(event.target.value);
    }
    const HandleTaskChange=(event) => {
        setTaskDesc(event.target.value);
    }
    const HandleSubmit=(event) => {
        event.preventDefault();
        onCreate(Title,TaskDesc);
        setTitle('');
        setTaskDesc('');
    }
    return (  
        <div className="TaskCreate1">
            <h2>Please Add a Task</h2>
            <form className="TaskForm" onSubmit={HandleSubmit}>
                <label className="form-label">Title</label>
                <input value={Title} onChange={HandleChange} className="form-input" />
                <label className="form-label">Enter The Task</label>
                <textarea value={TaskDesc} onChange={HandleTaskChange} className="form-input" rows={5}/>
                <button className="form-button">Create</button>
            </form>
        </div>
    );
}

export default TaskCreate;