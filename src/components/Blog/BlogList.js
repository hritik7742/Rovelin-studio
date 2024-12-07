import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { getBlogPosts } from '../../utils/contentful';
import './Blog.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Rich text options for the excerpt
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const text = node.content
          .map(content => {
            if (content.nodeType === 'text') return content.value;
            return '';
          })
          .join('');
        return text.substring(0, 150) + '...';
      },
      [BLOCKS.EMBEDDED_ASSET]: () => null,
      [BLOCKS.HEADING_1]: () => null,
      [BLOCKS.HEADING_2]: () => null,
      [BLOCKS.HEADING_3]: () => null,
      [BLOCKS.HEADING_4]: () => null,
      [BLOCKS.HEADING_5]: () => null,
      [BLOCKS.HEADING_6]: () => null,
      [BLOCKS.UL_LIST]: () => null,
      [BLOCKS.OL_LIST]: () => null,
      [BLOCKS.QUOTE]: () => null,
      [BLOCKS.HR]: () => null,
    },
    renderMark: {
      [MARKS.BOLD]: text => text,
      [MARKS.ITALIC]: text => text,
      [MARKS.UNDERLINE]: text => text,
      [MARKS.CODE]: text => text,
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getExcerpt = (post) => {
    if (post.fields.excerpt) {
      return post.fields.excerpt;
    }
    if (post.fields.content) {
      try {
        const firstParagraph = post.fields.content.content
          .find(item => item.nodeType === 'paragraph');
        
        if (firstParagraph) {
          const text = firstParagraph.content
            .map(content => content.value || '')
            .join('')
            .substring(0, 150);
          return text + '...';
        }
      } catch (err) {
        console.error('Error extracting excerpt:', err);
      }
    }
    return 'Read more...';
  };

  if (loading) return (
    <div className="blog-loading">
      <div className="loading-spinner"></div>
    </div>
  );
  
  if (error) return <div className="blog-error">Error: {error}</div>;
  if (!Array.isArray(posts) || posts.length === 0) return <div className="blog-empty">No posts found</div>;

  return (
    <div className="blog-list">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Discover insights, strategies, and updates from the Rovelin team</p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.sys.id} className="blog-card">
            {post.fields.featuredImage && (
              <img 
                src={post.fields.featuredImage.fields.file.url} 
                alt={post.fields.title} 
                className="blog-card-image"
              />
            )}
            <div className="blog-card-content">
              <div className="blog-meta">
                <time>{new Date(post.sys.createdAt).toLocaleDateString()}</time>
              </div>
              <h2>{post.fields.title}</h2>
              <div className="blog-excerpt">
                {getExcerpt(post)}
              </div>
              <Link 
                to={`/blog/${post.fields.slug}`} 
                className="read-more"
              >
                Read More 
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList; 