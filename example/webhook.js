/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: 0 */
require('dotenv').config()
const Payvision = require('../src/sdk')

const init = async () => {
  const payload = '{"Id":"8860841c-0a6a-45f4-adea-7264d3bccdbf","Type":"Transaction.Create","CreateTime":"2019-03-01T14:16:01.5260689Z","Message":"A payment was created.","Payload":{"result":0,"description":"Ok","header":{"requestTimestamp":"2019-03-01T14:15:42.9900834Z","requestCode":"205.ed700f07-f8a8-4118-8fed-94067a7de363"},"body":{"card":{"approvalCode":"361979","expiryMonth":"3","expiryYear":"2020","firstSixDigits":"400000","holderName":"John Doe","lastFourDigits":"0002"},"transaction":{"amount":15,"currencyCode":"EUR","action":"payment","id":"a57dd300-0f4c-475b-8302-321f590dd66e","trackingCode":"testbart-1551449743","orderId":"2f5ab147-1731-42c6-8e35-143f2c8bac78","brandId":1010}}}}'
  const eventSignature = 'eyJhbGciOiAiSFMyNTYifQ.ew0KICAidHJhbnNtaXNzaW9uSWQiOiAiODg2MDg0MWMtMGE2YS00NWY0LWFkZWEtNzI2NGQzYmNjZGJmIiwNCiAgInRpbWVzdGFtcCI6ICIyMDE5LTAzLTAxVDE0OjE2OjAxLjUyNjA2ODlaIiwNCiAgImhvb2tJZCI6ICJkMTkwNTA0Yi00ZDI1LWU5MTEtODExYi0wMDUwNTZhZDEzYjQiLA0KICAiY3JjMzIiOiAiLWhlNExRIg0KfQ.cY1OeJ8RqCtKGjmtNi1cGVp-9s-6gY6AXGGWW65ti9A'
  const payvision = new Payvision({
    // global configuration data
    username: process.env.TEST_API_USERNAME,
    password: process.env.TEST_API_PASSWORD,
    businessId: process.env.TEST_BUSINESS_ID,
    baseUri: process.env.TEST_API_BASE_URL,
    webhookSecret: process.env.TEST_JWT_SECRET,
    debug: true,
  })

  let result
  try {
    result = await payvision.parseWebhook(payload, eventSignature)
  } catch (err) {
    console.log('Error parsing webhook')
    console.log(err)
  }
  console.log(result)
}
init()
