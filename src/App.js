import { useState } from "react";
import Home from "./page/Home/Home";
import StyledGlobal, {CorFundo} from "./styledGlobal";
import { useState } from "react";
import Details from "./page/Details/Details";

function App() {
  const [trocarDePagina,setTrocarDePagina] = useState()

const changePage = (change) =>(
  setTrocarDePagina(change)
)

  return (
    <>
    <CorFundo>

    <StyledGlobal/>
    {trocarDePagina === "0" ? (
      <Home pagina={() => changePage("0")}/>
    ) : (
      <Details pagina={() => changePage("1")}/>
    )}



    </CorFundo>
    </>
  );
}

export default App;
