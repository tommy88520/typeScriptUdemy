import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}
axios.get(url).then(r => {
  const todo = r.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed
  logTodo( id, title, completed)

})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  1. ${id}
  2. ${title}
  3. ${completed}
  `);
}
const today = new Date()
today.getDay
