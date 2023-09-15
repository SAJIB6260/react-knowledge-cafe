import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className=' md:w-full py-8' src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className=' text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-center text-xl'>{reading_time}  min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=' ml-2 text-xl text-red-600 text-center'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-[40px] font-bold my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-4 text-xl text-[#11111199]' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;