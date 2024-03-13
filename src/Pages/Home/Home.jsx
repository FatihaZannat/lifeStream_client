import './home.css'
import Container from "../../Shared/Container";
import { Link } from 'react-router-dom';
const Home = () => {
    
    return (
      <div className=''> 
        
        <Container>
        <div className={`my-12 banner h-svh `}>

           <div className='text-white text ml-20 pt-32 '>
           <h1 className='text-5xl font-bold'>Donate blood ,save life!</h1> <br /><br />
            <h1 className='text-7xl font-bold'>your blood  <br /> 
           can bring smile, <br />
           in other persone life</h1>
           <div className='mt-12 '>
                <button className='btn text-white btn-error uppercase mx-5'><Link to='/registration'>Join as a donor</Link></button>
                <button className='btn text-white btn-error uppercase mx-5'><Link to="/search">Search Donor</Link></button>
            </div>
           </div>
        
            </div> 
           
       </Container>
      </div>
      
    );
};

export default Home;