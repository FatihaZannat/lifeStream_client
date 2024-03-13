import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const imgbbApi = import.meta.env.VITE_imgbb_api
// console.log(imgbbApi);
const url = `https://api.imgbb.com/1/upload?key=${imgbbApi}`

const Registration = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { googleSignin, createUser, updateName } = UseAuth()
    // console.log(user.email);

    const onSubmit = async (formData) => {
        // console.log(formData);
       
        const img = formData.img[0]
        try {
            const { data } = await axios.post(url, { image: img }, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            // console.log(data.data.display_url);
            const photo = (data.data.display_url);

            const userData = {
                name: formData.name,
                email: formData.email,
                blood: formData.blood,
                district: formData.district,
                upozila: formData.upozila,
                image: photo,
                status: "active"
            }
            // console.log(userData);

            if (data.success) {
                console.log('jalskdjfkldjfkd');
                // console.log(formData.email, formData.password);
                const res = await createUser(formData.email, formData.password)

                await updateName(formData.name, photo)
                console.log(res)
                const user = await axios.post('http://localhost:3000/users', userData)
                console.log(user);
                reset()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "successfully login",
                    showConfirmButton: false,
                    timer: 1000
                  });

            }

        } catch (error) {
            console.log(error.message);
        }

    }



    return (
        <div className=" mt-20 ">

            <h1 className="text-center text-6xl py-7">Register now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto order-last ">
                <div className="border border-black rounded-lg p-6 shadow-xl bg-slate-50 ">

                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text text-lg">What is your name?</span>
                        </div>
                        <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        {errors.name && <span>This field is required</span>}
                    </label>

                    <label className="form-control w-full   max-w-lg">
                        <div className="label">
                            <span className="label-text text-lg"> your Email</span>
                        </div>
                        <input type="email" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                    </label>

                    <label className="form-control mt-6 text-lg w-full max-w-lg">
                        <input {...register("img")} type="file" className="file-input w-full max-w-lg" />
                        <select {...register("blood", { required: true })} defaultValue={'default'} className="select mt-6 text-lg select-bordered w-full max-w-lg">
                            <option value='default' disabled >What is your blood group?</option>
                            <option>A</option>
                            <option>A-</option>
                            <option>AB</option>
                            <option>AB-</option>
                            <option>B</option>
                            <option>B-</option>
                            <option>O</option>
                            <option>O-</option>

                        </select>

                        <select {...register("district", { required: true })} defaultValue={'default'} className="select mt-6 text-lg select-bordered w-full max-w-lg">
                            <option value='default' disabled >Your District</option>
                            <option>Naogaon</option>
                            <option>Rajshahi</option>
                            <option>Joypur hat</option>

                        </select>
                        <select {...register("upozila", { required: true })} defaultValue={'default'} className="select select-bordered mt-6 text-lg w-full max-w-lg">
                            <option value='default' disabled >Your Upazila</option>
                            <option>Shapahar</option>
                            <option>Patnitola</option>
                            <option>Naogaon</option>
                            <option>Rajshahi</option>
                            <option>Bagha</option>
                            <option>Mohon pur</option>
                            <option>joypur hat</option>
                            <option>Panch bibi</option>
                            <option>Akkel pur</option>

                        </select>

                        <div className="label mt-6">
                            <span className="label-text">Password</span>
                        </div>
                        <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered w-full max-w-lg" />
                    </label>
                    <button onClick={googleSignin} type="submit" className="btn w-full mt-6">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        Google Sign in</button>
                    <button type="submit" className="btn btn-error w-full my-6">Submit</button>
                    <p>Allready login?</p>

                </div>
            </form>
        </div>
    );
};

export default Registration;