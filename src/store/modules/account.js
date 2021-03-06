import db from '@/utils/localstorage'

export default {
  namespaced: true,
  state: {
    refreshToken: db.get('REFRESH_TOKEN'),
    token: db.get('TOKEN', ''),
    tenant: db.get('TENANT', ''),
    expireTime: db.get('EXPIRE_TIME', 0),
    user: db.get('USER'),
    permissions: db.get('PERMISSIONS', []),
    routes: db.get('USER_ROUTER', []),
    logoavator: '',
  },
  mutations: {
    SET_AVTER(state, logoavator) {
      state.logoavator = logoavator
    },
    setTenant(state, val) {
      db.save('TENANT', val)
      state.accessToken = val
    },
    setRefreshToken(state, val) {
      db.save('REFRESH_TOKEN', val)
      state.refreshToken = val
    },
    setTokens(state, val) {
      db.save('TOKEN', val)
      state.token = val
    },
    setExpireTime(state, val) {
      db.save('EXPIRE_TIME', val)
      state.expireTime = val
    },
    setUser(state, val) {
      db.save('USER', val)
      state.user = val
    },
    setPermissions(state, val) {
      db.save('PERMISSIONS', val)
      state.permissions = val
    },
    setRoutes(state, val) {
      db.save('USER_ROUTER', val)
      state.routes = val
    },
  },
}
