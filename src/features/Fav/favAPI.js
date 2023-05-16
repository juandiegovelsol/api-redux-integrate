export const getOneList = async ({ token, iduser }) => {
  /* const url = `http://localhost:4002/api/favs/${iduser}`; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs/${iduser}`;
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

export const createList = async ({ token, listname, iduser }) => {
  /* const url = "http://localhost:4002/api/favs"; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        listname,
        user_iduser: iduser,
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

export const getAllList = async ({ token, email }) => {
  /* const url = "http://localhost:4002/api/favs"; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    let computed = [];
    data.map((item) => {
      if (item.useremail === email) {
        computed.push(item);
      }
    });
    return computed;
  } catch (error) {
    console.log(error);
  }
};

export const deleteList = async ({ token, idlist }) => {
  /* const url = `http://localhost:4002/api/favs/${idlist}`; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs/${idlist}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const createOneFav = async ({
  token,
  title,
  description,
  link,
  idlist: list_idlist,
}) => {
  /* const url = "http://localhost:4002/api/favs/fav"; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs/fav`;
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

export const deleteFav = async ({ token, idfavs }) => {
  /* const url = `http://localhost:4002/api/favs/fav/${idfavs}`; */
  const url = `https://squid-app-tf6mp.ondigitalocean.app/api/favs/fav/${idfavs}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {}
};
