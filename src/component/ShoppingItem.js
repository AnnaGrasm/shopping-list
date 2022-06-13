import styled from "styled-components";


export default function ShoppingItem({name}) {
  return (
    <>
<ItemTag>{name}</ItemTag>
    </>
  )
}



const ItemTag = styled.li `
  background-color: #89d889;
  border: green solid 2px;
  padding: 1rem;
  border-radius: 20px;
  
`
