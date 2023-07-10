import Card from "../../components/Card/Card.js"
import Header from "../../components/Header/Header.js"
import Navegar from "../../components/Navegar/Navegar.js"
import TituloHeader from "../../components/TituloHeader/TituloHeader.js"
import menu from "../../components/assets/menu.png"
import lupa from "../../components/assets/search.png"
import { SectionCard } from "./styles.jsx"

function Home(props) {

    return(
        <>
            <Header
            pagina={props.pagina}
            imgPrimeira={menu}
            imgSegunda={lupa}
            />
            <TituloHeader/>

            <Navegar/>

            <SectionCard>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </SectionCard>

        </>
    )
}

export default Home