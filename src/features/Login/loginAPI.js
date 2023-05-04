export const postLogin = async ({ email, password }) => {
  const url = "http://localhost:4002/auth/local/login";
  /* const url = "https://squid-app-tf6mp.ondigitalocean.app/auth/local/login"; */
  try {
    console.log(email, password);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    const data = await response.json();
    console.log("Data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
