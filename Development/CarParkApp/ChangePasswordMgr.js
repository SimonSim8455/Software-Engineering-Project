require('dotenv').config();

class ChangePasswordMgr{


    validateEmail(email) 
    {

        //if email is empty prompts the user to re-enter email
        if(email == '')
            console.log("Please enter an email!");
        //use Regular expression to check if valid email
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    //checks if password length is btwn 8 to 15 characters and
    //contains at least one numeric digit and a special character
    validatePassword(password) {  
        var passwordRE=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if(password =='')
        {
            console.log("Please enter a password!");
            return false;
        }
        //check empty password field
        else if(passwordRE.test(password)) { 

            console.log("Password has been changed");
            return true;
        }
        else 
        { 
            console.log('Please enter a valid password!');
            return false;
        }
    }  

    //checks if first/last name is correct
    validateFirstName(firstName){
        if(firstName == ''){
            console.log("Please enter a name!");
        }

        //checks if there is at least one alphanumeric character
        var re = (/^[A-Za-z0-9\.@]+$/);
        if(re.test(firstName)){
            // console.log("Name has been changed");
            return re.test(firstName);
        }
        return false;
    }


    //checks if full name is valid 
    validateFullName(firstName, lastName){
        if(validateFirstName(firstName)){
            console.log("First Name has been changed");
        }
        else 
            return false;
        if(validateFirstName(lastName)){
            console.log("Last Name has been changed");
        }
        else 
            return false;
        return true;
    }




    //sends email to user
    //need to set up the server/database for the email change link
    //https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail
    sendVerificationCode(email){
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: process.env.EMAIL_TO, 
          from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
          subject: 'Reset password',
          text: 'Please click on the following link to change your password: ',
        };
        //ES6
        sgMail
          .send(msg)
          .then(() => {}, error => {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          });
        //ES8
        (async () => {
          try {
            await sgMail.send(msg);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }
        })();
    }


    //https://slgupta022.medium.com/email-verification-using-sendgrid-in-node-js-express-js-mongodb-c5803f643e09
    // checkVerificationCode(code){
    //     if()
    // }
}


const password = new ChangePasswordMgr();
// console.log(password.validateEmail('asdf'));
password.sendVerificationCode();
// console.log(validatePassword('Password123!'));
// console.log(validatePassword('Passwor'));
// console.log(validatePassword(''));
// console.log(validateUsername(''));
// console.log(validateUsername('Tom.'));
// console.log(validateFullName("asdf","@asdjfklsdj"));
// console.log(process.env.SENDGRID_API_KEY);