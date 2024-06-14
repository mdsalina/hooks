//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"

import { MainApp } from "./09-useContext/MainApp"
import { BrowserRouter } from "react-router-dom"
//import { CallbackHook } from "./06-Memos/CallbackHook"
//import { Padre } from "./07-tarea-memo/Padre"
//import { MemoHook } from "./06-Memos/MemoHook"

//import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks"

//import { MultipleCustomHook } from "./03-examples/MultipleCustomHook"
//import { SimpleForm } from "./02-useEffect/SimpleForm"
//import { FocusScreen } from "./04-useRef/FocusScreen"
//import {Layout} from "./05-useLayoutEffect/Layout"
//import { Memorize } from "./06-Memos/Memorize"
//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'


export const HooksApp = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}
