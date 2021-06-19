import { useState, useEffect } from "react";
import { BlogList } from "./BlogList";

export function Home () {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);



    
    
    useEffect(()=> {
        fetch ('http://localhost:8000/blogs')
            .then(response => { 
                return response.json ()})
                .then((data) => {setIsPending(false); setBlogs(data)})

    },[]);

    return (
        <div className='home'>
        { isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title='All Blogs!' />}

       
            
        </div>
    )
}