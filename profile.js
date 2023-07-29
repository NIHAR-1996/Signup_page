const profileInfo = document.getElementById('profile-info');
const logoutBtn = document.getElementById('logout');
let currentUser = JSON.parse(localStorage.getItem('users'));

if(!isLoggedIn()){
    window.location.href='index.html';
}

if(currentUser !== null) {
    profileInfo.innerHTML = `<span><b>Full Name: </b>${currentUser[0].fullName}</span>
    <span><b>Email: </b>${currentUser[0].email}</span>
    <span><b>Token: </b>${currentUser[0].token}</span>
    <span><b>Password: </b>${currentUser[0].password}</span>
    `;
}


function isLoggedIn() {
    let user = JSON.parse(localStorage.getItem('users'));
    return user !== null && user.token !== null;
}

logoutBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    localStorage.clear();
    // redirect to signup page
    window.location.href='index.html';
})