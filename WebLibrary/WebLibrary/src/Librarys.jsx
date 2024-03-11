import JsLibrary from "./JsLibrary";



function Librarys({Library,RemoveLibrary}) {
    console.log(Library);
    return (  
        <div className="MainDiv">
            <div>
                <h2>JavaScript Library</h2>
            </div>
            <div className="CardDiv" >
                {Library.map((Library2)=>{
                    return(
                        <JsLibrary key={Library2.id} {...Library2} RemoveLibrary={RemoveLibrary}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Librarys;