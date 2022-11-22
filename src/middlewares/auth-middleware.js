const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next){
    try{
        const authorizationHeader = req.headers.authorization;
        console.log('\n\n\n', req.cookies, '\n\n');
        if(!req.cookies.accessToken){
            return next(ApiError.UnathorizedError());
        }

        const refreshToken = req.cookies.refreshToken;

        console.log("Access:    ", refreshToken , '\n\n\n\n ENDED\n');
        if(!refreshToken){
            return next(ApiError.UnathorizedError());
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        console.log("User Data:    ", userData);
        if(!userData) {
            return next(ApiError.UnathorizedError());
        }
        
        req.user = userData;
        next();

    } catch(e){
        return next(ApiError.UnathorizedError());
    }
}