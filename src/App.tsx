import './App.css'
import Destructuring from './components/Destructuring'
import DestructuringMoreData from './components/DestructuringMoreData'
import Enum, { Category } from './components/Enum'
import Greeting from './components/Greeting'
import UseState from './components/UseState'
import Variables from './components/Variables'

function App() {

  type textOrNull = string | null

  type fixed = "isso" | "aquilo" | "nada a ver"

  const myText: textOrNull = "Tem Algo aqui"

  let mySeccondText: textOrNull = null
  mySeccondText = "Opa!"

  const fixedText: fixed = "aquilo"


  return (
    <>
      <div className="container">
        <h1>Estudos Typescript React</h1>
        <Variables />
        <Greeting />
        <Destructuring
          name='Pedro'
          age={29}
        />
        <DestructuringMoreData
          name="Adrielle"
          age={25}
          retiree={false}
          stacks={["javascript", "react", "html", "css", "typescript"]}
        />
        <UseState />
        <Enum
          title='Velozes e Furiosos'
          content="Paul Walker"
          commentQtd={50}
          category={Category.A}
        />
        <hr />
        <h2>Types</h2>
        {myText && <p>Opa, tem algo aqui</p>}
        {mySeccondText && <p>Opa, tem algo aqui também</p>}
        {fixedText && <p>{fixedText}</p>}
        <hr />
      </div>
    </>
  )
}

export default App


// name, age, retiree, stacks