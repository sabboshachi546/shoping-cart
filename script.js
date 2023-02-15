function updateCaseNumber(isIncrease){
    const caseNumberFlied = document.getElementById('case-number-field');
    const caseNumberStr = caseNumberFlied.value ;
    const previousCaseNumber = parseInt(caseNumberStr);
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFlied.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const priceFlied = document.getElementById('price')
    priceFlied.innerText = newCaseNumber * 1219
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
   
   const newCaseNumber = updateCaseNumber(true)
   updateCaseTotalPrice(newCaseNumber)
   calculateSubTotal()

})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber)
    calculateSubTotal()
})