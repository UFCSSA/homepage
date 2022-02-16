import functions from 'firebase-functions';
import admin from 'firebase-admin';
import fetch from 'node-fetch';
import 'dotenv/config';

admin.initializeApp();
const db = admin.firestore();

let runTimeOpts = {
  vpcConnector: 'cssaconnector',
  vpnConnectorEgressSettings: 'ALL_TRAFFIC',
};

export const testFunc = functions
  .runWith(runTimeOpts)
  .https.onRequest(async (req, res) => {
    const response = await fetch(
      `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}`,
      { method: 'GET' }
    );
    const data = await response.json();

    if (data.errcode) {
      console.log(data.errmsg);
    } else {
      db.collection('access_token')
        .doc('access_token')
        .set({ access_token: data.access_token });
    }
    res.json({ result: data });
  });
