import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, author, image_url, details, rating, total_view, _id } = news
    return (
        <div className="border rounded-md">
            <div className="flex bg-[#F3F3F3] justify-between py-3 px-5 rounded-t-md">
                <div className=" flex items-center gap-4">
                    <img className="rounded-full w-10" src={author.img} />
                    <div>
                        <p className="font-semibold text-[#403F3F]">{author.name}</p>
                        <p className="text-[#706F6F] text-sm">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <p className="text-3xl text-[#706F6F]"><CiBookmark></CiBookmark></p>
                    <p className="text-3xl text-[#706F6F]"><CiShare2></CiShare2></p>
                </div>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-xl text-[#403F3F] mt-3 mb-5">{title}</h1>
                <img className="mb-8" src={image_url} />
                <p className="flex flex-col justify-start items-start">
                    {
                        details.length > 300 ? details.slice(0, 300) : details
                    }
                    <Link to={`/news/${_id}`}>
                        <button className="font-semibold text-[#F75B5F]">Read More</button>
                    </Link>
                </p>
                <hr className="my-5" />
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-1 items-center text-2xl text-[#FF8C47]">
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <p className="text-[#706F6F] font-medium">{rating.number}</p>
                    </div>
                    <p className="flex gap-3 items-center text-[#706F6F] font-medium">
                        <IoEyeSharp className="text-2xl"></IoEyeSharp>
                        {total_view}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;