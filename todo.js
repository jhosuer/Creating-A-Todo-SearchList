$(init);

function init() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
   
    $('#todo').on('keypress', function(){
        console.log($('#todo').val().split().splice(0,3));
        $.get(url, function(response) {
            
            let userInput = Number($('#todo').val());
            if((userInput != '') && (typeof userInput == 'number')) {
                $('#searchResult').html(response[$('#todo').val() - 1].title);   
            }
            else if((userInput != '') && (typeof userInput == 'string')) {
                // if(userInput.includes(response.splice(0,3))) {

                // }
            }
            else if((userInput == '')){
                $('#searchResult').html(''); 
            }
        });
    });
}