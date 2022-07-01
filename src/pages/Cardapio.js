import styled from "styled-components"
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar"
import logo from '../images/ham-ico.png'
import ProductCard from "../components/ProductCard"

import products from '../shared/mock/products.json'

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60vw;
    padding: 10px;
`

const Cardapio = () => {
    return (
        <>
            <NavBar title="Larika" logo={logo}>
                <Link to="/">Início</Link>
                <Link to="/cardapio">Cardápio</Link>
            </NavBar>
            <MainContainer>
            {products.map(product => (
                <ProductCard {...product} key={product.id} />
            ))}
            </MainContainer>
        </>
    )
}

export default Cardapio