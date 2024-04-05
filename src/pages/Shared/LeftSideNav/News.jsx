import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'

import { MdOutlineDateRange } from "react-icons/md";


const News = () => {
    return (
        <div className='mt-7 space-y-7'>
            <div>
                <img src={image1} />
                <h1 className='font-semibold text-xl text-[#403F3F] mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='mt-1 flex justify-between items-center'>
                    <p className='text-[#403F3F] font-semibold'>Sports</p>
                    <p className='flex items-center gap-2 text-[#9F9F9F] font-medium'><span className='text-2xl'><MdOutlineDateRange></MdOutlineDateRange></span> Jan 4, 2022</p>
                </div>
            </div>
            <div>
                <img src={image2} />
                <h1 className='font-semibold text-xl text-[#403F3F] mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='mt-1 flex justify-between items-center'>
                    <p className='text-[#403F3F] font-semibold'>Sports</p>
                    <p className='flex items-center gap-2 text-[#9F9F9F] font-medium'><span className='text-2xl'><MdOutlineDateRange></MdOutlineDateRange></span> Jan 4, 2022</p>
                </div>
            </div>
            <div>
                <img src={image3} />
                <h1 className='font-semibold text-xl text-[#403F3F] mt-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='mt-1 flex justify-between items-center'>
                    <p className='text-[#403F3F] font-semibold'>Sports</p>
                    <p className='flex items-center gap-2 text-[#9F9F9F] font-medium'><span className='text-2xl'><MdOutlineDateRange></MdOutlineDateRange></span> Jan 4, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default News;