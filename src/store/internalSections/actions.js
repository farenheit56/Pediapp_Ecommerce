import axios from 'axios'

export function someAction (/* context */) {
}

export function actionInternalSections({commit}) {
    return axios.get('https://api.laboutiquedelaflor.com.ar/api/internalSections').then(({data})=>{
        commit('SetInternalSections', data )
    })
}

/* export async function actionInternalSections({commit}) {
    commit('SetInternalSections', await axios.get('https://api.laboutiquedelaflor.com.ar/api/internalSections'))
} */

/* //Make multiple API request only in one action.
export function actionInternalSections({commit}) {
    return axios.all([
        axios.get('https://api.laboutiquedelaflor.com.ar/api/internalSections'),
        axios.get('https://api.laboutiquedelaflor.com.ar/api/categories')
    ])
    .then(axios.spread((internalSections, categories) => {
        // output of req.
        commit('SetInternalSections', internalSections.data )
        console.log(internalSections.data)
        console.log(categories.data)
    }));
} */