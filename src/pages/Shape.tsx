import React, { useState } from "react";
import { ShapeData, ShapeVariant } from "../types/Shapetypes";
import { Navigatable } from "./Main";
import { ShapesHeader } from '../components/ShapesHeader';
import { ShapesBody } from '../components/ShapesBody';
import { Inputfield } from '../components/Inputfield';

interface ShapeProps extends Navigatable {
    shapedata: ShapeData<ShapeVariant>;
}
export const Shape: React.FC<ShapeProps> = ({ shapedata, navigate }) => {
    // save data
    const [data, setData] = useState<ShapeVariant>(shapedata.data);

    // Wir holen uns die Keys aus dem shapedata.data object als array.
    const keys = Object.keys(shapedata.data);

    // show data
    return (
        <div>
            <ShapesHeader navigate={navigate} />
            <ShapesBody>
                {
                    keys.map((key, index) => <Inputfield
                        label={key + " = "}
                        key={key + index}
                        type="number"
                        placeholder=""
                        onChange={() => {}}
                        value={}
                    />)
                }
                <button onClick={shapedata.calculate}>Rechnen</button>
            </ShapesBody>
        </div>
    )
}