import API from "../utils/api"

export const login = (payload) => {
  return API.post(`/auth`,payload)
}