const APIURL = `http://localhost:3000/api`;

export async function fetchActivities() {
    try {
        const response = await fetch(`${APIURL}/activities`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        console.log(`result from fetchActivities: ${result}`)

        return result;
        
    } catch (error) {
        console.error(error)
    }
}