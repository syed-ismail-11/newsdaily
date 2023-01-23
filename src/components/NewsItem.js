import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
   
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ position: "absolute", right: "0" }}>
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img id="myimg"
            src={
              !imgUrl
                ? "https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="img-not-loaded"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"> {description}....</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "UnKnown"} <br /> On{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn RMbtn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
    
}
export default NewsItem
