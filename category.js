import axios from "axios";
import { toast } from "react-toastify";
const base_url = 'http://localhost:4000'


export async function addCategory(title, description) {
    const url = base_url + '/category/add'
    const headers = {
        token: window.sessionStorage.getItem('token')
    }
  
     const body = { title, description}
    try {
        const response = await axios.post(url, body, { headers })
        return response.data
    } catch (error) {
        toast.error(error)
    }

} 

export async function updateCategory(title, description) {
    const url = config.base_url  + '/category/update'
    const headers = {
        token: window.sessionStorage.getItem('token')
    }
    const body = { title, description}
    try {
        const response = await axios.put(url, body, { headers })
        return response.data
    } catch (error) {
        toast.error(error)
    }

} 

export async function deleteCategory() {
    try{
        const url = base_url  + '/category/delete'
        const headers={
            token:window.sessionStorage.getItem('token')
        }
        const response=await axios.delete(url,{headers})
        return response.data
    }catch(ex){
        toast.error(ex)
    }
    
}