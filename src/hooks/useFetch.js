import { useEffect, useState } from 'react'

export default function useFetch() {
    const [shoppingList, setShoppingList] = useState([]);

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
      return [shoppingList]
    }
