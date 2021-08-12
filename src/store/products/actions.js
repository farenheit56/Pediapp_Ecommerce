import axios from 'axios'

export function someAction (/* context */) {
}

export function actionProducts({commit}) {
    return axios.get('http://localhost:3000/api/products').then(({data})=>{
        commit('SetProducts', data )
    })
}