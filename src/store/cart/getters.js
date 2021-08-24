export function GetCartProducts (state) {
    return state.cartProducts
}

export function GetCartProductsTotalPrice (state) {
    let totalPrice = 0
    for(const [i,productListed] of state.cartProducts.entries()){
        totalPrice += productListed.partialPrice
    }
    return totalPrice
}