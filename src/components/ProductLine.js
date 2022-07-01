import { useCarrinhoContext } from "../shared/contexts/CarrinhoContext"
import styled from "styled-components"
import styleProperties from '../shared/styleProperties.json'
import icoHamburger from '../images/hamburger-cartoon.png'
import icoHotDog from '../images/hotdog-cartoon.png'
import icoSnack from '../images/snacks-cartoon.png'

const LineContainer = styled.div`
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${styleProperties.lightColor};
    border: 2px solid ${styleProperties.primaryDarkColor};
    border-radius: 10px;
    padding: 5px;
    font-weight: bolder;
    color: ${styleProperties.primaryDarkColor};
    & img {
        height: 32px;
        border-radius: 10px;
        margin-right: 10px;
    }
`

const ItemDefinition = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
`

const ItemValues = styled.div`
    align-items: center;
    margin-left: auto;
    & span {
        margin-left: 20px;
    }
`

const ItemController = styled.div`
        display: flex;
        width: 125px;
        align-items: center;
        margin-left: auto;
        padding-right: 10px;
        justify-content: space-between;
    & span {
        text-align: center;
        color: ${styleProperties.primaryDarkColor};
        font-weight: bolder;
    }
    & button {
        border-radius: 50%;
        background-color: transparent;
        border: none;
        font-size: large;
        font-weight: bolder;
        width: 32px;
        height: 32px;
        color: ${styleProperties.primaryDarkColor};
    }
    & button:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    & button:active {
        color: ${styleProperties.secondaryColor};
    }
`

const ProductLine = ( { id, name, price, type, items, qtd }) => {
    const {addItem, removeItem} = useCarrinhoContext()

    let icon = null
    switch(type) {
        case 'hamburger':
            icon = icoHamburger
            break
        case 'hot-dog':
            icon = icoHotDog
            break
        case 'snack':
            icon = icoSnack
            break
        default:
            icon = null
    }

    return (
        <LineContainer>
            <ItemDefinition>
                <img src={icon} alt="icon" />
                {name}
            </ItemDefinition>
            <ItemValues>
                <span>R$ {Number.parseFloat(price).toFixed(2)}</span>
                <span>R$ {Number.parseFloat(qtd * price).toFixed(2)}</span>
            </ItemValues>
            <ItemController>
                <button onClick={() => addItem({ id, name, price, type, items})} >+</button>
                <span>{qtd}</span>
                <button onClick={() => removeItem(id)} >-</button>
            </ItemController>
        </LineContainer>
    )
}

export default ProductLine