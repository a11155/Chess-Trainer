
const path = require("path");

const ApiErorr = require('../exceptions/api-error');
const debutService = require("../service/debut-service");
class DebutController{
    async createDebut(req, res, next){
        try{
           
            const {    
                title,
                difficulty,
                effectiveness,
                popularity,
                description,
                img_src,
                find_more_src,
                isWhite} = req.body;
            
            const debutData = await debutService.createDebut(
                title,
                difficulty,
                effectiveness,
                popularity,
                description,
                img_src,
                find_more_src,
                isWhite
                );

            return res.json(debutData);
        }
        catch(e){
            next(e);
        }
    }

    async getStudy(req, res, next){
        try{

            const debuts = await debutService.getDebuts();

            res.render('study', {debuts:debuts});
        }
        catch(e){
            next(e);
        }
    }

    async getWhiteStudy(req, res, next){
        try{

            const debuts = await debutService.getWhiteDebuts();

            res.render('study_white', {debuts:debuts});
        }
        catch(e){
            next(e);
        }
    }


    async getBlackStudy(req, res, next){
        try{

            const debuts = await debutService.getBlackDebuts();

            res.render('study_black', {debuts:debuts});
        }
        catch(e){
            next(e);
        }
    }

}

module.exports = new DebutController();