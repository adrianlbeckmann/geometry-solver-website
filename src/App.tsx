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

export const App = () => {
  const [page, setPage] = useState("main");

  switch (page) {
    case "main": return <Main navigate={setPage} />;
    case "quadrat":  return <Quadrat navigate={setPage} />;
    case "rechteck": return <Rechteck navigate={setPage} />;
    case "kreis": return <Kreis navigate={setPage} />;
    case "dreieck": return <Dreieck navigate={setPage} />;
    case "wuerfel": return <Wuerfel navigate={setPage} />;
    case "quader": return <Quader navigate={setPage} />;
    case "kugel": return <Kugel navigate={setPage} />;
    case "pyramide": return <Pyramide navigate={setPage} />;
    default: return null;
  }
}
