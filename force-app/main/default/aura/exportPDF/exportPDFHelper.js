({
    loadAccounts : function(component,event,helper) {
        var columnsList = [
            { label: 'Id', fieldName: 'Id', type: 'text' },
            { label: 'Name', fieldName: 'Name', type: 'text' },
            { label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text' },
            { label: 'TickerSymbol', fieldName: 'TickerSymbol', type: 'text' }
        ];
        var action = component.get('c.returnAccounts');
        action.setCallback(this, function (response) {
            component.set("v.accountColumns", columnsList);
            if (response.getReturnValue() != null) {
                var records = response.getReturnValue();
                component.set("v.accounts", records);
            }
        });
        $A.enqueueAction(action);
    },
    loadContacts : function(component,event,helper) {
        var columnsList = [
            { label: 'Id', fieldName: 'Id', type: 'text' },
            { label: 'Name', fieldName: 'Name', type: 'text' },
            { label: 'Email', fieldName: 'Email', type: 'text' },
            { label: 'Phone', fieldName: 'Phone', type: 'text' }
        ];
        var action = component.get('c.returnContacts');
        action.setCallback(this, function (response) {
            component.set("v.contactColumns", columnsList);
            if (response.getReturnValue() != null) {
                var records = response.getReturnValue();
                component.set("v.contacts", records);
            }
        });
        $A.enqueueAction(action);
    }
})
