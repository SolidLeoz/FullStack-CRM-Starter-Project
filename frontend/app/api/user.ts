import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";


export default function User() {
    return axios.get("/user");
}


export async function createUser({ name, email }: { name: string; email: string }) {
    try {
        await axios.post("/user", { name, email });
      console.log(name, email);
    } catch (error) {
      console.error(error);
    }
}


export async function updateUser(id: string, { name, email }: { name: string; email: string }) {
    return axios.put(`/users/${id}`, { name, email });
}

export async function deleteUser(id: string) {
    return axios.delete(`/users/${id}`);
}
