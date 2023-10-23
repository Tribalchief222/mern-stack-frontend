export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error); // Handle the error properly
    }
  });
}

export function checkUser(id, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${id}`);
      if (response.status === 404) {
        reject({ message: 'User not found' });
        return;
      }

      const user = await response.json();

      // Compare the password by converting the provided password to a Buffer
      const providedPasswordBuffer = Buffer.from(password, 'base64');

      // Compare the Buffer objects (this assumes the password is stored as a Buffer)
      if (providedPasswordBuffer.equals(user.password)) {
        resolve({ data: user });
      } else {
        reject({ message: 'Wrong credentials' });
      }
    } catch (error) {
      console.error(error);
      reject({ message: 'Failed to fetch user data' });
    }
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    
    resolve({ data: 'success' });
  });
}