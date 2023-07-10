import Header from "../../components/Header/Header.js"
import seta from "../../components/assets/seta.png"
import ponto from "../../components/assets/ponto.png"
import group from "../../components/assets/group.png"
import { BotaoAddCard, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from "./styles"
import donutGrande from "../../components/assets/Frame 9.png"

function Details(props) {
    return(
        <>
        <Header
        pagina={props.pagina}
        imgPrimeira={seta}
        imgSegunda={ponto}
        />

        <ContainerDetalhes>
            <ImagemGrande src={donutGrande}/>

            <ContainerDiv>
                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                
                <TextoDonuts>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus tellus a tortor dapibus, in venenatis justo vestibulum.
                </TextoDonuts>

                <MaisProdutos>
                    <img src={group}/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Need More?</TextMore>
                    <BotaoAddCard>Add More</BotaoAddCard>
                    
                </MaisProdutos>

                    <BotaoAddCard>Add to cart</BotaoAddCard>

            </ContainerDiv>
        </ContainerDetalhes>
        </>
    )
}

export default Details