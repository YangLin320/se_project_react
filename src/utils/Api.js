import { baseUrl } from "./constants";

export const checkResponse = (res) => {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Error: ${res.status}`);
};

export const getClothes = () => {
   return fetch(`${baseUrl}/items`).then(checkResponse);
};

export const postClothing = ({ name, weather, imageUrl}, token) => {
   return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         name,
         imageUrl,
         weather,
      }),
   }).then(checkResponse);
};

export const deleteClothing = (itemId, token) => {
   return fetch(`${baseUrl}/items/${itemId}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
   }).then(checkResponse);
};

export const likeItem = (id,token)=>{
      return fetch(`${baseUrl}/items/${id}/likes`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      }).then(checkResponse);
}

export const dislikeItem = (id, token) => {
   return fetch(`${baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
   }).then(checkResponse);
};
