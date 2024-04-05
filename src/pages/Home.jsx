
import BreakingNews from './BreakingNews';
import Header from './Shared/Header/Header';
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import Navbar from './Shared/Navbar/Navbar';
import RightSidNav from './Shared/RightSideNav/RightSidNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {/* <h2 className='text-3xl font-poppins font-bold'>This is home</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border'>
                    <h2 className='text-2xl'>News Coming Soon.......</h2>
                </div>
                <div className=''>
                    <RightSidNav></RightSidNav>
                </div>
            </div>
        </div>
    );
};

export default Home;