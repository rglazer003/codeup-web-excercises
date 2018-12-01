var username = 'codeup';
var password = 'notastrongpassword';

var passwordIsLongEnough = password.length >= 5;
var passwordIncludesUsername = !password.includes(username);
var userNameIsShortEnough = username.length <= 20;
var noWhiteSpace = (password === password.trim() && username === username.trim());

var credentialsAreGood =
    passwordIsLongEnough &&
    passwordIncludesUsername &&
    userNameIsShortEnough &&
    noWhiteSpace;