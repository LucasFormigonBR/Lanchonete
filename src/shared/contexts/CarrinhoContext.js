import { createContext, useContext , useState } from "react"

const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

const CarrinhoContextProvider = ( {children} ) => {
    const [carrinho, setCarrinho] = useState([])
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    function addItem(item) {
        const produto = carrinho.find(i => i.id === item.id)       
        if(!produto) {
            item.qtd = 1
            setCarrinho(prevCarrinho => [...prevCarrinho, item])
        } else {
            setCarrinho(carrinho.map(p => {
                if(p.id === item.id)
                    p.qtd += 1
                return p
            }))
        }
    }

    function removeItem(id) {
        const produto = carrinho.find(i => i.id === id)
        if(produto) {
            if(produto.qtd === 1) {
                setCarrinho(prevCarrinho => prevCarrinho.filter(itemCarrinho => itemCarrinho.id !== id))
            } else {
                setCarrinho(carrinho.map(itemDoCarrinho => {
                    if(itemDoCarrinho.id === id)
                        itemDoCarrinho.qtd -= 1
                    return itemDoCarrinho
                }))
            }
        }
    }

    function removeAllItem(item) {
        const produto = carrinho.find(p => p.id === item.id)
        if(produto) {
                setCarrinho(prevCarrinho => prevCarrinho.filter(itemCarrinho => itemCarrinho.qtd !== item.qtd))
        }
    }

    return { carrinho, setCarrinho, addItem, removeItem, removeAllItem }
}

export { CarrinhoContext, CarrinhoContextProvider, useCarrinhoContext }