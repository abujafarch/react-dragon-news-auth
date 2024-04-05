import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=''>
            <img src={logo} className='mx-auto mt-10'/>
            <p className="text-lg text-center text-[#706F6F] mt-3">Journalism Without Fear or Favour</p>
            <p className="text-lg text-center text-[#706F6F] mt-2 font-medium "> <span className='text-[#403F3F] text-xl'>{ moment().format('dddd')},</span> { moment().format('MMMM, DD, YYYY')}</p>
        </div>
    );
};

export default Header;