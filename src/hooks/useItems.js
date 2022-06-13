import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";
import { useState } from "react";

export default function useItems() {
  const [finalShoppingList, setFinalShoppingList] = useLocalStorage(
    "Shopping-items",
    []
  );
  const [shoppingList] = useFetch();

  const [searchTerm, SetSearchTerm] = useState("");

  const [lang, setLang] = useState("English");

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

  function resetAll(){
      setFinalShoppingList([])
  }

  return {
    filterItem,
    searchItem,
    addItem,
    changeLanguage,
    finalShoppingList,
    setFinalShoppingList,
    searchTerm,
    lang,
    resetAll
  };
}
