import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Newses from "./Newses";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl text-[#403F3F] font-semibold">All Category</h2>
            <div className="flex flex-col gap-4 mt-5">
                {
                    categories.map(category=><NavLink to='/about' className='px-5 py-4 text-[#9F9F9F] font-semibold text-xl' key={category.id}>{category.name}</NavLink>)
                }
            </div>
            <div>
                <Newses></Newses>
            </div>
        </div>
    );
};

export default LeftSideNav;