import React from "react";
 function Child(props){
    return (
        <div>
            
            <h2>{props.name}</h2>
            <p>city:{props.city}</p>
            <p>Age:{props.age}</p>
        </div>
    );
 }

 export default Child;