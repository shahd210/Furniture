import React, { useState } from 'react';
import './Register.css'
import Topper from '../Topper/Topper';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await fetch('http://localhost:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Account was created successfully');

            } else {
                setError(data.message || 'Error');
            }
        } catch (err) {
            setError('Server connection error');
        }
    };

    return (

        <>
            <Topper title={"Register"} breadcrumb={"Register"} />
            <div className="container d-flex justify-content-center my-5">
                <div className=" w-50 bg-white shadow text-center p-5">

                    <h2>Create a new account </h2>
                    <p className='ltcolor'>Please fill the below filed:</p>

                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                        <div className="form-floating mb-3">
                            <input type="text" name="name" value={formData.name} required className="form-control" onChange={handleChange} id="floatingInput" placeholder="Your Name" />
                            <label htmlFor="floatingInput">Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com " value={formData.email} onChange={handleChange} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" value={formData.password} required onChange={handleChange} minLength="3"
                                className="form-control" style={{ width: '100%', padding: '8px', marginTop: '5px' }} id="floatingPassword" placeholder="Password" />
                            <label className='ltcolor' htmlFor="floatingPassword">Password</label>
                        </div>



                        <button type="submit" className="btn btn_color">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;