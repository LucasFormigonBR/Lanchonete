import { createContext, useState } from "react"

const UsuarioContext = createContext()
UsuarioContext.displayName = "Usuário"

const UsuarioContextProvider = ( {children} ) => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    return (
        <UsuarioContext.Provider value={{nome, saldo, setNome, setSaldo}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioContextProvider }