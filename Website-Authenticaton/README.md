## Database matching authentication

Authentication & Security



Level of security and authentication




Register -> Eamil, Password -> database
Signin - Email. Password- match in database -> if yes, then user have access to the website


npm i express nodemon dotenv cors mongoose

Password Cheker Online free
http://password-checker.online-domain-tools.com/

## authentication step : 01
    Lower level authentication
## encryption authentication step : 02
    npm i mongoose-encryption
    type: HMAC
    // URL Test
    https://cryptii.com/ 

## Hashing Password | authentication step : 03
    npm install md5
    type: Hash Function

    // URL Test
    https://cryptii.com/ 

## Salting and Hashing Password | authentication step : 04
    npm i bcrypt
    type: bcrypt

    // URL Test
    https://cryptii.com/ 

## Session based & Token based | authentication step : 05
    npm i bcrypt
    type: bcrypt

### Session based authentication
- Cookies & Session
    - Passport with local strategy
    - Passport with google oauth-20
- Passport framework - 
    1. Passport main library (Session management)
        - Passport
        - express-session
    2. strategy - user authentication
        - local strategy - passport-local
        - passport-google

### Token based authentication
- Access token