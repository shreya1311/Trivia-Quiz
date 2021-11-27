const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input"),
nField=form.querySelector(".name"),
nInput=nField.querySelector("input");

cpField=form.querySelector(".confirmpassword"),
cpInput=cpField.querySelector("input");
 
form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  (nInput.value=="") ?nField.classList.add("shake","error") :checkName();
  (cpInput.value=="") ?cpField.classList.add("shake","error") :checkCpPass();
 
  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");

    cpField.classList.remove("shake");
    nField.classList.remove("shake");
  }, 500);
 
  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 

  cpInput.onkeyup = ()=>{checkCpPass();}
  nInput.onkeyup = ()=>{checkName();}

  function checkName(){
    if(nInput.value==""){
      nField.classList.add("error");
      nField.classList.remove("valid");
    }
    else{
      nField.classList.add("valid");
      nField.classList.remove("error");
    }
  }
 
  function checkEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
     
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
 
  function checkPass(){
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkCpPass(){
    let errorPass=cpField.querySelector(".error-txt");
    if(cpInput.value==""){
      cpField.classList.add("error");
      cpField.classList.remove("valid");
    }
    else if(cpInput.value===pInput.value){
      cpField.classList.remove("error");
      cpField.classList.add("valid");
      errorPass.innerText="Password created successfully";
    }
    else{ 
      cpField.classList.remove("valid");
      cpField.classList.add("error");
      errorPass.innerText="Password did not match"; 
    }

  }
 

  if(!eField.classList.contains("error") && !pField.classList.contains("error") &&!cpField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}