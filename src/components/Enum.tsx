// import React from 'react'

type Props = {
   title: string
   content: string
   commentQtd: number
   category: Category
}

export enum Category {
   C = "Comedy",
   T = "Terror",
   A = "Ação",
   R = "Romance",
}

const Enum = ({ title, content, commentQtd, category }: Props) => {
   return (
      <div>
         <h1>{title}</h1>
         <p>{content}</p>
         <p>{commentQtd}</p>
         <p>{category}</p>
      </div>
   )
}

export default Enum