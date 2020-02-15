document.querySelector('.get-jokes').addEventListener('click', getText); // click button run function

// function getText() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '<h2>Posts</h2>';
//         data.foreach(function(post){
//             output += `
//                <div>
//                     <h3>${post.title}</h3>
//                     <p>${post.body}</p>
//                </div>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
// }

function getText(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';

            if(response.type === 'success') {
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something Went Wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}