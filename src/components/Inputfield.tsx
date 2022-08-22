import React from "react";

export const Inputfield = (props) => {
    return (
     <div style={{display: "flex", margin: "20px"}}>
         <label
            htmlFor= {props.id}
        >
            {props.label}
        </label>
         <input
            id={props.id} 
            type={props.type}
            onChange={props.onChange}
            value={props.value} 
            placeholder={props.placeholder}
         />
     </div>
    )
}
