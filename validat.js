function validateForm() {
    var x = document.myForm.fname.value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
    } else {
        x = document.myForm.lastname.value;
        if (x == null || x == "") {
            alert("last name must be filled out");
            return false;
        } else {
            x = document.myForm.pass.value;
            var y = document.myForm.rpass.value;
            if (x != y) {
                alert('Password didn\'t match');
                return false;
            } else {
                if (x.length < 5 && x.length > 12) {
                    alert("Passwrod must be between 5 and 12 characters");
                    return false;
                }
                for (i = small = capital = digit = special = 0; i < x.length; i++) {
                    if (x[i] >= 65 && x[i] <= 90) capital++;
                    if (x[i] >= 97 && x[i] <= 122) small++;
                    if (x[i] >= 48 && x[i] <= 57) digit++;
                    if ((x[i] >= 32 && x[i] <= 47) || (x[i] >= 58 && x[i] <= 64) || (x[i] >= 91 && x[i] <= 96) || (x[i] >= 123 && x[i] <= 126)) special++;
                }
                if (small == 0 || capital == 0 || digit == 0 || special == 0) {
                    alert('Password must be between 5 and 12 characters and \nIt must contain a Capital letter and a Small letter\nAlso has a Numeric and a Special Character');
                    return false;
                }
            }
        }
    }
}