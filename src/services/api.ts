import axios from 'axios'

export const api = axios.create({
  baseURL: "https://637f-189-82-172-3.sa.ngrok.io/v1/"
})

