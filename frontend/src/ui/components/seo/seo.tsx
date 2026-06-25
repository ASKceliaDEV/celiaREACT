import head from "next/head";
//creer une interface propse
interface props {
    title: string;//il fait reference au titre de la page
    description: string;//il fait reference a la description de la page

}
//je vais creer un composant seo qui va prendre en parametre les props 
export const Seo = ({title,description}: props) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
  )
}