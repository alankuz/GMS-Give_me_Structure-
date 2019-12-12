const secrets = {
  dbUri: 'mongodb+srv://alankuz:1234@gms-ifie9.mongodb.net/test?retryWrites=true&w=majority'

};

const getSecret = key => secrets[key];

module.exports = getSecret;
