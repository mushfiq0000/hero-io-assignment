import { Link } from "react-router";
import errorImg from "../../assets/confusion.jpg";
import galaxyImg from "../../assets/galaxy.jpg"

const AppsNotFound = () => {
    return (
        <div className="bg-white py-40 ">
                <div className="md:flex justify-around items-center">
                <img className="w-100" src={errorImg} alt="" />
              <div className="text-center py-7">
                <h1 className="md:text-[300px] text-9xl font-bold bg-cover bg-clip-text bg-center text-transparent"
                                style = {{backgroundImage:`url(${galaxyImg})`}}>404</h1>
                <p className="font-semibold text-gray-600">APP NOT FOUND</p>
                <p>The app looking for might have been removed <br/> had it's name changed or is temporarily unavailable</p>
              </div>
              </div>
              <div className="flex justify-center ">
                <Link to="/" className = "btn bg-gradient-to-r px-7 from-[#632ee3] to-[#9f62f2] text-white">Go to HOME</Link>
              </div>
              </div>
    );
};

export default AppsNotFound;