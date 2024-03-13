import { Link } from 'react-router-dom';
import errorImg from '../assets/error/3747371.jpg'
const ErrorPage = () => {
    return (
        <div className='max-w-[1000px] mx-auto'>
            <img className='' src={errorImg} alt="" />
            <button className='btn btn-lg btn-error'>
                <Link to='/'>Go to  home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;