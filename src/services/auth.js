const loginService = async (formData) => {
  return new Promise((resolve, reject) => {
    if (formData.email === "admin@gmail.com" && formData.password === "1234") {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

export { loginService };
