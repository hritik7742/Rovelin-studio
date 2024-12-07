import { createClient } from 'contentful';
import contentfulConfig from '../config/contentful';

const client = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
  environment: contentfulConfig.environment
});

// Add this function to debug available content types
export const getContentTypes = async () => {
  try {
    const types = await client.getContentTypes();
    console.log('Available content types:', types.items.map(type => ({
      id: type.sys.id,
      name: type.name
    })));
    return types;
  } catch (error) {
    console.error('Error fetching content types:', error);
    throw error;
  }
};

export const getBlogPosts = async () => {
  try {
    console.log('Fetching blog posts...');
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt'
    });
    
    console.log('API Response:', entries);
    return entries.items || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  try {
    console.log('Fetching blog post with slug:', slug);
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug // Changed from [match] to exact match
    });

    console.log('Blog post response:', entries);

    if (!entries.items.length) {
      console.log('No post found with slug:', slug);
      return null;
    }

    return entries.items[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}; 