import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    // const {title} = bookmarks
    return (
        <div className="md:w-1/3">
            <div className="ml-6 rounded-lg bg-[#3C2FEC1A] mt-8 mb-6">
                <h3 className="text-2xl font-bold text-[#6047EC] text-center border-[1px] border-[#6047EC] rounded-lg py-5">Spent time on read :</h3>

            </div>
            <div className="bg-[#1111110D] ml-6 rounded-lg py-5">
                <h2 className="text-2xl font-bold px-8 mb-5">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.prototypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;