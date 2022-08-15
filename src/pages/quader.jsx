import { useState } from "react";
export const Quader = (props) => {

      // states
const [side, setSide] = useState(undefined);
const [surface, setSurface] = useState(undefined);
const [volume, setVolume] = useState(undefined);
const [side2, setSide2] = useState(undefined);
const [side3, setSide3] = useState(undefined);

    // onclick
const onClick = () => {
    const hasA = side !== undefined && side !== '';
    const hasB = side2 !== undefined && side2 !== '';
    const hasU = surface !== undefined && surface !== '';
    const hasArea = volume !== undefined && volume !== '';

    if (hasA && hasB){
        setSurface((2*side)+(2*side2));
        setVolume(side*side2);
    }
    if (hasA && hasU){
        setSide2((surface-2*side)/2);
        setVolume(side*((surface-2*side)/2));
    }
    if (hasB && hasU){
        setSide((surface-2*side2)/2);
        setVolume(side2*((surface-2*side2)/2));
    }
    if (hasA && hasArea){
        setSide2(volume/side);
        setSurface((2*side)+(2*(volume/side)));
    }
    if (hasB && hasArea){
        setSide(volume/side2);
        setSurface((2*side2)+(2*(volume/side2)));
    }
    
    console.error("a oder b angeben");
    






    console.log({side}, {surface}, {volume})
    if(hasA || hasB){
        console.log("side");
        setSurface((2*side)+(2*side2));
        setVolume(side*side2);
        return;
    }

    if(surface !== undefined && surface !== '' && (side !== undefined || side2 !== undefined)){
        console.log("surface");
        setSide((surface/2)-side2);
        setVolume((surface/4)*(surface/4));
        return;
    }

    if(volume !== undefined && volume !== ''){
        console.log("volume");
        const s = Math.sqrt(volume);
        setSide(s);
        setSurface(s*4);
        return;
    }
}


const handleChangeA = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}

const handleChangeB = (event) => {
    setSide2(event.target.value)
}

const handleChangeC = (event) => {
setSide3(event.target.value)
}

const handleChangeS = (event) => {
    setSurface(event.target.value)
}

const handleChangeV = (event) => {
    setVolume(event.target.value)
}


    
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={() => props.navigate("main")}> Home </button>
                    <div style={{ display: "flex" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Quader.svg/1280px-Quader.svg.png" alt="quader" height={"50px"} width={"100px"} />
                        <p style={{}}>3D</p>
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
                        <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqb">b = </label>
                            <input 
                            id="nrinputqb" 
                            type="number" 
                            onChange={handleChangeB}
                            value={side2}/>
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqc">c = </label>
                            <input 
                            id="nrinputqc" 
                            type="number" 
                            onChange={handleChangeC}
                            value={side3}/>
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <label htmlFor="nrinputqu">O = </label>
                            <input 
                            id="nrinputqu" 
                            type="number" 
                            onChange={handleChangeS}
                            value={surface}/>
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <label htmlFor="nrinputqf">V = </label>
                            <input 
                            id="nrinputqf" 
                            type="number" 
                            onChange={handleChangeV}
                            value={volume}/>
                        </div>
                        <button onClick={onClick}>Rechnen</button>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cuboid_abcd.svg/640px-Cuboid_abcd.svg.png" alt="quaderbeispiel" height={"300px"} width={"450px"} />
                </div>            
            </div>
        )
}