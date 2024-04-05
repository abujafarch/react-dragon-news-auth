import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const NewsCard = ({ news }) => {

    const { title, author, image_url, details } = news
    return (
        <div>
            <div className="flex bg-[#F3F3F3] justify-between py-3 px-5">
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

            <h1 className="font-bold text-xl text-[#403F3F] mt-3 mb-5">{title}</h1>
            <img className="mb-8" src={image_url} />
            <p>
                {
                    details.length > 300 ? details.slice(0, 300) : details
                }
                <button>Read More</button>
            </p>
        </div>
    );
};

export default NewsCard;