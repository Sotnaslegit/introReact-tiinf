const BASE_URL = "http://localhost:3000/products"

//GET

export const getProducts = ()=> fetch(BASE_URL).then(res => res.json)

//POST

export const addProduct = (product) =>
    fetch(BASE_URL,{
        method:"POST",
        header: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(product)
    })

//PUT

export const updateProduct = (product) =>
    fetch(`${BASE_URL}/${product.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json"
        },
        body:JSON.stringfy(product)
    }).then(res => res.json())

//DELETE

export const deleteProduct = (id) =>{
    return fetch(`${BASE_URL}/${id}`,{
        method:"DELETE"
    })
}