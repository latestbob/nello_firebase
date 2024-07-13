import React from 'react';
import avatar from '../avatar.png';
import { useState, useEffect } from 'react';





function Home(){

    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [isValidConfirm, setIsValidConfirm] = useState(false);


    const handlePasswordChange = (e) => {

        const newPassword = e.target.value;
        setPassword(newPassword);
    
        // Regular expressions to check password criteria
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasLowerCase = /[a-z]/.test(newPassword);
        const hasNumbers = /\d/.test(newPassword);
        const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newPassword);
        const isLengthValid = newPassword.length >= 8;
    
        // Check if all criteria are met
        setIsValid(
          hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isLengthValid
        );
      };
    


      const handleConfirmChange = (e) => {

        const newConfirmPassword = e.target.value;
        setConfirm(newConfirmPassword);
    
        // Regular expressions to check password criteria
        const checkedme = password == newConfirmPassword;
       
    
        // Check if all criteria are met
        setIsValidConfirm(
         checkedme
        );
      };

      


    return (
        <>
        
            <div className='col-md-6 m-auto rounded card py-5'>

               <div className='text-center'>

               <img src={avatar} className='mylogo' />


               </div>



               <br></br>

               <h5 className='text-center my-3 myhead'>Kindly input a valid password to secure your account</h5>


               <br>
               </br>

               <form className='px-5'>
                    <div className='form-group'>
                        <label className='label'>Enter Password</label>

                        <input onChange={handlePasswordChange} value={password} className='form-control'placeholder='' />

                        {isValid ? <span className='text-success small'>Password is valid </span> : <span className='text-danger small'>Password length must be up to 8 and content capital letter, small letter, number and special character</span>}
                    </div>

                    <div className='form-group'>
                        <input type="checkbox" /> <span className='show'>show password</span>
                    </div>


                    <div className='form-group'>
                        <label className='label'>Confirm Password</label>

                        <input onChange={handleConfirmChange} value={confirm} className='form-control'placeholder='' />


                        {isValid && (
                            isValidConfirm ? <span className='text-success small'>Password matched </span> : <span className='text-danger small'>Password not matched</span>
                        )
                        }

                    </div>

                    <br></br>

                    <div className='form-group '>

                       
                       {
                        isValid && isValidConfirm &&  <button type='submit' className='btn btnstyle w-100'>Create Account</button>
                       }


                    </div>
               </form>


            </div>
        </>
    );
}

export default Home;