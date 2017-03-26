var dotenv = require('dotenv');
// // There's no need to check if .env exists, dotenv will check this 
// // for you. It will show a small warning which can be disabled when 
// // using this in production.

dotenv.load();




module.exports = {

  db: process.env.MONGOLAB_URI || 'mongodb://localhost/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || '34SDgsdgspxxxxxxxdfsG', //you can use a long random string

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN  || ''
  },


  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || '',
    stripePubKey: process.env.STRIPE_PUB_KEY || '',
    defaultPlan: 'free',
    plans: ['free', 'silver', 'gold', 'platinum'],
    planData: {
      'free': {
        name: 'Free',
        price: 0
      },
      'silver': {
        name: 'Silver',
        price: 9
      },
      'gold': {
        name: 'Gold',
        price: 19
      },
      'platinum': {
        name: 'Platinum',
        price: 29
      }
    }
  },

  // stripeNewPlans: {

  //   "basic-monthly": {
  //     name: "Basic Plan",
  //     id: "basic-monthly",
  //     interval: "month",
  //     currency: "usd",
  //     amount: 0,
  //   }

  // },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};