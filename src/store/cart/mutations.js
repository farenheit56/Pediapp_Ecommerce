export function PushCartProduct(state,product) {
    let alreadyInList = false
    let index = null
    if(state.cartProducts){
        for(const [i,productListed] of state.cartProducts.entries()){
            if(productListed.id == product.id){
                index = i            
                alreadyInList = true
                break
            }
        }
    }
    if(!alreadyInList){
        product.partialPrice = product.quantitySelected * product.price
        state.cartProducts.push(product)
        localStorage.setItem('pediApp-currentCart', JSON.stringify(state.cartProducts) )
        
    } else{
        state.cartProducts[index].quantitySelected = state.cartProducts[index].quantitySelected + product.quantitySelected
        state.cartProducts[index].partialPrice = state.cartProducts[index].quantitySelected * state.cartProducts[index].price
        localStorage.setItem('pediApp-currentCart', JSON.stringify(state.cartProducts) )
    }
}

export function DeleteProduct(state,product) {
    let cartProductWithoutDeletedProduct = state.cartProducts.filter((registeredProduct)=>{
        return (product.id != registeredProduct.id)
    })
    state.cartProducts = cartProductWithoutDeletedProduct
    localStorage.setItem('pediApp-currentCart', JSON.stringify(state.cartProducts) )
}

export function RemoveOneQuantitySelected(state,product) {
    let indexOfProductToModify
    state.cartProducts.filter((registeredProduct,index)=>{
        if((registeredProduct.id == product.id)){
            indexOfProductToModify = index
        }
    })
    state.cartProducts[indexOfProductToModify].quantitySelected = (product.quantitySelected - 1) > 1 ? (product.quantitySelected - 1) : 1
    state.cartProducts[indexOfProductToModify].partialPrice = state.cartProducts[indexOfProductToModify].quantitySelected * state.cartProducts[indexOfProductToModify].price
    localStorage.setItem('pediApp-currentCart', JSON.stringify(state.cartProducts) )
}

export function AddOneQuantitySelected(state,product) {
    let indexOfProductToModify
    state.cartProducts.filter((registeredProduct,index)=>{
        if((registeredProduct.id == product.id)){
            indexOfProductToModify = index
        }
    })
    state.cartProducts[indexOfProductToModify].quantitySelected = product.quantitySelected + 1
    state.cartProducts[indexOfProductToModify].partialPrice = state.cartProducts[indexOfProductToModify].quantitySelected * state.cartProducts[indexOfProductToModify].price
    localStorage.setItem('pediApp-currentCart', JSON.stringify(state.cartProducts) )
}

export function PushCartOrderNow(state,product) {
    state.cartOrderNow = product
}

export function SetCartFromLocalStorage(state,cart) {
    state.cartProducts = cart    
}

export function KillCartProduct(state,cart) {
    state.cartProducts = []    
}