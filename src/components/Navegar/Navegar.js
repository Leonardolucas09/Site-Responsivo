import filtro from "../assets/filtro.png"
import { ContainerNav } from "./styles"
import Botao from "../Botao/Botao.js"

function Navegar(){

    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"Bomboloni"}/>
            <img src={filtro} alt=""/>

        </ContainerNav>

    )
}

export default Navegar;