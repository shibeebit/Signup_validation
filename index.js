
//signup validation
//username: min 6 character, no special char
//password:
//-min 8 char
//-has at least 1 special char(.,-)
//-has at least 1 uppercase
//-has at least 1 number
//-has at least 1 lowercase
// confirm password = password
// all field check on keyup
// show error message after input element

//Username
const u1con = document.getElementById('u1con');
const inputE1 = document.getElementById('username');
const user = document.getElementById('user');
inputE1.addEventListener('keyup', (event)=>{
    if(inputE1.value.length>=6) {
        u1con.style.display="none";
    } else {
        u1con.style.display="inline";
    }
    if(inputE1.value.search(/[.\,\-]/)==-1) {
        u2con.style.display="none";
    } else {
        u2con.style.display="inline";
    }
    if(inputE1.value.length>=6 && inputE1.value.search(/[.\,\-]/)==-1){
        user.style.display="none";
    } else {
        user.style.display="inline";
    }
});


//Password and confirm password
const p1con = document.getElementById('p1con');
const p2con = document.getElementById('p2con');
const p3con = document.getElementById('p3con');
const p4con = document.getElementById('p4con');
const p5con = document.getElementById('p5con');
const inputE2 = document.getElementById('password');
const pass = document.getElementById('pass');
const inputE3 = document.getElementById('checkpass');
const c1con = document.getElementById('c1con');
inputE2.addEventListener('keyup', (event)=>{
    if(inputE2.value.length>=8) {
        p1con.style.display="none";
    } else {
        p1con.style.display="inline";
    }
    if(inputE2.value.search(/[.\,\-]/)==-1) {
        p2con.style.display="inline";
    } else {
        p2con.style.display="none";
    }
    if(inputE2.value.search(/[0-9]/)==-1) {
        p3con.style.display="inline";
    } else {
        p3con.style.display="none";
    }
    if(inputE2.value.search(/[A-Z]/)==-1) {
        p4con.style.display="inline";
    } else {
        p4con.style.display="none";
    }
    if(inputE2.value.search(/[a-z]/)==-1) {
        p5con.style.display="inline";
    } else {
        p5con.style.display="none";
    }
    if(inputE2.value.length>=8 && inputE2.value.search(/[.\,\-]/)!==-1 && inputE2.value.search(/[0-9]/)!==-1 && inputE2.value.search(/[A-Z]/)!==-1 && inputE2.value.search(/[a-z]/)!==-1) {
        pass.style.display = "none";
    } else {
        pass.style.display="inline";
    }
    if(inputE3.value === inputE2.value) {
        c1con.style.display="none";
    } else {
        c1con.style.display="inline";
    }
});
inputE3.addEventListener('keyup', (event)=>{
if(inputE3.value === inputE2.value) {
    c1con.style.display="none";
} else {
    c1con.style.display="inline";
}
});




