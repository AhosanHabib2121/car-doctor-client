import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { useState } from 'react';
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';
import axios from "axios";
import useAuth from '../../customHooks/useAuth';
// import { useContext} from 'react';
// import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  // const { loginAccount } = useContext(AuthContext);
  const{loginAccount} = useAuth()

  const [passShowHide, setPassShowHide] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login account
    loginAccount(email, password)
      .then((result) => {
        // alert('Login successfully!')
        // form.reset();
        const user = { email };
        //------- get access token---------
        axios
          .post("http://localhost:5000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-14">
          <img src={image} alt="not found" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm border border-[#D0D0D0]">
          <h1 className="text-[#444] text-4xl text-center font-semibold mt-8">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="form-control relative">
                <input
                  type={passShowHide ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <div className=" absolute right-3 translate-y-4">
                  {passShowHide ? (
                    <BiSolidHide
                      onClick={() => setPassShowHide(false)}
                      className=" text-xl"
                    />
                  ) : (
                    <BiSolidShow
                      onClick={() => setPassShowHide(true)}
                      className="text-xl"
                    />
                  )}
                </div>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#FF3811] text-white normal-case text-lg hover:bg-[#ad260b]"
                value="Login"
              />
            </div>
          </form>
          <div className=" text-center mb-6">
            <p className=" text-base font-medium text-[#737373] ">
              Create a new account?{" "}
              <Link to="/signUp" className=" text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;