import { useState, useEffect } from "react";
import styled from "styled-components";
import ShoppingItem from "./component/ShoppingItem";
import ShoppingInput from "./component/ShoppingInput";
import ShoppingList from "./component/ShoppingList";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const [finalShoppingList, setFinalShoppingList] = useState([]);
  const [lang, setLang] = useState("English");

  useEffect(() => {
    loadShoppingList();
    async function loadShoppingList() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data1 = await response.json();
        setShoppingList(data1.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const filterItem = shoppingList.filter((item) =>
    item.name.de.toLowerCase().includes(searchTerm)
  );

  function searchItem(title) {
    SetSearchTerm(title);
  }

  function addItem(name) {
    setFinalShoppingList([...finalShoppingList, name]);
  }

  function changeLanguage() {
    if (lang === "English") {
      setLang("Deutsch");
    } else {
      setLang("English");
    }
  }

  return (
    <MainContainer>
      <LanguageButton onClick={changeLanguage}>{lang}</LanguageButton>
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
