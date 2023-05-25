//  import { v4 as uuidV4 } from "uuid"

//  console.log(uuidV4())

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit", e => {
  e.preventDefault()
  // add ? prevent period as optional chain incase the value is null
  if (input?.value == "" || input?.value == null) return
})
