//getting reference
let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');
let count = 0;

function addItem(){
    //alert("item runs!")
    //clean up the eventual white space in input
    input.value = input.value.trim();
    
    
    if(input.value){
        count = count + 1;
        if(count >= 7 ){
            input.value = "";
            input.placeholder = "Toooo many things! List full!";
            return;
        }
        //create the new list item
        let li = document.createElement('li');

        //collect the user input from the input-bag
        li.innerText = input.value;
        //assign previously created list item with the data from input

        //attach list item to the unordered list
        list.appendChild(li);

        //clear the text-field
        input.value = "";
        input.placeholder = "Your items here...";
    }
    else{
        input.placeholder = "You input nothing!!!";
    }
}

add.addEventListener('click', addItem);