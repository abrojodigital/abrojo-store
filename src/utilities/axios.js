import axios from "axios"

const api = axios.create( {
  baseURL: 'https://moviedb.org/3/',
  params: {
    api_key: "",

  }
})

export { api }