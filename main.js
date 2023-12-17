function main(){
  var professionDict = populateDict()
  for (const key in professionDict){
    colNum = getColumnNumber(OUTPUT_DATA)
    // Add Obj
    writeContent(professionDict, key, "obj", 2, colNum)
    // Add Rew
    writeContent(professionDict, key, "rew", 3, colNum)
  }
};


function populateDict(){
  var professionDict = {}
  for (const row of INPUT_DATA.slice(1)) {
    // Format Profession Dict
    const job = getCellData(INPUT_DATA, row, HEADERS["profession"]);
    const req = getCellData(INPUT_DATA, row, HEADERS["requirement"]);
    if (!professionDict[job]) {
      professionDict[job] = {};
    }
    if (!professionDict[job][req]) {
      professionDict[job][req] = [];
    }
    // Add Content
    const content = getFormattedContent(row)
    professionDict[job][req].push(content);
  }
  return professionDict
};


function getFormattedContent(row){
  // Returns a formatted version of the trade listed in row
    const content = {
    "type": getCellData(INPUT_DATA, row, HEADERS["type"]),
    "content": getCellData(INPUT_DATA, row, HEADERS["content"]),
    "amount": {
      "min": getCellData(INPUT_DATA, row, HEADERS["min"]),
      "max": getCellData(INPUT_DATA, row, HEADERS["max"])
    },
    "unitWorth": getCellData(INPUT_DATA, row, HEADERS["unitWorth"])
  };

  if (getCellData(INPUT_DATA, row, HEADERS["rarity"])) {
    content["rarity"] = getCellData(INPUT_DATA, row, HEADERS["rarity"]);
  }

  if (getCellData(INPUT_DATA, row, HEADERS["nbt"])) {
    content["nbt"] = getCellData(INPUT_DATA, row, HEADERS["nbt"]);
  }
  return content
}


function writeContent(professionDict, key, type, rowNum, colNum){
  // Writes reward of objective JSON to spreadsheet
  // Type is string "rew" or "obj"

  // Format Data
    var contentData = professionDict[key][type]  
    var data = {
      replace: true,
      content: contentData
    }
    data = JSON.stringify(data)
    // Add data to sheet
    var cell = OUTPUT_PAGE.getRange(rowNum, colNum+1)
    if (data && data !== cell.getValue()){ 
      OUTPUT_PAGE.getRange(rowNum, colNum+1).setValue(JSON.stringify(data))
      cell.setBackground(COLOR);
    };
}
