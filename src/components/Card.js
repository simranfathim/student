
import React from 'react'
import { useDispatch } from 'react-redux'
import { addContact, deleteContact, viewcontact } from '../feature/Adddetail'
import { Link, Navigate } from 'react-router-dom'
import Detail from './Detail'
import { DeleteTwoTone , EditOutlined } from '@ant-design/icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ name, phoneno, email, course, id, batchno, contact }) => {
  const dispatch = useDispatch()
  const deletc = () => {
    dispatch(deleteContact({ id: id }))
    toast.info("Deleted  👌")

  }
  

  return (
    <>
      <td >{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneno}</td>
      <td>{course}</td>
      <td>{batchno}</td>
      <td> <Link to={`/Edit/${id}`}><EditOutlined /></Link>
      <button className='btn' onClick={deletc} ><DeleteTwoTone /></button></td>

      <ToastContainer/>
    </>
  )
}

export default Card
