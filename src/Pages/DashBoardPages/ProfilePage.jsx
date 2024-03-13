
import UseAuth from "../../Hooks/UseAuth";

const ProfilePage = () => {
    const {user} = UseAuth()
    return (

     
      <div className=''>
        <h1 className="text-3xl text-center  m-10">Welcome {user?.displayName}</h1>
        <hr />
        {/* donation req section */}
        <div>
            donatonnnnnnnnnnn
        </div>

      </div>
    );
};

export default ProfilePage;