//---Helpers---
const mapInternalSections = (internalSectionData)=>{
  let internalSections = []
  for (const section of internalSectionData){
      internalSections.push({path: `/${section.path}`, component: ()=> import(`pages/${section.component_name}.vue`), props:{sectionData: section}})
  }
  return internalSections
}
//------------

const makeRoutes = (store) => {
  //Now I can create routes using store data.
  let mappedInternalSections = mapInternalSections(store._modulesNamespaceMap["internalSections/"].state.internalSections.data)
  //Routes
  const routes = [
    { //---routes[0]---
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [/* They are set using mappedInternalActions fetch data */]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '*',
      component: () => import('pages/Error404.vue')
    }
  ]

  //Add dinamic child to first route "route[0]".
  for (const child of mappedInternalSections){
    routes[0].children.push(child)
  }

  return routes
}

export default makeRoutes

//Source: https://forum.quasar-framework.org/topic/4160/solved-access-vuex-store-in-router-js/7

