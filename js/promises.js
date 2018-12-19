function wait (num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ();
        },num)
    })
}

wait(3000).then(() => console.log('You should see this after 3 seconds'));

function github (username){
   return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 89af6afaa51cf1c1e1bf0d02bcd0327d54dc832a'}}).then(function (response) {

   {
       if (response.status !== 200){
           return Promise.reject(response)
       }
       return Promise.resolve(response)
    }
})
       .then(function (response) {
           const jsonResponse = response.json();
           return jsonResponse
       })
       .then(function (data) {
           console.log(data);
           return data[0].created_at
       })
       .then(function (data) {
           console.log(data);
       })

}

github('rglazer003');