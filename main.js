function main(){
    var professionDict = populateDict()
    for (const key in professionDict){
      colNum = getColumnNumber(OUTPUT_DATA)
      // Add Obj
      var objective = professionDict[key]["obj"]
      var cell = OUTPUT_PAGE.getRange(2, colNum+1)
      if (objective && objective !== cell.getValue()){
        console.log("OBJ")
        console.log(objective)
        console.log(colNum+1)
        OUTPUT_PAGE.getRange(2, colNum+1).setValue(objective)
      }
      // Add Rew
      var reward = professionDict[key]["rew"]
      var cell = OUTPUT_PAGE.getRange(3, colNum+1)
      if (reward && reward !== cell.getValue()){
        console.log("OBJ")
        console.log(objective)
        console.log(colNum+1)
        OUTPUT_PAGE.getRange(3, colNum+1).setValue(objective)
      };
    }
  
  }
  
  
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
  
  // Only one content added per item instead of appending list
  // Highlight row when new entry is added
  
