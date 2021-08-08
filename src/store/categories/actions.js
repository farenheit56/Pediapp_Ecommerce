import axios from 'axios'

export function someAction (/* context */) {
}

export function actionCategories({commit}) {
    return axios.get('http://localhost:3000/api/categories').then(({data})=>{
        commit('SetCategories', data )
    })
}