import React, { useState } from "react"

const useForm = submitCallback => {
  const [state, setState] = useState({})

  const onChange = ev => {
    ev.persist()
    const isCheckbox = ev.target.type === "checkbox"

    setState(state => ({
      ...state,
      [ev.target.name]: isCheckbox ? ev.target.checked : ev.target.value,
    }))
  }

  return [state, onChange]
}

export default useForm
