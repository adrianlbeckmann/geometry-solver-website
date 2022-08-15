import { useState } from "react";
export const Rechteck = (props) => {

      // states
const [side, setSide] = useState(undefined);
const [circumference, setCircumference] = useState(undefined);
const [area, setArea] = useState(undefined);

    // onclick
const onClick = () => {
    console.log({side}, {circumference}, {area})
    if(side !== undefined && side !== ''){
        console.log("side");
        setCircumference(side*4);
        setArea(side*side);
        return;
    }

    if(circumference !== undefined && circumference !== ''){
        console.log("circumference");
        setSide(circumference/4);
        setArea((circumference/4)*(circumference/4));
        return;
    }

    if(area !== undefined && area !== ''){
        console.log("area");
        const s = Math.sqrt(area);
        setSide(s);
        setCircumference(s*4);
        return;
    }
}


const handleChangeA = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}

const handleChangeU = (event) => {
    setCircumference(event.target.value)
}

const handleChangeF = (event) => {
    setArea(event.target.value)
}


    
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={() => props.navigate("main")}> Home </button>
                    <div style={{ display: "flex" }}>
                        <img src="https://d1g9li960vagp7.cloudfront.net/wp-content/uploads/2020/12/Rechteck-Herleitung-1-1024x637.png" alt="rechteck" height={"50px"} width={"100px"} />
                        <p style={{}}>2D</p>
                    </div>
                </div>
    
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <label htmlFor="nrinputqa">a = </label>
                            <input 
                            id="nrinputqa" 
                            type="number" 
                            onChange={handleChangeA}
                            value={side}/>
                        </div>
                        <div>
                        <label htmlFor="nrinputqb">b = </label>
                            <input 
                            id="nrinputqb" 
                            type="number" 
                            onChange={handleChangeA}
                            value={side}/>
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <label htmlFor="nrinputqu">U = </label>
                            <input 
                            id="nrinputqu" 
                            type="number" 
                            onChange={handleChangeU}
                            value={circumference}/>
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <label htmlFor="nrinputqf">A = </label>
                            <input 
                            id="nrinputqf" 
                            type="number" 
                            onChange={handleChangeF}
                            value={area}/>
                        </div>
                        <button onClick={onClick}>Rechnen</button>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3W4kmSRHngLoMx5Tc9mRwuBV7heGa10N4g&usqp=CAU" alt="rechteckbeispiel" height={"300px"} width={"450px"} />
                </div>            
            </div>
        
    )
}