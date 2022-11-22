module.exports = class DebutDto{
    title;
    difficulty;
    effectiveness;
    popularity;
    description;
    img_src;
    find_more_src;
    isWhite;


    constructor(model){
        this.title = model.title;
        this.difficulty = model.difficulty;
        this.effectiveness = model.effectiveness;
        this.popularity = model.popularity;
        this.description = model.description;
        this.img_src = model.img_src;
        this.find_more_src  = model.find_more_src;
        this.isWhite = model.isWhite;

    }
}