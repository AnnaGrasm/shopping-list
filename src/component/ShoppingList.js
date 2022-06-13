import styled from "styled-components";

export default function ShoppingList({ name, onAddItem }) {
  return (
    <>
      <ItemTag>
        <button onClick={onAddItem}>{name}</button>
      </ItemTag>
    </>
  );
}

const ItemTag = styled.li `
  background-color: #89d889;
  border: green solid 2px;
  border-radius: 20px;
  padding: 0;

  button{
      border: none;
      padding: 1.5rem;
      background-color: transparent;
  }
  
`
