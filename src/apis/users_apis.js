export const checkUser = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return false;
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/check`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return false;
  }

  return true;
};
