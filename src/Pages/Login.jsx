import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className=" mt-20 ">
            <h1 className="text-center text-6xl py-7">Login now!</h1>

        <form  className="max-w-xl mx-auto order-last ">
            <div className="border border-black rounded-lg p-6 shadow-xl bg-slate-50 ">

                <label className="form-control w-full max-w-lg">
                    <div className="label">
                        <span className="label-text text-lg">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                </label>
                
                <label className="form-control w-full   max-w-lg">
                    <div className="label">
                        <span className="label-text text-lg"> your Email</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                </label>

                <label className="form-control  text-lg w-full max-w-lg">
                    <div className="label mt-6">
                        <span className="label-text">Password</span>
                    </div>
                    <input type="password" placeholder="password" className="input input-bordered w-full max-w-lg" />
                </label>
                <button type="submit" className="btn w-full mt-6">
                    <FcGoogle className="text-2xl"></FcGoogle>
                     Google Sign in</button>
                <button type="submit" className="btn btn-error w-full my-6">Submit</button>
                <p>Allready login?</p>

            </div>
        </form>
    </div>
    );
};

export default Login;