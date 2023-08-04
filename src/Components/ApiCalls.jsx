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
        password
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
          password
      }),
    });
    const result = await response.json();
    console.log(`result from loginUser: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createActivity(token, name, description) {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();

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

export const routinesByUser = async (username) => {
  try {
    const response = await fetch(`${APIURL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
    const result = await response.json();
    console.log(`result from routinesByUser: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const activitiesByUser = async (username) => {
  try {
    const response = await fetch(`${APIURL}/users/${username}/activities`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
    const result = await response.json();
    console.log(`result from activitiesByUser: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const updateRoutine = async (routineId, token, name, goal) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        goal
      }),
    });
    const result = await response.json();
    console.log(`result from updateRoutine: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const deleteRoutine = async (routineId, token) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(`result from deleteRoutine: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}
