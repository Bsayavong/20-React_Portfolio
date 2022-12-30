import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        // console.log(e.target.value);
    }
        ;
    const emailValidation = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const formSubmission = (event) => {
        event.preventDefault();
        // console.log('name' + name)
        // console.log(email);
        // console.log(message);
        if (!name) {
            setErrorMessage('Please check your name input');
            return
        }
        if (!emailValidation(email)) {
            setErrorMessage('Please check your email input');
            return
        } else if (!message) {
            setErrorMessage('Please check your message input');
            return
        }
        setErrorMessage('');
    }

    return (
        <form className='text-center mt-1'>
            <h1>Contact Me</h1>
            <h4>Please provide the information below</h4>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name<span>*</span></label>
                <input type="text" name='name' className="form-control" onChange={handleInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address<span>*</span></label>
                <input type="email" name='email' className="form-control" aria-describedby="emailHelp" onChange={handleInputChange}></input>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" name='message' placeholder="Leave a message here" id="floatingTextarea" style={{ height: '100px' }} onChange={handleMessageChange}></textarea>
                <label htmlFor="message" className='text-center'>Message<span>*</span></label>
            </div>
            <button type="submit" className='mb-3' onClick={formSubmission}>Submit</button>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <p>At this time this contact form is still under development. You may reach me with the links below.</p>
        </form>
    );
}