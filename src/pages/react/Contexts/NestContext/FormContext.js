import { createContext } from "react"

export const context = {
  onClick: () => {},
  onChange: () => {},
  btnText: 'click me',
  inputText: 'please input',
  count: 1,
}

export const FormContext = createContext(context);