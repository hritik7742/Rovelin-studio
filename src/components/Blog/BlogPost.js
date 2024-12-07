import React, { useState, useEffect } from 'react';
import { useParams }from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getBlogPost } from '../../utils/contentful';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <img
            src={file.url}
            alt={title}
            className="blog-content-image"
          />
        );
      },
    },
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getBlogPost(slug);
        console.log('Fetched post:', fetchedPost);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="blog-loading">Loading post...</div>;
  if (error) return <div className="blog-error">Error: {error}</div>;
  if (!post) return <div className="blog-not-found">Post not found</div>;

  return (
    <article className="blog-post">
      {post.fields.featuredImage && (
        <img 
          src={post.fields.featuredImage.fields.file.url} 
          alt={post.fields.title} 
          className="blog-post-image"
        />
      )}
      <h1>{post.fields.title}</h1>
      <div className="blog-post-meta">
        <time>{new Date(post.sys.createdAt).toLocaleDateString()}</time>
      </div>
      <div className="blog-post-content">
        {documentToReactComponents(post.fields.content, options)}
      </div>
    </article>
  );
};

export default BlogPost; 