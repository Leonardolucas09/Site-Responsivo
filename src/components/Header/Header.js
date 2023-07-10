import menu from "../assets/menu.png"
import { PrimeiroMenu } from "./styles"
import { BotaoNavegacao } from "./styles"


function Header(props) {

    const handlePageChange = ()=>(
        props.pagina()
    )

    return(
        <PrimeiroMenu>
            <BotaoNavegacao onClick={handlePageChange}>
                <img src={props.imgPrimeira}/>
            </BotaoNavegacao>

            <BotaoNavegacao>
                <img src={props.imgSegunda}/>
            </BotaoNavegacao>
        </PrimeiroMenu>
    )
}

export default Header