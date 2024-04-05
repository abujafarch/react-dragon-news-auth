
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import learnMoreBg from '../../../assets/bg.png'
const RightSidNav = () => {
    return (
        <div>
            <div className="mb-7">
                <h2 className="text-xl font-semibold mb-5">Login With</h2>
                <button className="flex gap-2 items-center border-2 rounded-lg py-2 px-4 w-full border-[#427dec] text-[#427dec] mb-2">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="flex gap-2 items-center border-2 rounded-lg py-2 px-4 w-full border-[#181818] text-[#181818] mb-2">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="mb-5">
                <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
                <button className="flex gap-2 text-[#706F6F] font-medium items-center border-2 rounded-t-lg py-3 px-4 w-full border-[#E7E7E7]">
                    <span className="bg-[#4e4e4e13] p-[6px] text-[#3B599C] rounded-full"><FaFacebookF></FaFacebookF></span>
                    Facebook
                </button>
                <button className="flex gap-2 text-[#706F6F] font-medium items-center border-x-2 py-3 px-4 w-full border-[#E7E7E7]">
                    <span className="bg-[#4e4e4e13] p-[6px] text-[#58A7DE] rounded-full"><FaTwitter></FaTwitter></span>
                    Twitter
                </button>
                <button className="flex gap-2 text-[#706F6F] font-medium items-center border-2 rounded-b-lg py-3 px-4 w-full border-[#E7E7E7]">
                    <span className="bg-[#4e4e4e13] p-[6px] text-[#D82D7E] rounded-full"><FaInstagram></FaInstagram></span>
                    Instagram
                </button>
            </div>
            <div className="p-4 bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
                <div className="space-y-5">
                    <img src={qZone1}/>
                    <img src={qZone2}/>
                    <img src={qZone3}/>
                </div>
            </div>

            <div className='bg-learn-more-bg mt-5 h-[510px] px-8 flex flex-col items-center justify-center'>
                <h1 className="font-bold text-[30px] text-center mb-5 text-white">Create an Amazing Newspaper</h1>
                <p className="text-center text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="text-white font-semibold text-xl text-center bg-[#D72050] p-4 mt-8">Learn More</button>
            </div>
        </div>
    );
};

export default RightSidNav;