import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    console.log('location in the login page: ',location)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form)
        console.log(form.get('email'))


        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:w-1/2 md:w-3/4 mx-auto text-center mt-10">
                <h1 className="text-2xl font-bold">Please Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="mt-5">Do not have an account? <Link className="font-bold text-blue-800" to='/register'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;