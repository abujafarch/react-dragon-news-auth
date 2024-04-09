import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidNav from "../Shared/RightSideNav/RightSidNav";
import {useParams} from 'react-router-dom'

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1>{id}</h1>
                </div>
                <div>
                    <RightSidNav></RightSidNav>
                </div>
            </div>
        </div>
    );
};

export default News;