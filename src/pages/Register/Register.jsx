import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault()
        console.log(e)
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form)
        console.log(form.get('email'))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:w-1/2 md:w-3/4 mx-auto text-center mt-10">
                <h1 className="text-2xl font-bold">Please Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mt-5">Already have an account? <Link className="font-bold text-blue-800" to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;