type Props = {
   name: string
   age: number
   retiree: boolean
   stacks: string[]
}

const DestructuringMoreData = ({ name, age, retiree, stacks }: Props) => {
   return (
      <div>
         <h2>DestructuringMoreData</h2>
         <h4>Name: {name}</h4>
         <p>Age: {age}</p>
         {retiree == false && <p>Not retired</p>}
         <h3>Stacks:</h3>
         {stacks.map((stack) => (
            <p>{stack}</p>
         ))}
         <hr />
      </div>
   )
}

export default DestructuringMoreData