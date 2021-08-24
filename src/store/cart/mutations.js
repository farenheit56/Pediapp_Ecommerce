
export function PushCartProduct(state,product) {
    let alreadyInList = false
    let index = null
    for(const [i,productListed] of state.cartProducts.entries()){
        if(productListed.id == product.id){
            index = i            
            alreadyInList = true
            break
        }
    }
    if(!alreadyInList){
        product.partialPrice = product.quantitySelected * product.price
        state.cartProducts.push(product)
        
    } else{
        state.cartProducts[index].quantitySelected = state.cartProducts[index].quantitySelected + product.quantitySelected
        state.cartProducts[index].partialPrice = state.cartProducts[index].quantitySelected * state.cartProducts[index].price
    }
}

export function DeleteProduct(state,product) {
    let cartProductWithoutDeletedProduct = state.cartProducts.filter((registeredProduct)=>{
        return (product.id != registeredProduct.id)
    })
    state.cartProducts = cartProductWithoutDeletedProduct
}