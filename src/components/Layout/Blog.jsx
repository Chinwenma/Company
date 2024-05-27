import React from "react";
import "../../styles/blog.css";
import videoImg from '../../images/video.png'
import articleImg from '../../images/article.png'
import caseStudy from '../../images/case-study.png'



const blogData=[
  {
    imgUrl:videoImg,
    title:"Video",
    desc:'How to make a video blog',
    linkUrl:'#'
  },
  {
    imgUrl:articleImg,
    title:"Airtcles",
    desc:" Read some of our airtcles Read some of our airtcles",
    linkUrl:'#'
  },
  {
    imgUrl:caseStudy,
    title:"Case-Study,",
    desc:"How to make a video blog",
    linkUrl:'#'
  },
]


const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top_content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a view from
            <span className="highlight"> our recent blog</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {
            blogData.map((item, index) =>(
              <div className="blog__item" key={index}>
            <h2>{item.title}</h2>
            <div className="blog__img">
              <img src={item.imgUrl} alt="" />
            </div>
            <p className="description blog__desc">{item.desc}</p>
            <div>
              <a href={item.linkUrl} className="learn__more"><i class="ri-arrow-right-line"></i></a>
            </div>

          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;
