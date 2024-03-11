import TaskShow from "./TaskShow";

function TaskList({PropsTask,onDelete}) {
    return (
        <div className="Task-List">
          {PropsTask.map((Task1,index)=>{
            return(
              <TaskShow key={index} Task1={Task1} onDelete={onDelete}/>
            )
          })}
        </div>
      );
}

export default TaskList;