import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import styleProperties from '../shared/styleProperties.json'
import { UsuarioContext } from "../shared/contexts/UsuarioContext"
import { useContext } from 'react'

const MainPannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${styleProperties.primaryColor};
    width: 100vw;
    height: 100vh;
    color: ${styleProperties.primaryDarkColor};
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 10px;
    font-size: larger;
    * {
        margin: 5px;
    }
    & h1 {
        text-align: center;
    }
    & input {
        font-size: larger;
        background: transparent;
        border-width: 0 0 1px;
        border-bottom: solid ${styleProperties.primaryDarkColor};
        color: ${styleProperties.primaryDarkColor};
    }
    & input:focus {
        outline: none;
        border-bottom: solid ${styleProperties.secondaryColor};
    };
    & button {
        font-size: larger;
        color: ${styleProperties.primaryColor};
        background: ${styleProperties.primaryDarkColor};
        border-radius: 5px;
        border: none;
    }
    & button:hover {
        color: ${styleProperties.lightColor};
    }
`

const Home = () => {
    const navigate = useNavigate()
    const { nome, saldo, setNome, setSaldo } = useContext(UsuarioContext)
    return (
        <MainPannel>
            <FormContainer>
                <h1>Insira os dados para iniciar a seção</h1>
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label>Saldo</label>
                <input type="number" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
                <button onClick={() => {navigate("/cardapio")}}>Avançar</button>
            </FormContainer>
        </MainPannel>
    )
}

export default Home

