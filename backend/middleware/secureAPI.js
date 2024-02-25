let secureAPI = (req, res, next) => {
  console.log('ami secure', req.headers);
  if (req.headers.authorization == '3MwAN7UdsIAb9PM') {
    next();
  } else {
    res.send({ error: 'Invalid URL' });
  }
};

module.exports = secureAPI;
