import axios from 'axios'

export function someAction (/* context */) {
}

export function actionCategories({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/categories').then(({data})=>{
        commit('SetCategories', data )
    })
}

export function actionSubCategories({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/subcategories').then(({data})=>{
        commit('SetSubCategories', data )
    })
}