module.exports = class ApiError extends Error{
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnathorizedError(){
        
        return new ApiError(401, "User not authorized");
    }

    static BadRequest(message, errors =[]){
        return new ApiError(400, message, errors);
    }

    static NotFound(){
        return new ApiError(404, "Not Found");
    }

    static NotActivatedError(){
        return new ApiError(401, "User's account is not activated");
    }
}