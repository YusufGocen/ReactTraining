function TaskShow({Task1,onDelete}) {
    const DeleteClick=() => {
      onDelete=(Task1.id)
    }
    console.log(Task1)
    return (  
        <div className="Task-Show">
            <h1 className="TaskTitle">Task</h1>
            <p>{Task1.Title}</p>
            <h1 className="TaskTitle">description</h1>
            <p>{Task1.TaskDesc}</p>
            <div className="Button">
                <button className="delete" onClick={DeleteClick}>Delete</button>
                <button className="update">Update</button>
            </div>
        </div>
    );
}

export default TaskShow;