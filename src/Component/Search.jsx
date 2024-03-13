import { useForm } from "react-hook-form";
import AxiosPublic from "../Hooks/AxiosPublic";
import { useState } from "react";

const Search = () => {
    const axios = AxiosPublic()
    const [donorData, setDonorData] = useState([])

    const { register, reset,  handleSubmit} = useForm()

    const onSubmit = async data => {
        // console.log(data);
        const Search = {
            blood: data.blood,
            district: data.district,
            upozila: data.upozila
        }
       const usersData = await axios.get('/users', {params: Search})
       setDonorData(usersData.data);
    }
    console.log(donorData);

    return (
        <div>
            <div className=" my-8" ><h1 className="text-5xl text-red-700 text-center">Search here</h1>
            </div>
             <form  onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto order-last ">
                <div className="border border-black rounded-lg p-6 shadow-xl bg-slate-50 ">

                

                

                    <label className="form-control mt-6 text-lg w-full max-w-lg">
                                              <select {...register("blood", { required: true })} defaultValue={'default'} className="select mt-6 text-lg select-bordered w-full max-w-lg">
                            <option value='default' disabled > blood group?</option>
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
                            <option value='default' disabled >District</option>
                            <option>Naogaon</option>
                            <option>Rajshahi</option>
                            <option>Joypur hat</option>

                        </select>
                        <select {...register("upozila", { required: true })} defaultValue={'default'} className="select select-bordered mt-6 text-lg w-full max-w-lg">
                            <option value='default' disabled >Upazila</option>
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

                        
                         </label>
                    
                    <button type="submit" className="btn btn-error w-full my-6">Search</button>
                    

                </div>
            </form>
             
             {/* table  */}
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {donorData.map(donor => <tr key={donor.id}> 
        <td>1</td>
        <td>{donor.name}</td>
        <td>{donor.email}</td>
        <td>{donor.blood}</td>
      </tr>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Search;
     
     
