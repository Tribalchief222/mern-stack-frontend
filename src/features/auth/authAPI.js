export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error); // Handle the error properly
    }
  });
}

export function updateUser(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${update.id}`, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 404) {
        // Handle the case where the user is not found
        reject(new Error("User not found"));
        return;
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error); // Handle the error properly
    }
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    try {
      const response = await fetch(`http://localhost:8080/users/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.email === email) {
          resolve({ data: data });
        } else {
          reject({ message: "Invalid credentials" });
        }
      } else {
        reject({ message: "Invalid credentials" });
      }
    } catch (error) {
      reject({ message: "Error occurred while checking user credentials" });
    }
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
