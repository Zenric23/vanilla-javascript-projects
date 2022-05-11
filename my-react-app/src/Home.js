
import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog=> blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    return (
        <div className='home'>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title='All blogs'  />}
            {/* <BlogList blogs={blogs.filter(blog=> blog.author === 'mario')} title="Mario's blog" 
            handleDelete={handleDelete} /> */}
        </div>
    )
}

/* [
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'toshi', id: 2},
        {title: 'Web dev top this', body: 'lorem ipsum...', author: 'mario', id: 3}
    ] */
