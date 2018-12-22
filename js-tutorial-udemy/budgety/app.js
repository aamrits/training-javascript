// BUDGET controller
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        }
    }

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;

            // ID = last ID + 1
            if (ID > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'income') {
                newItem = new Income(ID, desc, val);
            } else if (type === 'expense') {
                newItem = new Expense(ID, desc, val);
            }

            data.allItems[type].push(newItem);

            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    }

})();

// UI controller
var UIController = (function () {
    
    var DOMstrings = {
        getType: '.add__type',
        getDesc: '.add__description',
        getValue: '.add__value',
        getBtn: '.add__btn'
    }

    // get input data
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.getType).value, // income or expense
                description: document.querySelector(DOMstrings.getDesc).value,
                value: document.querySelector(DOMstrings.getValue).value
            }
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();

// GLOBAL APP controller
var controller = (function (budgetCtrl, UICtrl) {

    var setEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.getBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }
    
    var ctrlAddItem = function () {
        var input, newItem;

        input = UICtrl.getInput();
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    }

    return { 
        init: function() {
            console.log('App has started.');
            setEventListeners();
        }
    }

})(budgetController, UIController);

// Start the application
controller.init();