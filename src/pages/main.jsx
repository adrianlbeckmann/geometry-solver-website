import React from "react";

export const Main = (props) => {

    return(
        <div style={{textAlign: "center" }}>
            <h1>GEOMETRY SOLVER</h1>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p style={{margin:"20px"}}>2D </p>
                <button onClick={() => props.navigate("quadrat")} style={{margin:"20px", }}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/800px-Regular_quadrilateral.svg.png"} alt= "Quadrat" width={"100px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("rechteck")} style={{margin:"20px"}}><img src={"https://d1g9li960vagp7.cloudfront.net/wp-content/uploads/2020/12/Rechteck-Herleitung-1-1024x637.png"} alt= "Rechteck" width={"150px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("Kreis")} style={{margin:"20px"}}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl-ZBYtiyWHL99pGVMzOdiqVqRADjdFLzPBWlJLM3V0Tm_23VkoZy5HIDZthvzohnOsU&usqp=CAU"} alt= "Kreis" width={"100px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("Dreieck")} style={{margin:"20px"}}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"} alt= "Dreieck" width={"100px"} height= {"100px"}/></button>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p style={{margin:"20px"}}>3D</p>
                <button onClick={() => props.navigate("würfel")} style={{margin:"20px"}}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/220px-Simpele_kubus.svg.png"} alt= "Würfel" width={"100px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("quader")} style={{margin:"20px"}}><img src={"http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/192413_orig.png"} alt= "Quader" width={"150px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("kugel")} style={{margin:"20px"}}><img src={"https://www.mathespass.at/klasse4/bilder/kugel.jpg"} alt= "Kugel" width={"100px"} height= {"100px"}/></button>
                <button onClick={() => props.navigate("pyramide ")} style={{margin:"20px"}}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN1vmdu1tb9gFjz57hO5NFO4mgjqlEYRTM75K2luhMSR_0sq7hT3uvWRdW83HMHpeeFM&usqp=CAU"} alt= "Pyramide" width={"100px"} height= {"100px"}/></button>
            </div>  
        </div>
    )
}