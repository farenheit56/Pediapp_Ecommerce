import {BASE_IMG_URL} from 'src/env.js'

export function SetRelatedProductByCat(state,products) {
    state.relatedProductByCat = products
}

export function SetRelatedProductBySubCat(state,products) {
    state.relatedProductBySubCat = products
}

export function SetSelectedProduct(state,product) {
    state.selectedProduct = product
    PopSelectedProductFromRandom(state,product)
}

export function SetSelectedProductImages(state,product) {
    //Parse multi images.
    let images = []
    images.push({
        id:1,
        big: BASE_IMG_URL + `/${product.image_url}`,
        thumb: BASE_IMG_URL + `/${product.image_url}`
    })
    if(product.product_images && product.product_images.length > 0){
        product.product_images.map((image,index)=>{
            images.push({
                id: index + 2,
                big: BASE_IMG_URL + `/${image.image_url}`,
                thumb: BASE_IMG_URL + `/${image.image_url}`
            })
        })
    }
    state.selectedProductImages = images
}

export function SetProducts(state,products) {
    state.products = products
}

export function SetRandomProducts(state,products) {
    let array
    if(products){
        array = products
    }else{
        array = state.products
    }
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    state.randomProducts = array
}

//Siempre que se selecciona un producto pasa por esta funcion.
export function PopSelectedProductFromRandom(state,product) {
    SetRandomProducts(state,null)
    let array = state.randomProducts
    let productsWithoutSelectedProduct = array
    let productsFilterByCat = array
    if(product){
        productsWithoutSelectedProduct = array.filter(randomProd => randomProd.id!= product.id)
        if(product.categories.length > 0){
            productsFilterByCat = productsWithoutSelectedProduct.filter((prod)=>{
                let isRelatedProduct = false
                if(prod.categories.length > 0){
                    prod.categories.map((cat)=>{
                        product.categories.map((catSelectedProduct)=>{
                            if(cat.id == catSelectedProduct.id){
                                isRelatedProduct = true
                            }
                        })
                    })
                }
                return isRelatedProduct
            })
        }
    }

    if(productsFilterByCat.length > 0 ){
        state.randomProducts = productsFilterByCat
    }else{
        state.randomProducts = productsWithoutSelectedProduct
    }
}