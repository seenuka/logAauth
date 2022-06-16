import React from 'react';


function Resetpassword() {
    
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

        return (
            <div className='forgot-form'>
            <form onSubmit={handleSubmit}>
                <h3>Reset Password</h3>
                <div className='form-group'>
                <div className='form-group'>
                    <label htmlFor="email">Enter yor registered email</label><br />
                        <input type="email" placeholder='Email' required/>
                </div>
                    <label htmlFor="password">Password</label><br />
                        <input type="password" placeholder='New Password' required  /><br/>
                    
                    
                    <label htmlFor="confrom-password">Confirm Password</label><br />
                        <input type="password" placeholder='Confirm Password' required/>
                </div>
                <button type='submit'>Reset</button>
            </form>
        </div>
        );
    }


export default Resetpassword;
