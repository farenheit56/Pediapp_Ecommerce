import axios from 'axios'

export function actionCart({commit}) {
    commit('SetCartFromLocalStorage', null)
}

//Async example
/* export function actionProducts({commit}) {
    return axios.get('https://api.pediapp.com.ar/api/products').then(({data})=>{
        commit('SetProducts', data )
    })
} */