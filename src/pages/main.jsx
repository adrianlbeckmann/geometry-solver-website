import React from "react";


export const Main = () => {

    return(
        <div style={{textAlign: "center"}}>
            <h1>GEOMETRY SOLVER</h1>
            <div style={{display: "flex"}}>
                <p style={{margin:"20px"}}>2D </p>
                <button style={{margin:"20px"}}></button>
                <button style={{margin:"20px"}}></button>
                <button style={{margin:"20px"}}></button>
            </div>
            <div style={{display: "flex"}}>
                <p style={{margin:"20px"}}>3D</p>
                <button style={{margin:"20px"}}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/220px-Simpele_kubus.svg.png"} alt= "Würfel"/></button>
                <button style={{margin:"20px"}}><img src={"http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/192413_orig.png"} alt= "Quader"/></button>
                <button style={{margin:"20px"}}><img src={"https://www.mathespass.at/klasse4/bilder/kugel.jpg"} alt= "Kugel"/></button>
                <button style={{margin:"20px"}}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN1vmdu1tb9gFjz57hO5NFO4mgjqlEYRTM75K2luhMSR_0sq7hT3uvWRdW83HMHpeeFM&usqp=CAU"} alt= "Pyramide"/></button>
            </div>  
        </div>
    )
}