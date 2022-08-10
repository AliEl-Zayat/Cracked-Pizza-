// Start Bootstrap or Custom Modal
function modalCreate(){
    let modalStart = document.createElement('div');
    modalStart.setAttribute("id" ,"cModal");
    document.body.style.overflowY="hidden";
    modalStart.innerHTML = `
    <div class="site-pauser"></div>
    <div class="modal-dialog w-50 h-50">
      <div class="modal-content">
        <div class="modal-body">
          <p class="text-center h4">Choose Navbar Option.</p>
        </div>
        <div class="modal-footer justify-content-center mt-3">
        <div class="d-flex flex-column gap-2 w-100 align-items-center">
            <button onclick="cNavbar();" class="btn btn-primary w-75" type="button">Custom Navbar</button>
            <button onclick="dNavbar();" class="btn btn-secondary  w-75" type="button">Bootstrap Defualt Navbar</button>
        </div>
        </div>
      </div>
    </div>
  </div>
    `;
    document.body.append(modalStart);
}
// End Bootstrap or Custom Modal
// Start Custom Navbar Function
function cNavbar(){
    var customNavbarBtn = document.getElementById("customNavbarBtn");
    var bsNavbarBtn = document.getElementById("bsNavbarBtn");
    customNavbarBtn.style.display = "auto";
    bsNavbarBtn.style.display = "none";
    document.body.style.overflowY="scroll";
    document.querySelector(".site-pauser").style.display = "none";
    document.getElementById("cModal").style.display = "none";
}
// End Custom Navbar Function
// Start Bootstrap Navbar Function
function dNavbar(){
    var customNavbarBtn = document.getElementById("customNavbarBtn");
    var bsNavbarBtn = document.getElementById("bsNavbarBtn");
    bsNavbarBtn.style.display = "auto";
    customNavbarBtn.style.display = "none";
    document.body.style.overflowY="scroll";
    document.querySelector(".site-pauser").style.display = "none";
    document.getElementById("cModal").style.display = "none";
}
// End Bootstrap Navbar Function.

// Start Custom Navbar buttons Functions
const openNav = document.querySelector(".navbar-toggler").addEventListener("click", openNavbar);
const closeBtn = document.querySelector(".fa-x").addEventListener("click", closeNavbar);
function openNavbar(){
    document.querySelector(".custom-navbar").style.width = '100%';
    document.getElementById('headerContent').style.display = "none";
}
function closeNavbar (){
    document.getElementById('headerContent').style.display = "block";
    document.querySelector(".custom-navbar").style.width = '0';
}
// End Custom Navbar Functions


// Start Mail Validation
function mailValidation(){
    var email = document.getElementById("email").value;
    var error = document.getElementById('error');
    if(email.indexOf("@") == -1 || email.length < 5){
        error.innerHTML = "Please enter a valid email !";
        error.classList.add("text-danger");
        error.classList.remove("text-success");
        return false;
    }else{
        error.classList.remove("text-danger");
        error.classList.add("text-success");
        error.innerHTML = "Thanks"
        return false;
    }
}
// End Mail Validation