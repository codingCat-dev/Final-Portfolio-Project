import { useState } from "react"

const useForm = () => {
  const [state, setState] = useState({})

  const onChange = ev => {
    ev.persist()
    const isCheckbox = ev.target.type === "checkbox"

    setState(state => ({
      ...state,
      [ev.target.name]: isCheckbox ? ev.target.checked : ev.target.value,
    }))
  }

  const onSubmit = ev => {
    ev.preventDefault()
  }

  return [state, onChange, onSubmit]
}

export default useForm
