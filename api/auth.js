import API from "../utils/api"

export const login = (payload) => {
  return API.post(`/auth`,payload)
}
export const getBooks = ()=>{
  return API.get('/listbooks')
}
export const getBooksConcepts = (payload)=>{
  return API.post('/listcontents',payload)
}