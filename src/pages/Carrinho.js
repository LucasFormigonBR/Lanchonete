import { useCarrinhoContext } from '../shared/contexts/CarrinhoContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar"
import logo from '../images/ham-ico.png'
import ProductLine from '../components/ProductLine'
import styleProperties from '../shared/styleProperties.json'
import { useContext } from 'react'
import { UsuarioContext } from '../shared/contexts/UsuarioContext'

//import items from '../shared/mock/shoppingcart.json'

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60vw;
    padding: 10px;
    & h1 {
        text-align: center;
        color: ${styleProperties.primaryDarkColor};
    }
`

const Sumary = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${styleProperties.lightColor};
    border: 2px solid ${styleProperties.primaryDarkColor};
    border-radius: 10px;
    padding: 5px;
    color: ${styleProperties.primaryDarkColor};
    font-weight: bolder;
    & span {
        margin-left: auto;
    }
`

const Button = styled.button`
        font-size: larger;
        color: white;
        background: green;
        border-radius: 5px;
        border: none;
`

const Carrinho = () => {
    const {carrinho, removeAllItem} = useCarrinhoContext()
    const {saldo, setSaldo} = useContext(UsuarioContext)

    let sum = 0
    let producs = 0
    var idProducs = []

    carrinho.forEach(product => {
        sum += product.price * product.qtd
        producs += product.qtd
    })

    function validarSaldo () {
        if(saldo >= sum && producs > 0) {
            alert("Compra concluída com sucesso!")
            setSaldo(saldo - sum)
            carrinho.forEach(product => {
                removeAllItem(product)
            })
            
        } else if(producs === 0 ){
            alert("Nenhum produto selecionado. Selecione um produto")
        } else {
            alert("Saldo insuficiente")
        }
    }

    return (
        <>
        <NavBar title="Larika" logo={logo}>
                <Link to="/">Início</Link>
                <Link to="/cardapio">Cardápio</Link>
        </NavBar>
        <MainContainer>
            <h1>Carrinho de Compras</h1>

            {carrinho.map(product => (
                <ProductLine {...product} key={product.id} />
            ))}

            <Sumary>
                Total
                <span>R$ {Number.parseFloat(sum).toFixed(2)}</span>
            </Sumary>
            <br />
            <Button onClick={() => validarSaldo()}>Confirmar Compra</Button>
        </MainContainer>
        </>
    )
}

export default Carrinho