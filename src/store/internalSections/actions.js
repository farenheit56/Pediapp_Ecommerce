import axios from 'axios'

export function someAction (/* context */) {
}


export async function actionInternalSections({commit}) {
    commit('SetInternalSections', await axios.get('http://localhost:3000/api/internalSections'))
}
