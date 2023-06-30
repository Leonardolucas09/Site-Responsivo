import Header from "./components/Header/Header";
import Details from "./page/Details/Details";
import Home from "./page/Home/Home";
import StyledGlobal, {CorFundo} from "./styledGlobal";

function App() {
  return (
    <>
    <CorFundo>
    <StyledGlobal/>
    <Header/>
    <Home/>
    <Details/>
    </CorFundo>
    </>
  );
}

export default App;
