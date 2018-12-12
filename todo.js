$(init);

function init() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
   
    $('#todo').on('keypress', function(){
       // console.log($('#todo').val().split('').splice(0,3).join(''));
        $.get(url, function(response) {
            
            let userInput = Number($('#todo').val());
            if((userInput != '') && (typeof userInput == 'number')) {
                $('#searchResult').html(response[$('#todo').val() - 1].title);   
            }
            else if((userInput != '') && (typeof userInput == 'string')) {
                let userInputString = $('#todo').val().split('')
                if(userInputString.splice(0,3).join('')) {
                    response.filter(element => {
                        cosole.log(element);
                    });
                }
                
            }
            else if((userInput == '')){
                $('#searchResult').html(''); 
            }
        });
    });
}