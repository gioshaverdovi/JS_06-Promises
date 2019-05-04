var url = ('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-03&sortBy=publishedAt&apiKey=8f4ff16d621c4d5190f88c3bb01b12a5');
var typing = document.getElementById('type');
var post = document.getElementById('posted');
var share = document.getElementById('shared');

typing.focus();

function ajax(url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = function(response){
            resolve(xhr.response);
        }
        xhr.onerror = function(err){
            reject('error');
        }
        xhr.send();
    }) 
}


function addRemove() {
    var element = document.createElement('div');
    element.innerText = typing.value;
    post.appendChild(element);
    typing.value = '';
    typing.focus();
}

typing.addEventListener('keyup', function(event){
    if(event.which == 13){
        addRemove();
    }
});

share.addEventListener('click', function(){
    addRemove();
});
