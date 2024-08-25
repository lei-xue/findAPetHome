export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail)
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;

}

export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail)
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}

export function logout() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('cbid');

}
export async function googleLogin(googleData) {
  try {
    const checkUserResponse = await fetch(`${process.env.REACT_APP_HOST}/users?email=${googleData.email}`);
    const existingUsers = await checkUserResponse.json();

    if (existingUsers.length > 0) {
      return login({ email: googleData.email, password: `google_${googleData.googleId}` });
    } else {
      return register({
        email: googleData.email,
        password: `google_${googleData.googleId}`,
        name: googleData.name
      });
    }
  } catch (error) {
    throw new Error('Google login failed');
  }
}
