export const Quadrat = (props) => {
    return(
    <div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <button onClick={() => props.navigate("main")}> Home </button>
            <div style={{display: "flex"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/800px-Regular_quadrilateral.svg.png" alt="quadrat" height={"50px"} width={"50px"}/>
            <p style={{}}>2D</p>
            </div>
        </div>
        

        <div>
            <div style={{display: "flex",flexDirection: "column"}}>
                <div style={{display: "flex", margin: "20px"}}>
                <label htmlFor="nrinputqa">a = </label>
                <input id="nrinputqa" type="number" />
                </div>
                <div style={{display: "flex", margin: "20px"}}>
                <label htmlFor="nrinputqb">b = </label>
                <input id="nrinputqb" type="number" />
                </div>
            </div>
        </div>
     </div>

    )
}