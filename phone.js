function updatePhoneNumber(isIncrease){
   const phoneNumberField = document.getElementById('phone-number-field')
   const phoneNumberStr = phoneNumberField.value 
   const previousPhoneNumber = parseInt(phoneNumberStr);
   
   let newPhoneNumber;
   if(isIncrease == true){
     newPhoneNumber = previousPhoneNumber + 1;
   }else{
    newPhoneNumber = previousPhoneNumber -1
   }
    
   phoneNumberField.value = newPhoneNumber;
   return newPhoneNumber;
}
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 59;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}
function setTextElementValueById(elementId,value){
    const subTotalElm = document.getElementById(elementId);
    subTotalElm.innerText = value;
}
function calculateSubTotal(){
     //calculate total
     const currentPhoneTotal = getTextElementValueById('phone-total');
     const currentPriceTotal = getTextElementValueById('price');
     const currentSubTotal = currentPhoneTotal + currentPriceTotal;
     setTextElementValueById('sub-total', 100)
    
     const textAmount = currentSubTotal * 0.1;
     setTextElementValueById('text-amount', textAmount);

     const finalAmount = currentSubTotal + textAmount;
     setTextElementValueById('final-total', finalAmount)
}
document.getElementById('phone-case-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()
    
})
document.getElementById('phone-case-minus').addEventListener('click', function(){
  const newPhoneNumber =  updatePhoneNumber(false);
  updatePhoneTotalPrice(newPhoneNumber);
  calculateSubTotal()
})