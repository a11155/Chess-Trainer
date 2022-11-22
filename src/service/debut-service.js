const DebutModel = require('../models/debut-model')
const DebutDto = require('../dtos/debut-dto');
const ApiError = require('../exceptions/api-error');
class DebutService{
    async createDebut(title,
        difficulty,
        effectiveness,
        popularity,
        description,
        img_src,
        find_more_src,
        isWhite){
   

        const debut = await DebutModel.create(
            {title,
                difficulty,
                effectiveness,
                popularity,
                description,
                img_src,
                find_more_src,
                isWhite
            });
     
        const userDto = new DebutDto(debut);
        return { debut: userDto};
    }

    async getDebuts(){
        
        const debuts = await DebutModel.find();
        return debuts;
    }

    async getWhiteDebuts(){
        
        const debuts = await DebutModel.find({
            isWhite:true
        });
        return debuts;
    }

    async getBlackDebuts(){
        
        const debuts = await DebutModel.find({
            isWhite:false
        });
        return debuts;
    }
}

module.exports = new DebutService();