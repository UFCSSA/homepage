import React, { useEffect, useState } from 'react';
import { firestore } from '../lib/firebase';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let key;
      const res = await firestore
        .collection('access_token')
        .doc('access_token')
        .get();
      if (!res.exists) {
        console.error('fail to retrive access key');
        return;
      }
      key = res.data().access_token;
      console.log(key);

      const result = await axios.post(
        'https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=' +
          key,
        {
          type: 'news',
          offset: 0,
          count: 20,
        }
      );
      if (result.data.item) {
        console.log(result.data.item);
        setPosts(result.data.item);
      } else {
        console.error(result.data.errmsg);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.media_id}>{post.content.news_item[0].url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
