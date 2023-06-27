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

let playSound=()=>{
    // console.log('gdddddddd');
    let at = document.querySelector('.d_audio');
    at.play();
}
// ()(); IIFE Rule (Immediately Invoked Function Expressions)
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    let pinky = document.querySelector('.l_pinky');
    let lring = document.querySelector('.l_ring');
    let lmiddle = document.querySelector('.l_middle');
    let lindex = document.querySelector('.l_index');
    let rindex = document.querySelector('.r_index');
    let rmiddle = document.querySelector('.r_middle');
    var rring = document.querySelector('.r_ring');
    var rpinky = document.querySelector('.r_pinky');
    var lthumb = document.querySelector('.l_thumb');
    var rthumb = document.querySelector('.r_thumb');
    // console.log(pinky);


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

    // Keypress sound play
    document.addEventListener('keypress',(e)=>{ // e is event variable it is a formal arguemnet
        console.log('->',e.keyCode);
        // Conditions
        if(e.keyCode == 97){
            let a = document.querySelector('.d_a');
            a.classList.add('d_active');
            pinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 113){
            let a = document.querySelector('.d_q');
            a.classList.add('d_active');
            pinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 122){
            let a = document.querySelector('.d_z');
            a.classList.add('d_active');
            pinky.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 119){
            let a = document.querySelector('.d_w');
            a.classList.add('d_active');
            lring.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 115){
            let a = document.querySelector('.d_s');
            a.classList.add('d_active');
            lring.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 120){
            let a = document.querySelector('.d_x');
            a.classList.add('d_active');
            lring.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 101){
            let a = document.querySelector('.d_e');
            a.classList.add('d_active');
            lmiddle.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 100){
            let a = document.querySelector('.d_d');
            a.classList.add('d_active');
            lmiddle.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 99){
            let a = document.querySelector('.d_c');
            a.classList.add('d_active');
            lmiddle.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 114){
            let a = document.querySelector('.d_r');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 102){
            let a = document.querySelector('.d_f');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 118){
            let a = document.querySelector('.d_v');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 116){
            let a = document.querySelector('.d_t');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 103){
            let a = document.querySelector('.d_g');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 98){
            let a = document.querySelector('.d_b');
            a.classList.add('d_active');
            lindex.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 121){
            let a = document.querySelector('.d_y');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 104){
            let a = document.querySelector('.d_h');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 110){
            let a = document.querySelector('.d_n');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 117){
            let a = document.querySelector('.d_u');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 106){
            let a = document.querySelector('.d_j');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 109){
            let a = document.querySelector('.d_m');
            a.classList.add('d_active');
            rindex.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 105){
            let a = document.querySelector('.d_i');
            a.classList.add('d_active');
            rmiddle.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 107){
            let a = document.querySelector('.d_k');
            a.classList.add('d_active');
            rmiddle.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 44){
            let a = document.querySelector('.d_mm');
            a.classList.add('d_active');
            rmiddle.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 111){
            let a = document.querySelector('.d_o');
            a.classList.add('d_active');
            rring.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 108){
            let a = document.querySelector('.d_l');
            a.classList.add('d_active');
            rring.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 46){
            let a = document.querySelector('.d_nn');
            a.classList.add('d_active');
            rring.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 112){
            let a = document.querySelector('.d_p');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 59){
            let a = document.querySelector('.d_pp');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 47){
            let a = document.querySelector('.d_ppp');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 91){
            let a = document.querySelector('.d_oo');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 92){
            let a = document.querySelector('.d_ii');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 93){
            let a = document.querySelector('.d_uu');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }
        // Conditions
        if(e.keyCode == 13){
            let a = document.querySelector('.d_enter');
            a.classList.add('d_active');
            rpinky.style.display = 'block'
        }

        // Conditions
        if(e.keyCode == 32){
            let a = document.querySelector('.d_sp');
            a.classList.add('d_active');
            rthumb.style.display = 'block'
        }

        playSound();

        // playSound();
    })

    document.addEventListener('keyup', ()=>{
        var element = document.getElementsByClassName('d_active');

        for (var i=0; i<element.length; i++){
            element[i].classList.remove('d_active');
        }

        var element = document.getElementsByClassName('d_blue');

        for (var i=0; i<element.length; i++){
            element[i].style.display = 'none';
        }

        // document.querySelector('.d_blue').style.display = 'none';
    })

})();