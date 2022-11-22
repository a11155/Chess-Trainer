const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model')

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn:'30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await tokenModel.findOne({user: userId});
        if(tokenData){
            await tokenModel.updateOne({user: userId}, {refreshToken: refreshToken});
            return;
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    }

    async removeToken(refreshToken){
        const tokenData = await tokenModel.deleteOne({refreshToken});
        return tokenData;
    }

    async findToken(refreshToken){
        const tokenData = await tokenModel.findOne({refreshToken});
        return tokenData;
    }

    validateAccessToken(token){
        try{
            console.log(token);
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch(e){
            return null;
        }
    }

    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch(e){
            return null;
        }
    }


    parseToken(token){
        try{
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            console.log(base64);
            return JSON.parse(atob(base64));  
        } catch(e){
            return null;
        }
    }
}

module.exports = new TokenService();