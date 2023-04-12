import React, { useContext } from 'react'
import Notecontext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(Notecontext)
    return (
        <div>
            about js  = {a.name}
        </div>
    )
}

export default About