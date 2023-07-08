import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { updatecontact } from '../feature/Adddetail'
const Edit = () => {
    const { id } = useParams()
    console.log(id, 'this is use params id')
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contact.value)
    const currentccontact = contacts.find((contact) => contact.id == id)
    const [details, setDetails] = useState({ ...currentccontact })
    const navigate = useNavigate('')


    const handlChange = (e) => {
        const { name, value } = e.target
        // console.log(details,'before')
        setDetails({ ...details, [name]: value })
        console.log(details, ' edit after')

    }
    const btn = () => {
        dispatch(updatecontact({ id: id, ...details }))
        navigate('/')
    }
    return (
        <>
            {/* <input onChange={handlChange} value={details.name} name='name' type='text' placeholder='name' />
            <input onChange={handlChange} value={details.phoneno} name='phoneno' type='text' placeholder='phoneno' />
            <input onChange={handlChange} value={details.email} name='email' placeholder='email' />
            <input onChange={handlChange} value={details.course} name='course' placeholder='course' />
            <button onClick={btn}>Edit</button> */}
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
                    <label for="exampleInputEmail1">Batchno</label>
                    <input type="email" class="form-control" onChange={handlChange} value={details.course} name='course' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course" />
                </div>
                <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Course</label>
                    <select id="disabledSelect" class="form-select" onchange={handlChange} value={details.batchno} name='batchno'ria-describedby="emailHelp" placeholder="Enter Batchno">
                        <option defaultValue=''>select</option>
                        <option defaultValue="Fsd">FSD</option>
                        <option value="Ds">DS</option>
                    </select>
                </div>

                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={btn} class="btn btn-primary">Edit</button>

            </form>

        </>
    )
}


export default Edit


