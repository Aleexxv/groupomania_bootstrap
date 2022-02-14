const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log( 'token :', token)
        const decodedToken = jwt.verify(token, 'e0114be42b0d8f6fca4497c585ee1057052a5419083a284d53b7e4aa6d5625ca');
        // console.log('decodedToken : ', decodedToken)
        const userId = decodedToken.userId;
        // console.log('userId : ', userId)
        req.body.userId = userId;
        next();
    } catch {
        res.status(401).json({
            error: new Error(console.log('requête invalide !'))
        });
    }
};