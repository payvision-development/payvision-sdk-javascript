require('dotenv').config()

module.exports = {
  globals: {
    payvisionConfig: {
      username: process.env.TEST_API_USERNAME,
      password: process.env.TEST_API_PASSWORD,
      businessId: process.env.TEST_BUSINESS_ID,
      baseUri: process.env.TEST_API_BASE_URL,
    },
  },
}
