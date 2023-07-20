import { useContext } from "react"
import { AppContext } from "../App"


const ContextApi = () => {

   const details = useContext(AppContext)

   return (
      <div>
         <h2>Consumindo o Context</h2>
         {details && (
            <>
               <p>Linguagem: {details.language}</p>
               <p>Framework: {details.frameWork}</p>
               <p>Stacks: {details.stacks}</p>
            </>
         )}
         <hr />
      </div>
   )
}

export default ContextApi