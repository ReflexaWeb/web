import axios from 'axios'

export const api = axios.create({
  baseURL: "https://162.214.211.18/api/v1/"
})

