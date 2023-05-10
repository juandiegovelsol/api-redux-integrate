export const getOneList = async ({ token, iduser }) => {
  const url = `http://localhost:4002/api/favs/${iduser}`;
  /* const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs/${iduser}`; */
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createOneFav = async ({
  token,
  title,
  description,
  link,
  idlist: list_idlist,
}) => {
  const url = "http://localhost:4002/api/favs/fav";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        link,
        list_idlist,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {}
};
