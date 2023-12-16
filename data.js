// Retrieve Data
const activeSheet = SpreadsheetApp.openById(SHEET_ID);
const inputPage = activeSheet.getSheetByName(INPUT_PAGE);
const INPUT_DATA = inputPage.getDataRange().getValues();
const outputPage = activeSheet.getSheetByName(OUTPUT_PAGE);
const OUTPUT_DATA = outputPage.getDataRange().getValues();



function getColumnNumber(dataSet, headerString){
    // Finds the column number of a given header
    // Column A is 1 but index is 0, so add 1
      return dataSet[0].indexOf(headerString)+1
    };
    
function getCellData(dataSet, entryRow, headerString){
  // Finds the data associated with the given header for given entry (row)
  const cellIndex = dataSet[0].indexOf(headerString);
  return entryRow[cellIndex]
};
