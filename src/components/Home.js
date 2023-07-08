import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Link } from 'react-router-dom'



const Home = () => {

  const contacts = useSelector((state) => state.contact.value)
  const [userInput, setuserInput] = useState('')
  const [select, setselect] = useState('')


  const fiterData = contacts.filter((val) => {
    return val.course.toLowerCase().includes(userInput.toLowerCase())

    // return val.name.toLowerCase().includes(userInput.toLowerCase)

  })
  const selectdata = fiterData.filter((val) => {
    return val.course.toLowerCase().includes(select.toLowerCase())
  })
  // console.log(selectdata, 'hiiii')
  return (
    <>

      <div className='pavani'>
        <input type="text" className='search' onChange={(e) => setuserInput(e.target.value)} placeholder='search student ' style={{ marginRight: '100px' }} />
        <select className='dropdown' name='course'  onChange={(e) => {
          setselect(e.target.value)
        }} >
          <option value="" selected>Filter by course</option>
          <option value="FSD">FSD</option>
          <option value="Ds">Ds</option>

        </select>
        <Link to={`/add`}><button className='edit' style={{ marginLeft: '100px' }}>Add Details</button></Link>

      </div>
      <table className='style-table' />
      <tr>
        <th style={{ textAlign: "center", color: "white" }}>id</th>
        <th style={{ textAlign: "center", color: "white" }}>NAME</th>
        <th style={{ textAlign: "center", color: "white" }}>EMAIL</th>
        <th style={{ textAlign: "center", color: "white" }}>PHONENo</th>
        <th style={{ textAlign: "center", color: "white" }}>Course</th>
        <th style={{ textAlign: "center", color: "white" }}>Batchno</th>
        <th style={{ textAlign: "center", color: "white" }}>Action</th>

      </tr>

      {
        selectdata.map((contact, index) => {
          return (
            <>

              <tr>
                <Card key={index} id={contact.id} name={contact.name} phoneno={contact.phoneno} email={contact.email} course={contact.course} batchno={contact.batchno} />
              </tr>

            </>
          )
        }
        )
      }




      <table />


    </>
  )
}

export default Home
