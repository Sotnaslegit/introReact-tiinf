import './App.css'
import ProductList from './componentes/ProductList'
import ProductForm from './componentes/ProductsForm'
import {addProduct, deleteProduct, getProducts, updateProduct} from '../services/api'
import { useEffect, useState } from 'react'

function App() {
  const[products, setProducts] = useState([])

  const[selectedProduct, setSelectedProduct] = useState(null)

  const loadProducts = async()=>{
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(()=>{
    loadProducts()
  },[])

  const handleSave = async(product) => {
    if(product.id){
      await updateProduct(product)
    } else{
      await addProduct(product)
    }
  }

  const handleDelete = async(id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar?")
    if(!confirmDelete) return;
    await deleteProduct(id)
    loadProducts()
  }

  return (
    <>
      <div className="App">
        <h1>Gerenciador de Produtos</h1>
        <ProductForm onSave={handleSave} selectedProduct ={selectedProduct}/>
        <ProductList products={products} onDelete={handleDelete} onEdit={setSelectedProduct}/>
      </div>
    </>
  )
}

export default App
