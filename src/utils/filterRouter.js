import Layout from "@/layout"


const view = (path) => (resolve) => require([`@/views/${path}.vue`], resolve)

export function filterAsyncRouter(asyncRouteMap) {

  console.log(asyncRouteMap);
  const accessedRouters = asyncRouteMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = view(route.component)
      }
    }
    route.path = '/sass'
    route.component = view(route.component)
    // console.log(route.children);
    // console.log(route.children.length);
    delete route.children
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  console.log(accessedRouters, 9999);
  return accessedRouters
}
