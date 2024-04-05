import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 items-center gap-4 mt-7">
            <button className="bg-[#D72050] px-6 py-2 text-white font-medium text-xl">Latest</button>
            <Marquee className="text-[#403F3F] font-semibold text-lg" speed={60} pauseOnHover={true}>
                Major Tech Company Unveils Revolutionary AI Breakthrough Set to Transform Industries Worldwide. Experts Predict Dramatic Shifts in Business Landscape as Innovation Surpasses Previous Limits. 
            </Marquee>
        </div>
    );
};

export default BreakingNews;