type FormUsers = {
    name: string;
    firstName: string;
    email: string;
    password: string;
    role: string;
}

interface Response {
    success: boolean,
    data?: FormUsers | FormUsers[],
    message?: string
} 

const PORT = /** your port */ null;
const URI_USER_ORIGIN = `http://localhost:${PORT}`
const PATHNAME_USER_POST = 'users/user'

// GET all users
export const findUsers = (): Promise<Response> => {
    return new Promise((resolve, reject) => {
        fetch(`${URI_USER_ORIGIN}`)
            .then(response => response.json())
            .then((data: FormUsers) => resolve({ success: true, data }))
            .catch(err => reject({ success: false, message: err.message }))
    })
}

// GET user
export const findUserById = (UserId: number): Promise<Response> => {
    return new Promise((resolve, rerject) => {
        fetch(`${URI_USER_ORIGIN}/${PATHNAME_USER_POST}/${UserId}`)
            .then(response => response.json())
            .then((data: FormUsers[]) => resolve({ success: true, data }))
            .catch(err => rerject({ success: false, message: err.message }))
    })
}

//  POST create user 
export const createUser = (user: FormUsers): Promise<Response> => {
    return new Promise((resolve, reject) => {
      fetch(`${URI_USER_ORIGIN}/${PATHNAME_USER_POST}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then((data: FormUsers) => resolve({ success: true, data }))
        .catch(err => reject({ success: false, message: err.message }))
    })
  }
  

export default FormUsers;