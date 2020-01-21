// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/franciscojunior10');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// var minhaPromisse = function() {
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/franciscojunior10');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('erro na requisição');
//                 }
//             }
//         }

//     })
// }

// minhaPromisse()
//     .then(function(reponse){
//         console.log(reponse);
//     })
//     .catch(function(error){
//         console.warn(error);
//     })

axios.get('https://api.github.com/users/franciscojunior10')
    .then(function(reponse){
        console.log(reponse);
    })
    .catch(function(error){
        console.warn(error);
    })