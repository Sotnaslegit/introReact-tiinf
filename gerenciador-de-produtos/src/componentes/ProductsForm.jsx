import { useEffect, useState } from "react"

export default function ProductForm(selectedProduct){
    const [name, setName] = useState ('')
    const [price, setPrice] = useState ('')
    useEffect(()=>{
        if(selectedProduct){
            setName(selectedProduct.name)
            setPrice(selectedProduct.price)
        }
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        onmouseleave({
            id:selectedProduct?.id,
            name,
            price:parseFloat(price)
        })
    }
    return(
        <form>
        <input
        type="text"
        placeholder="Nome do Produto"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        required
        />
        <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        required
        />
        <button type="submit">
            {selectedProduct ? 'Atualizar' : 'Adicionar'}
        </button>
        </form>
    )
}