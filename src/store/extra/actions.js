import axios from 'axios'

export function someAction (/* context */) {
}

export function actionContact({commit}) {
    return axios.get('http://localhost:3000/api/contact').then(({data})=>{
        commit('SetContact', data )
    })
}

export function actionSocialNetworks({commit}) {
    return axios.get('http://localhost:3000/api/socialNetworks').then(({data})=>{
        commit('SetSocialNetworks', data )
    })
}