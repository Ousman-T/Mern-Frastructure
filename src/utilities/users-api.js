// * ajax call to express server



export async function signUp(userData){
    const BASE_URL = '/api/users';
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });

    if (res.ok){
        return res.json(); //JWT TOKEN
    } else {
        throw new Error('Invalid Sign Up!');
    }
};