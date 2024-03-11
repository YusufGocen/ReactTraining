function JsLibrary({id,content,title,RemoveLibrary}) {
  

    return (  
        <div className="Card">
            <div className="Title">
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
            <button className="delete" onClick={()=>RemoveLibrary(id)}>Delete</button>
        </div>
    );    

}

export default JsLibrary;   
