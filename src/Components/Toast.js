import React from 'react'
import { ToastContainer, toast } from 'react-toastify'


function Toast(props) {

    return (
        <div style={{ height: '50px' }}>
            {toast('🦄 Wow so easy!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            }

        </div>
    )
}


export default Toast
