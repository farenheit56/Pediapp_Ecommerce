import axios from 'axios'

export function someAction (/* context */) {
}

export function actionContact({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/contact').then(({data})=>{
        commit('SetContact', data )
    })
}

export function actionSocialNetworks({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/socialNetworks').then(({data})=>{
        commit('SetSocialNetworks', data )
    })
}