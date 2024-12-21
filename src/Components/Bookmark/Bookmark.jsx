const Bookmark = ({blog}) => {

    const {title} = blog;

    return (
        <p className="w-full font-semibold text-[18px] p-[20px] mb-[16px] rounded-[8px] bg-white">{title}</p>
    );
};

export default Bookmark;