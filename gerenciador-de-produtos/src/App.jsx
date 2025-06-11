import './App.css'
import ProductList from './componentes/ProductList'
import ProductForm from './componentes/ProductsForm'

function App() {

  return (
    <>
      <div className="App">
        <h1>Gerenciador de Produtos</h1>
        <ProductForm />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </>
  )
}

export default App
