import axios from 'axios'
import {getData} from './getData'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodos1 = async () => {
  return await axios.get(BASE_URL).then(response => response.data)
}

const getTodos = () => getData()

export {getTodos}
