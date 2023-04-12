import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = () => {


  return (
    <>
      <div className="container py-5 my-5 ">
        <div className="card-body py-4 px-4 px-md-5">
          <AddNote />
          <Notes />
        </div>
      </div>
    </>
  )
}

export default Home
