type Props = {
   name: string
   age: number
}

const Destructuring = (props: Props) => {
  return (
    <div>
      <h2>Destructuring</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <hr />
    </div>
  )
}

export default Destructuring