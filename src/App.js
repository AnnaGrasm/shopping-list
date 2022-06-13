import styled from "styled-components";
import ShoppingItem from "./component/ShoppingItem";
import ShoppingInput from "./component/ShoppingInput";
import ShoppingList from "./component/ShoppingList";
import useItems from "./hooks/useItems";

function App() {
  
const {filterItem, searchItem, addItem, changeLanguage, finalShoppingList, searchTerm, lang, resetAll} = useItems()

 
 
  return (
    <MainContainer>
      <LanguageButton onClick={changeLanguage}>English</LanguageButton>
      <LanguageButton onClick={changeLanguage}>Deutsch</LanguageButton>
      <ResetButton onClick={resetAll}>Reset</ResetButton>
      <ItemContainer>
        {finalShoppingList.map((item) => (
          <ShoppingItem
            key={item._id}
            name={lang === "Deutsch" ? item.name.en : item.name.de}
          />
        ))}
      </ItemContainer>
      <ShoppingInput searchTerm={searchTerm} onSearchItem={searchItem} />
      <ItemContainer>
        {searchTerm &&
          filterItem.map((item) => (
            <ShoppingList
              key={item._id}
              name={lang === "Deutsch" ? item.name.en : item.name.de}
              onAddItem={() => addItem(item)}
            />
          ))}
      </ItemContainer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const ItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const LanguageButton = styled.button`
  padding: 1rem;
  background-color: #88a5be;
  border-radius: 10px;
  margin-left: auto;
  margin-top: 3rem;
`;

const ResetButton = styled.button `
margin: auto;
background-color: #e24d4d;
padding: 1rem;
border-radius: 10px;
`
