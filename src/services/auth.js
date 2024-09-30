import { api } from "../utils";

const loginService = async (formData) => {
  try {
    const json = await api.post("login", formData);
    localStorage.setItem("token", json.data.result.token);
    localStorage.setItem("refreshToken", json.data.result.refreshToken);
    return json.msg;
  } catch (error) {
    throw error;
  }
};

const logoutService = async () => {
  return new Promise((resolve) => {
    resolve(true);
  });
};

export { loginService, logoutService };
