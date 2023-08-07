const APIURL = `http://localhost:3000/api`;
const token = localStorage.getItem("token");

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

export async function createActivity(name, description) {
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

export async function createRoutine(isPublic, name, goal) {
  try {
    console.log(`token in createRoutine: ${token}`)
    const response = await fetch(`${APIURL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isPublic,
        name,
        goal,
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

export async function getUserInfo() {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// PATCH routes

export async function updateRoutine(routineId, token, isPublic, name, goal) {
  console.log(`routineId: ${routineId} from updateRoutine`)
  console.log(`isPublic from updateRoutine: ${isPublic}`)
  console.log(`name from updateRoutine: ${name}`)
  console.log(`goal from updateRoutine: ${goal}`)
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isPublic,
        name,
        goal,
      }),
    });
    const result = await response.json();
    console.log(`result from updateRoutine: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// DELETE routes

export async function deleteRoutine(routineId, token) {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(`result from deleteRoutine: ${result}`);
    return result;
  } catch (error) {
    console.error(error);
  }
}
