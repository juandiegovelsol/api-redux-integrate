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
