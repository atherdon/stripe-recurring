var dotenv = require('dotenv');
// // There's no need to check if .env exists, dotenv will check this 
// // for you. It will show a small warning which can be disabled when 
// // using this in production.

dotenv.load();




module.exports = {

  db: process.env.MONGOLAB_URI || 'mongodb://localhost/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || '34SDgsdgspxxxxxxxdfsG', //you can use a long random string

  // we'll use namecheap email server
  // mailgun: {
  //   apiKey: process.env.MAILGUN_API_KEY || '',
  //   domain: process.env.MAILGUN_DOMAIN  || ''
  // },

  emailServer: {

   user     : "admin@easymail.io", 
   password : "ArtJeremieIO123", 
   host     : "smtp.your-email.com", 
   ssl      : true,
   port     : "465"
  }


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

  stripeNextVersion: {
    "public": {
      "plans": [
       {
        name    : "Quarterly",
        id      : "quarterly",
        interval: "month",
        interval_count: "3",
        currency: "eur",
        amount  : 1485, //0
      },
      {
        name    : "Yearly",
        id      : "yearly",
        interval: "year",
        currency: "eur",
        amount  : 4560, //0
      }
    ],
      "stripe": { //process.env.STRIPE_KEY
        "testPublishableKey": "pk_test_thzSoJYFgDc9t97sgrZ05KH9",
        "livePublishableKey": "pk_live_"
      }
  },
  "private": {
    "stripe": { //process.env.STRIPE_PUB_KEY 
      "testSecretKey": "sk_test_2kBJjZnrNHcTtgDXUuuYzSsx",
      "liveSecretKey": "sk_live_"
    }
  }
} 


  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-96603282-1'
};