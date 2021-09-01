import axios from 'axios'

export function someAction (/* context */) {
}

export function actionProducts({commit}) {
    return axios.get('https://admin.pediapp.com.ar/api/products').then(({data})=>{
        commit('SetProducts', data )
    })
}

export function actionRelatedProductByCat({commit}, catId) {
    return axios.get(`https://admin.pediapp.com.ar/api/products/findForCategory/${catId}`).then(({data})=>{
        commit('SetRelatedProductByCat', data )
    })
}

export function actionRelatedProductBySubCat({commit}, subCatId) {
    return axios.get(`https://admin.pediapp.com.ar/api/products/findForSubcategory/${subCatId}`).then(({data})=>{
        commit('SetRelatedProductBySubCat', data )
    })
}