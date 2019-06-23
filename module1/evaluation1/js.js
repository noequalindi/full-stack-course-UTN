function validate_fields() {
   
    if (isEmpty('name'))
    {
        document.getElementById('name').focus();
        return false;
    }
    if (isEmpty('lastname'))
    {
        document.getElementById('lastname').focus();
        return false;
    }
    if (!isValidEmail())
    {
        document.getElementById('email').focus();
        return false;
    }
    if (!isValidPhone())
    {
        document.getElementById('phone').focus()
        return false;
    }
   
    if (!isValidDate())
    {
        document.getElementById('date').focus();
        return false;
    }
   
    if(!isValidUser())
    {
        document.getElementById('user').focus();
        return false;
    }
    if (!isValidPass())
    {
        document.getElementById('pass').focus();
        return false;
    }
 
 return true;  
}
   /*GENERIC FUNCTIONS*/

    function isValidPhone()
    {
        var phone = document.getElementById('phone');

        if (phone.value == '')
        {
            return true;
        }

        if(hasLetters(phone.value))
        {
            alert("El telefono solo puede tener numeros. Por Ejemplo: 1165478965")
            return false;
        }
        return true;
    }
    function isValidPass()
    {
        var pass = document.getElementById('pass');
        
        if(isEmpty('pass'))
        {
            return false;
        }

        if (pass.value.length < 8) 
        {
            alert("La contraseña debe tener al menos 8 caracteres");
            return false;
        }
        return true
    }
    function isValidUser()
    {
        var user = document.getElementById('user');
        if(isEmpty('user'))
        {
            return false;
        }

        if(user.value.length < 8)
        {
            alert("El nombre de usuario debe contener al menos 8 caracteres")
            return false;
        }

        if(!hasNumbers(user.value) || !hasLetters(user.value))
        {
            alert("El nombre de usuario debe contener letras y numeros")
            return false;
        }
     

        return true;
    }

    function isValidEmail()
    {
        var element = document.getElementById('email');
        var emailRegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (isEmpty('email'))
        {
            return false;
        }
    
        if(!isValidExpression(emailRegExp, element.value))
        {
            alert("Verifique que el email ingresado sea correcto");
            return false;
        }
        return true;
    
    }
    function isValidExpression(regExp, text) {
        return regExp.test(text);
    }
    function isEmpty(field)
    {
        var element = document.getElementById(field);

        if (element.value !== '')
        {
            return false;
        }
        alert("El campo "+ element.getAttribute("name") + " es obligatorio.")
        return true;

    }
    function hasAnyNumber(number)
    {
        var numbers = "0123456789";
        for (var i=0; i<10; i++)
        {
            if(number == numbers[i])
            {
                return true;
            }
        }
        return false;
    }
    function hasNumbers(field){
        for(i=0; i<field.length; i++){
            if (hasAnyNumber(field[i])){
                return true;
            }
        }
        return false;
    }
    
    function hasLetters(field){
    field = field.toLowerCase();
    for(i=0; i<field.length; i++){
        if (hasAnyLetter(field[i])){
            return true;
        }
    }
    return false;
    }
    function hasAnyLetter(letter)
    {
        var letters = "abcdefghijklmnñopqrstuvwxyz";
        for (var i=0; i<= letters.length; i++)
        {
            if(letter == letters[i])
            {
                return true;
            }
        }
        return false;
    }

    function isValidDate()
    {
        var date = document.getElementById('date');
        var regExp = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

        
        var date1 = date.value.split('/');
        var day = date1[0];
        var month = date1[1];
        var year = date1[2];
       
        if(isEmpty('date'))
        {
            return false;
        }
        if(!isValidExpression(regExp, date.value) || !isValidDayMonthYear(day, month, year))
        {
             alert("Verifique que la fecha ingresada sea correcta. Por ejemplo: 22/05/1991");
            return false;
        }
        return true;
    } 


function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
function isValidDayMonthYear(day, month, year) {
    var sinceYear = 1900;
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    if (months.indexOf(month) != -1 && days.indexOf(day) != -1) {
        if ((month == '02' && day == '29' && leapYear(year) == false) || (month == '02' && day == '30') || (month == '02' && day == '31') || (month == '04' && day == '31') || (month == '06' && day == '31') || (month == '09' && day == '31') || (month == '11' && day == '31')) {
            return false;
        } else {
            //var GivenDate = day+month+year;
            var currentDate = new Date();
            var actualYear = currentDate.getFullYear();
            
            if (year > actualYear || year < sinceYear) {
                return false;
            } else {
                return true;
            }
        }
    } else {
        return false;
    }

}
/*function isValidDayMonthYear(day, month, year) {
       
        if (day > 31)
        {
            return false;
        }
        if (month > 12)
        {
            return false;
        }
        if (year > actualYear)
        { return false;
        }
        return true;
    
    }*/