import './App.css'
import Destructuring from './components/Destructuring'
import DestructuringMoreData from './components/DestructuringMoreData'
import Greeting from './components/Greeting'
import Variables from './components/Variables'

function App() {
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
      </div>
    </>
  )
}

export default App


// name, age, retiree, stacks