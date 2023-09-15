import Proptypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    console.log(bookmark)
    return (
        <div className='text-center bg-white rounded-lg p-5 mx-7 mb-5'>
            <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.proptypes = {
    bookmark: Proptypes.object
}
export default Bookmark;