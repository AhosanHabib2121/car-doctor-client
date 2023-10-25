import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';


const SignUp = () => {
    const { createAccount, profileUpdate } = useContext(AuthContext);
    const [passShowHide, setPassShowHide] = useState(false)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // create account
        createAccount(email, password)
            .then(result => {
                // updateProfile
                profileUpdate(name)
                    .then(() => {
                        console.log(result.user)
                        form.reset()
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-14">
                   <img src={image} alt="not found" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm border border-[#D0D0D0]">
                    <h1 className="text-[#444] text-4xl text-center font-semibold mt-8">Sign Up</h1> 
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                            
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="form-control relative">
                                <input type={passShowHide?'text':'password'}
                                    name='password'
                                    placeholder="password" className="input input-bordered" required />
                                
                                <div className=' absolute right-3 translate-y-4'>
                                    {
                                        passShowHide?<BiSolidHide onClick={() => setPassShowHide(false)} className=' text-xl'/>
                                        :<BiSolidShow onClick={() => setPassShowHide(true)} className='text-xl' />
                                    }
                                    
                                    
                                </div>
                           </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#FF3811] text-white normal-case text-lg hover:bg-[#ad260b]" value='Sign up' />
                        </div>
                    </form>
                    <div className=' text-center mb-6'>
                        <p className=' text-base font-medium text-[#737373] '>Already have an account? <Link to='/login' className=' text-[#FF3811]'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;