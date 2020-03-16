import Cookies from 'js-cookie'

function getToken(tokenKey) {
  return Cookies.get(tokenKey)
}

function setToken(tokenKey, token) {
  return Cookies.set(tokenKey, token)
}

function removeToken(tokenKey) {
  return Cookies.remove(tokenKey)
}

export { getToken, setToken, removeToken }
