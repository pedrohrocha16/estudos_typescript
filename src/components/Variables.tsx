const Variables = () => {

   const name: string = "Pedro H. Rocha"
   const age: number = 29
   const career: string = "Front End Developer"
   const localization: string = "Patos de Minas - Minas Gerais"
   const working: boolean = false

   return (
      <div>
         <hr />
         <h3>Variables in TypeScript</h3>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
         <p>Career: {career}</p>
         <p>Localization: {localization}</p>
         {working === false ? <p>He is not working</p> : <p>He is working</p>}
         <hr />
      </div>
   )
}

export default Variables