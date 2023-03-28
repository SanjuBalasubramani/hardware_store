import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            alert('Please enter your full name');
            return;
        }
        if (email.trim() === '') {
            alert('Please enter your email address');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address');
            return;
        }
        if (pass.trim() === '') {
            alert('Please enter a password');
            return;
        }
        if (pass.length < 6) {
            alert('Password should be at least 6 characters');
            return;
        }
        console.log(email);
    }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}