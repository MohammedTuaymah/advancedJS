document.getElementById("calc-btn").addEventListener("click", function(){
    let firstInput = document.getElementById("first-input").value
    let secondInput = document.getElementById("second-input").value

    try {
        let result = divide(Number(firstInput), Number(secondInput))//catch لو العملية صحيحة ينفذ السطر التالي و اذا خطأ ينتقل الى ال
        document.getElementById("result").innerHTML = result
    }
    catch (error) {// تنحط هنا thrwo رسالة الخطأ حقة المتغير
        alert("Error: "+ error)
    }finally {
        console.log("Hello World")//finally هي اختيارية وظيفتها تظهر اخر شي
    }
    
})