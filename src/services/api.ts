import axios from 'axios'

export const api = axios.create({
  baseURL: "http://162.214.211.18/api/v1/"
})

