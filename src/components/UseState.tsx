import { ChangeEvent, useState } from "react"

const UseState = () => {

   const [text, setText] = useState<string | null>(null)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
   }

   return (
      <div>
         <h2>UseState</h2>
         <p>The text entered was: {text}</p>
         <input type="text" onChange={handleChange} />
         <hr />
      </div>
   )
}

export default UseState