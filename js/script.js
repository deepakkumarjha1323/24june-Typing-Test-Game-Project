// Fat Arrow Function defination
let saveRegistrationData = ()=>{
    // console.log('Hello');
            //object.method()
    let fnm = document.getElementById("first_name").value;
    let lnm = document.getElementById("last_name").value;

    console.log(fnm);
    console.log(lnm);
    // HTML Web Storage
    window.localStorage.setItem('first_name',fnm);
    window.localStorage.setItem('last_name',lnm);
     //Page reload method()
     window.location.reload();
}

// Logout function
let logout = ()=>{
    // console.log('hiiiii');
    window.localStorage.clear();
    //Page reload
    window.location.reload();
}

// ()(); IIFE Rule (Immediately Invoked Function Expressions)
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    console.log('Page loaded successfully');
    // Get a reference to the modal element
    var modal = document.getElementById('regitrationModel');
    // Create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);
    // Call the `show` method on the modal instance to launch the modal
    console.log(fn);
    if(fn === null  ){
            //True
            modalInstance.show();
    } 

    //Check if the localStorage is set or note
    if(fn !== null){
        document.querySelector('.d_wc').innerHTML = 'Welcome '+fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
    }

})();