import React, {useState} from "react";
import { Main } from "./pages/main";
import { Quadrat } from "./pages/quadrat";
import { Rechteck } from "./pages/rechteck";
import { Kreis } from "./pages/kreis";
import { Dreieck } from "./pages/dreieck";
import { Würfel } from "./pages/würfel";
import { Quader } from "./pages/quader";
import { Kugel } from "./pages/kugel";
import { Pyramide } from "./pages/pyramide";

function App() {
  const [page, setPage] = useState("main"); 
  if (page === "main") {
    return (<Main navigate={setPage} />)
  }

if (page === "quadrat") {
  return( <Quadrat navigate={setPage}/>) 
}

if (page === "rechteck") {
  return( <Rechteck navigate={setPage}/>)
}

if (page === "kreis") {
  return( <Kreis navigate={setPage}/>)
}

if (page === "dreieck") {
  return( <Dreieck navigate={setPage}/>)
}

if (page === "würfel") {
  return( <Würfel navigate={setPage}/>)
}

if (page === "quader") {
  return( <Quader navigate={setPage}/>)
}

if (page === "kugel") {
  return( <Kugel navigate={setPage}/>)
}

if (page === "pyramide") {
  return( <Pyramide navigate={setPage}/>)
}

  return null;
}

export default App;
