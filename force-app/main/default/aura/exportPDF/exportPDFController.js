({
    loadRecords : function(component, event, helper) {
        helper.loadAccounts(component,event,helper);
        helper.loadContacts(component,event,helper);
    },
    generatePdf : function(component, event, helper) {
        console.log("inside generate pdf function")
        var leftData = component.get("v.accounts");
        var rightData = component.get("v.contacts");
        console.log(leftData);
        var leftCol = [];
        var rightCol = [];
        var columnsAccount = [
            ["Unique Id", "Name", "Account Number", "Ticker Symbol"]
        ];
        var columnsContact = [
            ["Unique Id", "Name", "Email", "Phone"]
        ];
        leftData.forEach(function (record) {
            if (record != null) {
                leftCol.push([
                    record.Id,
                    record.Name,
                    record.AccountNumber,
                    record.TickerSymbol
                ]);
            }
        });
        rightData.forEach(function (record) {
            if (record != null) {
                rightCol.push([
                    record.Id,
                    record.Name,
                    record.Email,
                    record.Phone
                ]);
            }
        });
        window.jsPDF = window.jspdf.jsPDF;

        var pdf = new jsPDF("p", "pt");
        var pageWidth = pdf.internal.pageSize.getWidth();

        var str = "Accounts V/S Contacts" ;
        pdf.setTextColor(100);
        pdf.setFontSize(30);
        pdf.text(str, pageWidth / 2, 35, { align: "center" });
        var startingPage = pdf.internal.getNumberOfPages();
        pdf.autoTable({
            startY: 40,
            showHeader: "firstPage",
            styles: { fontSize: 10 },
            avoidPageSplit: true,
            margin: { right: 300 },
            head: columnsAccount,
            body: leftCol,
            theme: "grid"
        });
        pdf.setPage(startingPage);
        pdf.autoTable({
            startY: 40,
            showHeader: "firstPage",
            styles: { fontSize: 10 },
            avoidPageSplit: true,
            margin: { top: 10, left: 300 },
            head: columnsContact,
            body: rightCol,
            theme: "grid"
        });
        var filename = "export.pdf";
        console.log(pdf);
        pdf.save(filename);
    }
})
