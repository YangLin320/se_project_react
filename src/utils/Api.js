const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Error: ${res.status}`);
};

export const getClothes = () => {
   return fetch(`${baseUrl}/items`).then(checkResponse);
};

export const postClothing = ({ name, weather, imageUrl }) => {
   return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         name,
         imageUrl,
         weather,
      }),
   }).then(checkResponse);
};

export const deleteClothing = (cardId) => {
   return fetch(`${baseUrl}/items/${cardId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
   }).then(checkResponse);
};
