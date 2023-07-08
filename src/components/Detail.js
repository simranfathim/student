import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addContact } from '../feature/Adddetail'
import Home from './Home'
import { navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detail = () => {
  const [details, setDetails] = useState({ name: '', phoneno: '', email: '', course: '', batchno: '' })
  const navigate = useNavigate('')
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contact.value)
  // console.log(contacts, 'this is contacst')


  const handlChange = (e) => {
    const { name, value } = e.target
    // console.log(details,'before')
    setDetails({ ...details, [name]: value })
    console.log(details, 'after')

  }
  const btn = () => {
    dispatch(addContact({ id: contacts.length + 1, ...details }))
    navigate('/')
    toast.success("added sucessfully 🙌")

  } 
  


  return (
    <>

      <form className='page'>
        <div class="form-group" >
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" onChange={handlChange} value={details.name} name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">phoneno</label>
          <input type="email" class="form-control" onChange={handlChange} value={details.phoneno} name='phoneno' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phoneno" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" onChange={handlChange} value={details.email} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">BatchNO</label>
          <input type="email" class="form-control" onChange={handlChange} value={details.course} name='course' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course" />
        </div>
        <div class="mb-3">
          <label for="disabledSelect" class="form-label">Course</label>
          <select id="disabledSelect" class="form-select"onChange={handlChange} value={details.batchno} name='batchno'  aria-describedby="emailHelp" placeholder="Enter Batchno">
            <option value=''>select</option>
            <option value="FSD">FSD</option>
            <option value="Ds">DS</option>
          </select>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={btn } class="btn btn-primary">Add</button>

        <ToastContainer/>
      </form>
     
    </>

  )

}
export default Detail
