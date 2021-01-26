//login button handler
document.getElementById('clickButton').addEventListener('click',function(){
    var container = document.getElementById('mainContainer');
    container.style.display ='none';
    var bankHomeUi = document.getElementById('bankHomeUi');
    bankHomeUi.style.display='block';
})
// deposit button handler
const depositBtn = document.getElementById('depositMoney').addEventListener('click',function(){
    var depositAmount = document.getElementById('depositInput').value;
    const depositNumber = parseFloat(depositAmount);
    // const mainBalanceFinalAmount = parseFloat(mainBalance);
    updateSpanValue('currentDeposit',depositNumber);
    updateSpanValue('mainBalance',depositNumber);
    

    // const mainBalance= document.getElementById('mainBalance').innerText;
    
    // const totalMainBalance = mainBalanceFinalAmount+ depositNumber;
    // document.getElementById('mainBalance').innerText = totalMainBalance;

    document.getElementById('depositInput').value='';
    // console.log(depositAmount);
})
function updateSpanValue(id,depositNumber){
    const currentDeposit =document.getElementById(id).innerText;
    const finalDeposit = parseFloat(currentDeposit);
    let total = depositNumber + finalDeposit;
    document.getElementById(id).innerText=total;
}

//with draw button handler

document.getElementById