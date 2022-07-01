import { useState, useEffect } from 'react'
import { useCarrinhoContext } from "../shared/contexts/CarrinhoContext"
import styled from "styled-components"
import styleProperties from '../shared/styleProperties.json'
import icoHamburger from '../images/hamburger-cartoon.png'
import icoHotDog from '../images/hotdog-cartoon.png'
import icoSnack from '../images/snacks-cartoon.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    margin: 10px;
`

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${styleProperties.primaryColor};
    border-radius: 10px 10px 0 0;
    padding: 5px;
    font-weight: bolder;
    color: ${styleProperties.secondaryColor};
    font-size: x-large;
    & img {
        height: 32px;
        border-radius: 10px;
    }
    & div {
        display: flex;
        width: 125px;
        align-items: center;
        margin-left: auto;
        padding-right: 10px;
        justify-content: space-between;
    }
    & span {
        height: 32px;
        width: 40px;
        background-color: ${styleProperties.lightColor};
        border-radius: 25%;
        text-align: center;
        color: ${styleProperties.primaryDarkColor};
        font-weight: bold;
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

const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid ${styleProperties.primaryColor};
    & img {
        max-width: 50%;
    }
    & ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: auto 0;
        color: ${styleProperties.darkColor};
        font-weight: bolder;
    }
`

const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: ${styleProperties.primaryColor};
    border-radius: 0 0 10px 10px;
    padding: 5px;
    font-weight: bolder;
    color: ${styleProperties.secondaryColor};
    font-style: italic;
`

const ProductCard = ({ id, name, price, img, type, items }) => {

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

    const {addItem, carrinho, removeItem} = useCarrinhoContext()

    const [qtdItem, setQtdItem] = useState(0)

    useEffect(() => {
        const prod = carrinho.find(i => i.id === id)
        if(prod)
            setQtdItem(prod.qtd)
        else 
        setQtdItem(0)
    }, [carrinho])
 
    return (
        <Container>
            <ContainerHeader>
                <img src={icon} alt='Icon' />
                {name}
                <div>
                    <button onClick={() => addItem({ id, name, price, img, type, items })}>+</button>
                    <span>{qtdItem}</span>
                    <button onClick={() => removeItem(id)} >-</button>
                </div>
            </ContainerHeader>
            <ContainerMain>
                <img src={img} alt="Imagem do produto" />
                <ul>
                    {items.map(item => (<li>{item}</li>))}
                </ul>
            </ContainerMain>
            <ContainerFooter>
                R$ {Number.parseFloat(price).toFixed(2)}
            </ContainerFooter>
        </Container>
    )
}

export default ProductCard