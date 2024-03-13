 let  toastBox =document.getElementById('toastbox')
 let successmsg ='<i class="fa-solid fa-circle-check"></i>succesfully Submited'
 let errormsg ='<i class="fa-solid fa-circle-xmark"></i>please fix the error'
 let invalidmsg ='<i class="fa-solid fa-circle-exclamation"></i>invalid input check agian'
function shoeToast(msg){
 let toast = document.createElement('div');
 toast.classList.add("toast");
 toast.innerHTML=msg;
 toastBox.appendChild(toast);
 if (msg.includes('error')){
  toast.classList.add("error");

 }
 if (msg.includes('invalid')){
  toast.classList.add("invalid");

 }
 setTimeout(()=>{
  toast.remove();
 },6000)
}