
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';

import client, { getImageUrl } from "../../sanity";

type ArticleParams = {
  slug: string;
};

const Article = () => {
  const [postData, setPostData] = useState<any>();
  const { slug } = useParams<ArticleParams>();

  useEffect(() => {
    client.fetch(
      `*[slug.current == $slug]{
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
    .then(data => setPostData(data[0]))
    .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <h4>by {postData.name}</h4>
      </div>
      <img src={getImageUrl(postData.mainImage).width(200).url() ?? ''} alt={postData.title} />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </div>
  );
}

export default Article;