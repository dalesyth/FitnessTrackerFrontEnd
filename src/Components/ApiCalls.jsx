const APIURL = `http://localhost:3000/api`;

// POST routes

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.json();
    console.log(`result from registerUser: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log(`result from loginUser: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

//GET routes

export async function fetchActivities() {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    // console.log(`result from fetchActivities: ${result}`);

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRoutines() {
  try {
    const response = await fetch(`${APIURL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log(`result from fetchRoutines: ${result}`);

    return result;
  } catch (error) {
    console.error(error);
  }
}
