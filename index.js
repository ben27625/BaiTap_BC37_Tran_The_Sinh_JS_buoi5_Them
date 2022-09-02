// Tính tiền thuế thu nhập cá nhân 


/**
 * Input : full name , tổng thu nhập năm , số người phụ thuộc
 * 
 * 
 * Process : var fullName, totalIncome , taxMoney , incomeTaxes
 * 
 * 
 *          function tính thu nhập chịu thuế 
 * 
 * 
 *          function  tính tiền thuế
 * 
 * Output :Tiền thuế
 */

function caclIncomeTaxes() {
    var incomeTaxes ;
    var totalIncome = 60;
    var dependenter = 0;

    incomeTaxes = totalIncome - 4 - dependenter * 1.6 ;
    return incomeTaxes
}

function caclTax () {
    var fullName = "Trần Sinh";
    var taxMoney;


    var incomeTaxes = caclIncomeTaxes()

    if (incomeTaxes < 0) {
        console.log("Không hợp lệ")
    } else if (incomeTaxes <= 60) {
        taxMoney = incomeTaxes * 5/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes <= 120) {
        taxMoney = incomeTaxes * 10/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes <= 210) {
        taxMoney = incomeTaxes * 15/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes <= 384) {
        taxMoney = incomeTaxes * 20/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes <= 624) {
        taxMoney = incomeTaxes * 25/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes <= 960) {
        taxMoney = incomeTaxes * 30/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    } else if (incomeTaxes > 960) {
        taxMoney = incomeTaxes * 35/100;
        console.log( "Số tiền thuế của " + fullName + "  : " ,taxMoney)
    }
    
}

caclTax () 

