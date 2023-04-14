import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = ({ showToast }) => {


  return (
    <>
      <div className="container py-5 my-5 ">
        <div className="card-body py-4 px-4 px-md-5">
          <AddNote showToast={showToast} />
          <Notes showToast={showToast} />
        </div>
      </div>
    </>
  )
}

export default Home
