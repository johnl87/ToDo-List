import { v4 as uuidV4 } from "uuid"

//  console.log(uuidV4())

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
// array of tasks with the type task that is defined in line 5
const tasks: Task = []

form?.addEventListener("submit", e => {
  e.preventDefault()
  // add ? prevent period as optional chain incase the value is null
  if (input?.value == "" || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)
  input.value = ""
})

function addListItem(task: Task){
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}