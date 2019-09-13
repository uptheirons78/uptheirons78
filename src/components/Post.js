import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

const Post = ({ post }) => {
  console.log(post);
  const { title, date, path, tags } = post.frontmatter;

  return (
    <article className="post">
      <h2 className="post__title">
        <Link to={path} className="post__title-link">
          {title}
        </Link>
      </h2>
      <div className="post__meta">
        <span className="post__date">Published: {date}</span>
        {tags ? (
          <div className="tags-container">
            <ul className="taglist">
              <span>Tags: </span>
              {tags.map(tag => (
                <li className="taglist__item" key={`tag${tag}`}>
                  <Link
                    className="taglist__link"
                    to={`/tags/${kebabCase(tag)}/`}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <span className="post__read">{post.timeToRead} min read</span>
      <div className="post__excerpt">
        <p>
          {post.excerpt}{" "}
          <Link to={path} className="post__excerpt-link">
            Read More
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Post;
