import axios from 'axios'

export const api = axios.create({
  baseURL: "https://api.reflexa.com.br/v1/"
})

