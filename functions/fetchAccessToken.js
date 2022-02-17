import functions from 'firebase-functions';
import admin from 'firebase-admin';
import axios from 'axios';
import 'dotenv/config';

admin.initializeApp();
const db = admin.firestore();

let runTimeOpts = {
  vpcConnector: 'cssaconnector',
  vpnConnectorEgressSettings: 'ALL_TRAFFIC',
};

export default functions
  .runWith(runTimeOpts)
  .pubsub.schedule('every 115 minutes')
  .onRun(async (context) => {
    for (let i = 0; i < 5; i++) {
      const res = await axios.get(
        `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}`
      );
      if (res.errcode) {
        console.log(res.errmsg);
      } else {
        db.collection('access_token')
          .doc('access_token')
          .set({ access_token: res.access_token });
        return;
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
    throw new Error('Fail to fetch access token!');
  });
