import React from "react";
import NotFound from "./NotFound";

function NewsItem(props) {
  return (
    //NewsItem card
    <div className="my-2">
      <p style={{ fontSize: "0.8rem", marginBottom: "0rem" }}>
        {new Date(props.date).toGMTString()}
      </p>
      <div className="card">
        {props.imageUrl?
        <img
          src={props.imageUrl}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="not-found"
        />:<NotFound/>}
        <div className="card-body">
          <p
            style={{
              width: "fit-content",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
              color: "red",
            }}
          >
            {props.source}
          </p>
          {/* // Title Or Description nahi to message show kare */}
          <h5 className="card-title">
            {props.title ? props.title : "Don't have a title"}
          </h5>
          <p className="card-text">
            {props.description ? props.description : "Don't have a description"}
          </p>
          {/* //News ke url par le jayega */}
          <a
            href={props.newsUrl}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
