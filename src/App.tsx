import React, { useState } from "react";
import { Main } from "./pages/Main";
import { Quadrat } from "./pages/Quadrat";
import { Rechteck } from "./pages/Rechteck";
import { Kreis } from "./pages/Kreis";
import { Dreieck } from "./pages/Dreieck";
import { Wuerfel } from "./pages/Wuerfel";
import { Quader } from "./pages/Quader";
import { Kugel } from "./pages/Kugel";
import { Pyramide } from "./pages/Pyramide";
import { ShapeData, ShapeVariant } from './types/Shapetypes';
import { Shape } from "./pages/Shape";

const shapes: ShapeData<ShapeVariant>[] = [
  {
    name: "quadrat",
    data: { a: null, u: null, f: null },
    calculate: () => {}
  },
  {
    name: "quadrat",
    data: { a: null, u: null, f: null },
    calculate: () => {}
  },
  {
    name: "quadrat",
    data: { a: null, u: null, f: null },
    calculate: () => {}
  },
  {
    name: "quadrat",
    data: { a: null, u: null, f: null },
    calculate: () => {}
  }
];

export const App = () => {
  // Die aktuelle Seite.
  const [page, setPage] = useState("main");
  // Wenn die actuelle Seite Main ist zeigen wir Main an.
  if (page === "main") return <Main navigate={setPage} />;
  // Wenn nicht, suchen wir in dem 'shapes' Array das Shapelement mit dem Namen der aktuellen Seite.
  const currentShapeData = shapes.find((val: ShapeData<ShapeVariant>) => { return val.name === page });
  // Wenn es KEIN Element mit dem Namen gibt, zeigen wir Main an.
  if (currentShapeData == undefined) return <Main navigate={setPage} />;
  // Ansonsten zeigen wir Shape an mit dem Element als prop.
  return <Shape data={currentShapeData} />
}
