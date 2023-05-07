export const getOneList = async ({ token, idlist }) => {
  const url = `http://localhost:4002/api/favs/${idlist}`;

  try {
    console.log("Token & id", token, idlist);
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
