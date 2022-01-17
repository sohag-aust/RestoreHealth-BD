import React from 'react';

const Post = (props) => {
    const {id, title, description, img, date, aos} = props.post;

    return (
        <div className="box" data-aos={aos}>
            <img src={img} alt="" />
            <div className="content">
                <span>{date}</span>
                <a href="#"><h3>{title}</h3></a>
                <p>{description}</p>
                <a href="#"><button className="button">More</button></a>
            </div>
        </div>
    );
};

export default Post;