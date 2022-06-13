import styled from "styled-components";


export default function ShoppingItem({name}) {
  return (
    <>
<ItemTag>{name}</ItemTag>
    </>
  )
}



const ItemTag = styled.li `
  background-color: #f5ee65;
  border: #558000 solid 2px;
  padding: 1rem;
  border-radius: 20px;
  
`
