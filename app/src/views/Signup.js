import { Link } from 'react-router-dom';
import '../css/Signup.css';

const Signup = () => {
    return (
        <div className="split left">
            
                <div className="title">
                    <h1>Welcome to Mentor Me</h1>
                    <h2>Find Your Mentor, Find Your Way</h2>
                    <img alt="asdasda"></img>
                </div>
               
               <div className="split right">
                    <div className='signupform'>
                <h1>Sign Up</h1>

                    <form>
                        
                    
                        <input type="email" className="email" placeholder="Email"></input> <br/>
                        <input type="password" className="password" placeholder="Password"></input><br/> 
                        <input type="password" className="confirmpassword" placeholder="Confirm Password"></input><br/> 
                        <input type="submit" value="Sign Up"></input>
                    </form>

                        <div>
                            <Link to="/Login.js">Login</Link>
                        </div>
                    </div>
                </div>
               

               
            </div>
    )
}

export default Signup;