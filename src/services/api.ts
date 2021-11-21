import axios from 'axios'

export const api = axios.create({
  baseURL: "https://reflexa.com.br/api/v1/"
})

