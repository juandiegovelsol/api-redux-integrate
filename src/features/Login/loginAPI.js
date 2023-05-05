export const postLogin = async ({ email, password }) => {
  const url = "http://localhost:4002/auth/local/login";
  /* const url = "https://squid-app-tf6mp.ondigitalocean.app/auth/local/login"; */
  try {
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
