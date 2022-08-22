import React from "react"

export const ShapesHeader = (props) => {
    return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => props.navigate("main")}> Home </button>
        <div style={{ display: "flex" }}>
            <img src={props.imgsrc} alt={props.alt} height={"50px"} width={"50px"} />
            <label>{props.dimension}</label>
        </div>
    </div>
    )
}
