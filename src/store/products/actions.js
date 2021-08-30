import axios from 'axios'

export function someAction (/* context */) {
}

export function actionProducts({commit}) {
    return axios.get('http://localhost:3000/api/products').then(({data})=>{
        commit('SetProducts', data )
    })
}

export function actionRelatedProductByCat({commit}, catId) {
    return axios.get(`http://localhost:3000/api/products/findForCategory/${catId}`).then(({data})=>{
        commit('SetRelatedProductByCat', data )
    })
}

export function actionRelatedProductBySubCat({commit}, subCatId) {
    return axios.get(`http://localhost:3000/api/products/findForSubcategory/${subCatId}`).then(({data})=>{
        commit('SetRelatedProductBySubCat', data )
    })
}