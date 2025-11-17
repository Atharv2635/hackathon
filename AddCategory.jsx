import React, { useState } from 'react'
import { addCategory, updateCategory } from '../services/category'

function AddCategory() {
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')

       const addCategoryBlog = async () => {
        const result = await addCategory(title,description)
        if (result.status == 'success')
            toast.success('category added successfully')
    }

    const updateCategoryBlog = async () => {
        const result = await updateCategory(title,description)
        if (result.status == 'success')
            toast.success('category Updated Successfully')
        else
            toast.error(result.error)
    }

       const deleteCategoryBlog=async()=>{
        const result=await deleteUser()
        if(result.status=='success'){
            toast.success("category deleted successfully")
        }else{
            toast.error(result.error)
        }
    }


  return (
    <>
    <span class="border border-black">
     <div className='container w-75'>
        <h1>Add Category</h1>
      <div className="mb-3 mt-3">
        <label for="inputName" className="form-label">Title</label>
        <input type="text" className="form-control" id="inputName" onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label for="inputDesc" className="form-label">Description</label>
        <textarea type="text" className="form-control" id="inputDesc" onChange={e => setDescription(e.target.value)} />
      </div>
      
      <button className='btn btn-primary'onClick={addCategoryBlog}>Add Category</button>
      <button className='btn btn-primary'onClick={updateCategoryBlog}>Add Category</button>
      <button className='btn btn-primary'onClick={deleteCategoryBlog}>Add Category</button>
      </div>
      </span>
    </>

  )
}

export default AddCategory