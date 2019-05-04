function applyVisa() {
    console.log('განცხადების განხილვა . . .');
    let promise = new Promise (function(resolve, reject){
       setTimeout(function() {
        Math.random() > 0 ? resolve() : reject('ვიზა არ გაიცემა: არასაკმარისი დოკუმენტაცია!');
    }, 2000) 
    });
    return promise;
}

function getVisa(visa) {
    console.log('ვიზა მიღებულია');
    return visa;
}

function bookHotel(visa) {
    console.log(visa);
    return new Promise (function(resolve, reject){
        reject('ადგილები არ არის!')
    })
}

function buyTicket() {
    console.log('ბილეთის ყიდვა');
}

applyVisa()
    .then(getVisa)
    .then(bookHotel)
    .then(buyTicket)
    .catch(
        function(reason) {
            console.log(reason);
        }
    );