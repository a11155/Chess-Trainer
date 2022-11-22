const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next){
    try{
        if(!req.user.isActivated)
            return next(ApiError.NotActivatedError());

        next();

    } catch(e){
        return next(ApiError.UnathorizedError());
    }
}