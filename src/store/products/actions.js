import axios from 'axios'

export function someAction (/* context */) {
}

export function actionProducts({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/products/activeProducts').then(({data})=>{
        commit('SetProducts', data )
        commit('SetRandomProducts', data)
    })
}

export function actionRelatedProductByCat({commit}, catId) {
    return axios.get(`https://api.pediapp.com.ar/api/products/findForCategory/${catId}`).then(({data})=>{
        commit('SetRelatedProductByCat', data )
    })
}

export function actionRelatedProductBySubCat({commit}, subCatId) {
    return axios.get(`https://api.pediapp.com.ar/api/products/findForSubcategory/${subCatId}`).then(({data})=>{
        commit('SetRelatedProductBySubCat', data )
    })
}