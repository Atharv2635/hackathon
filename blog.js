import axios from "axios";
import { toast } from "react-toastify";

const base_url = 'http://localhost:4000'

export async function getBlogs() {
    
    const url = base_url + 'blog/get'
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        toast.error(error)
    }
}