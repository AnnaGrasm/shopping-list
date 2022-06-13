import styled from "styled-components";

export default function ShoppingInput({ onSearchItem, searchTerm }) {


  return (
    <FormContainer >
      <label htmlFor="name">Article</label>
      <input
        id="name"
        type="text"
        typeof="search"
        required
        autoComplete="off"
        onChange={(event)=> onSearchItem(event.target.value)}
        value={searchTerm}
      />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem;

  input {
    height: 2rem;
    width: 20rem;
    border-radius: 9px;
  }

 
`;
