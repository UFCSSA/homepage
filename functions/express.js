import functions from 'firebase-functions';
import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.post('/list', async (req, res) => {
  if (!req.body.access_token) {
    res.status(403).send('unknown access token');
    return;
  }

  const output = await axios.post(
    'https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=' +
      req.body.access_token,
    {
      type: 'news',
      offset: req.body.offset,
      count: 20,
    }
  );
  if (output.data.item) {
    output.data.item.forEach((target) => {
      delete target.content.news_item[0].content;
    });
    res.status(200).send(output.data.item);
  } else {
    console.error(output.data.errmsg);
    res.status(400).send(output.data.errmsg);
  }
});

export default functions.https.onRequest(app);
