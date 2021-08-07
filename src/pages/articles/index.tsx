
import { useState, useEffect } from 'react';
import { PostBuilder } from '../../schema';
import sanityClient from '../../sanity';

import styles from './style.module.scss';

const [query, type] = PostBuilder.pick([
  'title', 'slug', 'author', 'publishedAt'
]).use();

const Articles = () => {
  const [allPosts, setAllPosts] = useState<typeof type>();

  useEffect(() => {
    sanityClient.fetch<typeof type>(query)
      .then(data => {
        debugger;
        setAllPosts(data);
      })
      .catch(console.error);
  })

  return (
    <div>
      {allPosts?.map(post => ( 
        <div>
          <p>{post.title}</p>
          <p>{post.slug.current}</p>
        </div>  
      ))}
    </div>
  );
}

export default Articles;