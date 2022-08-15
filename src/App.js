import React, { useState } from "react";
import { Main } from "./pages/main";
import { Quadrat } from "./pages/quadrat";
import { Rechteck } from "./pages/rechteck";
import { Kreis } from "./pages/kreis";
import { Dreieck } from "./pages/dreieck";
import { Wuerfel } from "./pages/wuerfel";
import { Quader } from "./pages/quader";
import { Kugel } from "./pages/kugel";
import { Pyramide } from "./pages/pyramide";

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
