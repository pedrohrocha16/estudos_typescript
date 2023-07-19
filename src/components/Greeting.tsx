const Greeting = () => {

   const name: string = "Pedro H. Rocha"

   const handleClick = (name: string) => {
      alert(`Olá ${name}`)
   }

   return (
      <div>
         <h2>Greeting</h2>
         <button onClick={() => handleClick(name)}>Click</button>
         <hr />
      </div>
   )
}

export default Greeting