
const path = require('path');

class HtmlController{

    getIndex(req, res, next){
        try{
            res.sendFile(path.join(__dirname, '..', '/public/index.html'));
        }
        catch(e){
            next(e);
        }
    }

    getLogin(req, res, next){
        try{
            res.sendFile(path.join(__dirname, '..', '/public/login.html'));
        }
        catch(e){
            next(e);
        }
    }

    getHome(req, res, next){
        try{
            res.render('home');
        }
        catch(e){
            next(e);
        }
    }

    getRegistration(req, res, next){
        try{
            res.sendFile(path.join(__dirname, '..', '/public/registration.html'));
        }
        catch(e){
            next(e);
        }
    }
    getPlay(req, res, next){
        try{
            res.render('play');
        }
        catch(e){
            next(e);
        }
    }
    getStudy(req, res, next){
        try{
            res.render('study');
        }
        catch(e){
            next(e);
        }
    }
    getStatistics(req, res, next){
        try{
            res.render('something', {headline: `Statistics`, text: `Not enough data to make any conclusions. Play More !`});
        }
        catch(e){
            next(e);
        }
    }


    getServices(req, res, next){
        try{
            res.render('something', {headline: `Services`, text: `You must carefully read this Agreement in its entirety before using our Service. This is a legally binding Agreement between you and Chess.com. Our Fair Play Policy, Privacy Policy, Subscriber Agreement, and Community Policy are fully integrated into this Agreement, meaning that by accepting this Agreement, you also accept the Fair Play Policy, the Privacy Policy, the Subscriber Agreement, and the Community Policy (the “Other Policies”). The Other Policies are a part of this Agreement, even if we display the Other Policies on other webpages. If you are unable to access any of the Other Policies using the links above, please notify us at https://support.chess.com.

            By using our service you agree to the terms in this User Agreement. If you do not agree, then you should not use our Service, as further defined below. Your use of the Service is deemed a “continuing acceptance” of this User Agreement, meaning that every time that you use the Service you accept the then-current version of the User Agreement or any of the Other Policies, even if they have changed (without notice to you) since the last time that you used the Service.
            
            To enter into this Agreement, use the Service, and/or create an account with us, you must be an adult of legal age in your state or country of residence. If you enter into this Agreement, then you are affirming that you have reached the legal age of majority in your jurisdiction and we are permitted to reasonably rely on that. If you are not of legal age, then your parent or legal guardian must consent to this Agreement. If you are a resident of the State of California who is under the age of 13 you may not use the Service. If you or someone you know has created an account on chess.com who is a resident of the State of California and who is under the age of 13, please notify us at https://support.chess.com.
            
            All of these policies may be updated or modified from time to time; so you should check this page regularly to look for any changes. If you continue to use our service, then you are telling us that you continue to agree to any changes to these policies. We are not required to notify you in the event that we change any of our policies, except that if you are a resident of the State of California or a domiciliary of any country subject to the General Data Protection Regulation, we will notify you if we: (a) make any changes to this Agreement or the Other Policies permitting us to sell your user data, or (b) if we make any commercial use of your user data other than for internal purposes only.`});
 
        }
        catch(e){
            next(e);
        }
    }
    getAbout(req, res, next){
        try{
            res.render('something', {headline: `About`, text: `You must carefully read this Agreement in its entirety before using our Service. This is a legally binding Agreement between you and Chess.com. Our Fair Play Policy, Privacy Policy, Subscriber Agreement, and Community Policy are fully integrated into this Agreement, meaning that by accepting this Agreement, you also accept the Fair Play Policy, the Privacy Policy, the Subscriber Agreement, and the Community Policy (the “Other Policies”). The Other Policies are a part of this Agreement, even if we display the Other Policies on other webpages. If you are unable to access any of the Other Policies using the links above, please notify us at https://support.chess.com.

            By using our service you agree to the terms in this User Agreement. If you do not agree, then you should not use our Service, as further defined below. Your use of the Service is deemed a “continuing acceptance” of this User Agreement, meaning that every time that you use the Service you accept the then-current version of the User Agreement or any of the Other Policies, even if they have changed (without notice to you) since the last time that you used the Service.
            
            To enter into this Agreement, use the Service, and/or create an account with us, you must be an adult of legal age in your state or country of residence. If you enter into this Agreement, then you are affirming that you have reached the legal age of majority in your jurisdiction and we are permitted to reasonably rely on that. If you are not of legal age, then your parent or legal guardian must consent to this Agreement. If you are a resident of the State of California who is under the age of 13 you may not use the Service. If you or someone you know has created an account on chess.com who is a resident of the State of California and who is under the age of 13, please notify us at https://support.chess.com.
            
            All of these policies may be updated or modified from time to time; so you should check this page regularly to look for any changes. If you continue to use our service, then you are telling us that you continue to agree to any changes to these policies. We are not required to notify you in the event that we change any of our policies, except that if you are a resident of the State of California or a domiciliary of any country subject to the General Data Protection Regulation, we will notify you if we: (a) make any changes to this Agreement or the Other Policies permitting us to sell your user data, or (b) if we make any commercial use of your user data other than for internal purposes only.`});
 
        }
        catch(e){
            next(e);
        }
    }
    getTerms(req, res, next){
        try{
            res.render('something', {headline: `Terms of Use`, text: `You must carefully read this Agreement in its entirety before using our Service. This is a legally binding Agreement between you and Chess.com. Our Fair Play Policy, Privacy Policy, Subscriber Agreement, and Community Policy are fully integrated into this Agreement, meaning that by accepting this Agreement, you also accept the Fair Play Policy, the Privacy Policy, the Subscriber Agreement, and the Community Policy (the “Other Policies”). The Other Policies are a part of this Agreement, even if we display the Other Policies on other webpages. If you are unable to access any of the Other Policies using the links above, please notify us at https://support.chess.com.

            By using our service you agree to the terms in this User Agreement. If you do not agree, then you should not use our Service, as further defined below. Your use of the Service is deemed a “continuing acceptance” of this User Agreement, meaning that every time that you use the Service you accept the then-current version of the User Agreement or any of the Other Policies, even if they have changed (without notice to you) since the last time that you used the Service.
            
            To enter into this Agreement, use the Service, and/or create an account with us, you must be an adult of legal age in your state or country of residence. If you enter into this Agreement, then you are affirming that you have reached the legal age of majority in your jurisdiction and we are permitted to reasonably rely on that. If you are not of legal age, then your parent or legal guardian must consent to this Agreement. If you are a resident of the State of California who is under the age of 13 you may not use the Service. If you or someone you know has created an account on chess.com who is a resident of the State of California and who is under the age of 13, please notify us at https://support.chess.com.
            
            All of these policies may be updated or modified from time to time; so you should check this page regularly to look for any changes. If you continue to use our service, then you are telling us that you continue to agree to any changes to these policies. We are not required to notify you in the event that we change any of our policies, except that if you are a resident of the State of California or a domiciliary of any country subject to the General Data Protection Regulation, we will notify you if we: (a) make any changes to this Agreement or the Other Policies permitting us to sell your user data, or (b) if we make any commercial use of your user data other than for internal purposes only.`});
 
        }
        catch(e){
            next(e);
        }
    }
    getPrivacy(req, res, next){
        try{
            res.render('something', {headline: `Privacy Policy`, text: `You must carefully read this Agreement in its entirety before using our Service. This is a legally binding Agreement between you and Chess.com. Our Fair Play Policy, Privacy Policy, Subscriber Agreement, and Community Policy are fully integrated into this Agreement, meaning that by accepting this Agreement, you also accept the Fair Play Policy, the Privacy Policy, the Subscriber Agreement, and the Community Policy (the “Other Policies”). The Other Policies are a part of this Agreement, even if we display the Other Policies on other webpages. If you are unable to access any of the Other Policies using the links above, please notify us at https://support.chess.com.

            By using our service you agree to the terms in this User Agreement. If you do not agree, then you should not use our Service, as further defined below. Your use of the Service is deemed a “continuing acceptance” of this User Agreement, meaning that every time that you use the Service you accept the then-current version of the User Agreement or any of the Other Policies, even if they have changed (without notice to you) since the last time that you used the Service.
            
            To enter into this Agreement, use the Service, and/or create an account with us, you must be an adult of legal age in your state or country of residence. If you enter into this Agreement, then you are affirming that you have reached the legal age of majority in your jurisdiction and we are permitted to reasonably rely on that. If you are not of legal age, then your parent or legal guardian must consent to this Agreement. If you are a resident of the State of California who is under the age of 13 you may not use the Service. If you or someone you know has created an account on chess.com who is a resident of the State of California and who is under the age of 13, please notify us at https://support.chess.com.
            
            All of these policies may be updated or modified from time to time; so you should check this page regularly to look for any changes. If you continue to use our service, then you are telling us that you continue to agree to any changes to these policies. We are not required to notify you in the event that we change any of our policies, except that if you are a resident of the State of California or a domiciliary of any country subject to the General Data Protection Regulation, we will notify you if we: (a) make any changes to this Agreement or the Other Policies permitting us to sell your user data, or (b) if we make any commercial use of your user data other than for internal purposes only.`});
 
        }
        catch(e){
            next(e);
        }
    }
    
}

    
module.exports = new HtmlController();