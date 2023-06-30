import menu from "../assets/menu.png"
import { PrimeiroMenu } from "./styles"
import { BotaoNavegacao } from "./styles"


function Header() {
    return(
        <PrimeiroMenu>
            <BotaoNavegacao>
                <img src={menu}/>
            </BotaoNavegacao>

            <BotaoNavegacao>
                <img src={menu}/>
            </BotaoNavegacao>
        </PrimeiroMenu>
    )
}

export default Header