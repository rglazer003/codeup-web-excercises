const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let numLang = users.filter(function(n)
{
    return n.languages.length >= 3;
});
console.log(numLang);

let emails = users.map(function (e) {
    return e.email.toString()
});
console.log(emails);

let totalYears = users.reduce(function (total, employee) {
    return total + employee.yearsOfExperience
}, 0);
console.log(totalYears);

let longestEmail = users.reduce(function (longest, users) {
    if (users.email.length > longest.length){
        longest = users.email
    }
    return longest
}, '');
console.log(longestEmail);

let userList = users.reduce(function (user, list) {
    if (list.id===users.length)
        user += ` ${list.name}.`;
    else {
        user += list.name + " ,";
    }
    return user;
}, "Your instructors are: ");
console.log(userList);