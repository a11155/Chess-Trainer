const ApiErorr = require('../exceptions/api-error');

module.exports = function(err, req, res, next){
    console.log(err);
    if(err instanceof ApiErorr){

        return res.status(err.status).render('error', {status:err.status, message:err.message});
        //return res.status(err.status).json({message: err.message, errors:err.errors});
    }
    return res.status(500).render('error', {status:err.status, message:err.message})
}