// This function removes the odd elements of the unordered list
var deleteOddItems = function(){
 
    var ulist =document.getElementById("unorderedList");    //stores the element ul in the variable ulist
    var listItems = ulist.getElementsByTagName("li");  // stores the elements of with tag = "li", as a list colletion
    var listLen = listItems.length; //stores the listItems collection's length
    for(var i =listLen-1 ; i>=0; i--) //for loop to iterate for all the elements of the listItems collection from last to 1st
    { 
        if((i%2)==0) // if statement to identify if the value of i is even because the 1st element is at position 0. 
        {   
             listItems[i].remove();      // Removing the list element at ith position
        }
    }
}

/*
 if the deleteOddItems function is supposed to run only once, then please copy paste the following code  
var funcount = 0; 
var deleteOddItems = function(){
 
    if(funcount==0)
    {    var ulist =document.getElementById("unorderedList");    //stores the element ul in the variable ulist
        var listItems = ulist.getElementsByTagName("li");  // stores the elements of with tag = "li", as a list colletion
        var listLen = listItems.length; //stores the listItems collection's length
        for(var i =listLen-1 ; i>=0; i--) //for loop to iterate for all the elements of the listItems collection from last to 1st
        { 
            if((i%2)==0) // if statement to identify if the value of i is even because the 1st element is at position 0. 
            {   
             listItems[i].remove();      // Removing the list element at ith position
            }
        }
 
    }
    funcount++;
}
*/