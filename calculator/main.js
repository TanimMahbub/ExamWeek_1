let calculator = {
    /**
    * Getting the Elemetns
    */
    theForm: document.querySelector('.needs-validation'),
    divAlert: document.getElementById('div-alert'),
    alertTxt: document.getElementById('alertMsg'),
    theTitle: document.getElementById('theTitle'),
    result: document.getElementById('result'),
    calcForm: document.getElementById('calc'),
    resetForm: document.getElementById('resetForm'),
    
    /**
    * Error alert
    */
    errorAlert: function(alertType) {
        let messages = {
            'invalid': `<strong>Oops! Invalid number!</strong> Please try with valid number.`,
            'emptyFields': `<strong>Oops! Empty fields!</strong> Please fill up the required fields`,
            'divBy_0': `<strong>Oops!</strong> Can not divide any number by 0`
        };
        this.alertTxt.innerHTML = messages[alertType];        

        this.divAlert.classList.add('alerted');
        this.theTitle.innerHTML = `Let's try again!`
        this.result.classList.toggle('result-out', true);
    },
    
    /**
    * Success message
    */
    successMsg: function() {
        this.divAlert.classList.toggle('alerted', false);
        this.theTitle.innerHTML = `🎉Awesom! Keep it up!`
        this.result.classList.remove('result-out')
    },
    
    /**
    * The function to calculate the numbers
    */
    formCalc: function() {
        // getting the elements for the calculator form
        let xx = document.getElementById('num-x').value;
        let yy = document.getElementById('num-y').value;
        let calcOp = document.getElementById('calcOp').value;
        
        let fields = [xx, yy];
        for (let field of fields) {
            if (field === "") { // checking if any of the number inputs is empty
                this.errorAlert('emptyFields');
                return;
            } else if (isNaN(Number(field))) { // checking if any of the inputs value is invalid
                this.errorAlert('invalid');
                return;
            }
        }
        if(calcOp === "") { // checking if the Operator is selected
            this.errorAlert('emptyFields')
            return
        } else {
            this.successMsg()
        }

        // converting the input values into numbers
        let x = parseFloat(xx), y = parseFloat(yy);
        if(calcOp == '+') {
            this.result.innerHTML = (x + y)
        } else if(calcOp == '-') {
            this.result.innerHTML = (x - y)
        } else if(calcOp == '*') {
            this.result.innerHTML = (x * y)
        } else if(calcOp == '/' && y == 0) {
            this.errorAlert('divBy_0')
        } else if(calcOp == '/' && y != 0) {
            this.result.innerHTML = (x / y)
        }
    },
    
    /**
    * Resetting the Form
    */
    formReset: function(title = `Let's Calculate!`, formID) {
        this.theTitle.innerHTML = title;
        formID = this.theForm;
        formID.reset();
        
        formID.classList.toggle('was-validated', false);
        this.divAlert.classList.toggle('alerted', false);
        this.result.classList.toggle('result-out', true);
    },
    
    init: function() {
        /**
        * Event for formCalc function
        */
        this.calcForm.addEventListener('click', () => this.formCalc())
        
        /**
        * Event for formReset function
        */
        this.resetForm.addEventListener('click', () => this.formReset())
    },
};

// activate the calculator
calculator.init();


/**
* activating the Bootstrap Tooltip
*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    let tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
    tooltipTriggerEl.addEventListener('mouseleave', function () {
        tooltip.hide();
    });
    return tooltip;
});
