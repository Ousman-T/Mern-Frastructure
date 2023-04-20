// * log in sign up log out etc
import * as usersApi from './users-api'

export async function signUp(userData){
    // use the signUp users-api function
    // console.log('[From signUP function]', userData)
    const token = await usersApi.signUp(userData);
    return token;

    return token;
}