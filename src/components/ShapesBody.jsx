export const ShapesBody = (props) => {
    return(
    <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {props.children}
        </div>
        <img src={props.imgsrc} alt={props.alt} height={"300px"} width={"300px"} />
    </div>      
    )
}

