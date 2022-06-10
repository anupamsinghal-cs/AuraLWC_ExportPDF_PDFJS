
# Export To PDF using PDFJS in Aura & LWC

I wanted to create ths project since there is minimal to none documentation on how to export Tables or 2 tables side by side from Aura/LWC component using pdfJS.

The only documentation I could find was exporting html tag tables to pdf using the html_to_pdf method in pdfJS

But in salesforce we rarely create our own table structures rather use the lightning:datatable to render perfect tables.

## Roadmap

- Implementation in Aura Components - Completed

- Implementation in LWC - In Progress

- Refactoring the code - to do


## Libraries
- [jsPDF](https://unpkg.com/jspdf@2.5.1/dist/jspdf.es.min.js) 
    -- Use the js in static resources the code in the link is buggy and does not get loaded as a resource
- [jsPDF-Autotable plugin for jspdf](https://unpkg.com/jspdf-autotable@3.5.25/dist/jspdf.plugin.autotable.js)


## License

[MIT](https://choosealicense.com/licenses/mit/)