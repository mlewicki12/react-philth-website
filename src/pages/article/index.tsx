
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';

import client, { getImageUrl } from "../../sanity";
import styles from './style.module.scss';

type ArticleParams = {
  slug: string;
};

const Article = () => {
  const [postData, setPostData] = useState<any>();
  const { slug } = useParams<ArticleParams>();

  useEffect(() => {
    client.fetch(
      `*[_type == "post" && slug.current == $slug]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name
      }`, {slug}
    )
    .then(data => {
      // returns empty array if slug doesn't exist
      setPostData(data[0]);
    })
    .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className={styles.articlePage}>
      <div className={styles.info}>
        <h1>{postData.title}</h1>
        <p><span style={{fontStyle: 'italic'}}>by {postData.name}</span></p>
      </div>
      <div className={styles.content}>
        <BlockContent
          blocks={postData.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
      <img src={getImageUrl(postData.mainImage).url() ?? ''} alt={postData.title} />
    </div>
  );
}

export default Article;