public with sharing class ReturnAccountAndContacts {
    @AuraEnabled
    public static List<Account> returnAccounts(){
        return [SELECT Id,Name,AccountNumber,TickerSymbol FROM Account LIMIT 10];
    }

    @AuraEnabled
    public static List<Contact> returnContacts(){
        return [SELECT Id,Name,Email,Phone FROM Contact LIMIT 13];
    }
}
