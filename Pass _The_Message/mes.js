

let button = document.querySelector('.submitButton');

button.addEventListener('click',(e)=>{
    var input = document.querySelector('.inputText');
    var outputText = document.querySelector('.lastMessage');
    var error = document.querySelector('.errMessage');

    if (input.value == "") {
        error.classList.add('show');

        setTimeout(()=>{
            error.classList.remove('show');
        },1000);
    }
    else{
        outputText.innerHTML = input.value;
    }

})

