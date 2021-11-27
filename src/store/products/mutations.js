import {BASE_IMG_URL} from 'src/env.js'

export function SetRelatedProductByCat(state,products) {
    state.relatedProductByCat = products
}

export function SetRelatedProductBySubCat(state,products) {
    state.relatedProductBySubCat = products
}

export function SetSelectedProduct(state,product) {
    state.selectedProduct = product
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
    console.log(images, 'como quedoooooooooooo?')
    state.selectedProductImages = images
}

export function SetProducts(state,products) {
    state.products = products
}
