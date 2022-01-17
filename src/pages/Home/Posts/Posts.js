import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Posts.css';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

    useEffect(()=>{
        fetch('posts.json')
            .then(res=>res.json())
            .then(data=>setPosts(data));
    }, []);

    return (
        <section className="post" id="post">
            <div className="container min-vh-100">
                <h1 className="heading"><span>'</span> our posts <span>'</span></h1>

                <div className="box-container">
                    {
                        posts?.map(post => <Post key={post.id} post={post} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Posts;