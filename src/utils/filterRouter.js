import Layout from "@/layout"


const view = (path) => (resolve) => require([`@/views/${path}.vue`], resolve)

export function filterAsyncRouter(asyncRouteMap) {

  console.log(asyncRouteMap);
  const accessedRouters = asyncRouteMap.filter(route => {
    if (route.component) {
      if (route.component === 'Child') {
        route.component = Child
      } else if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = view(component)
      }
    }
    route.path = '/sass'
    route.component = view(route.component)
    // delete route.children
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  console.log(accessedRouters,999999);
  return accessedRouters
}
