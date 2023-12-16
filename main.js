function main(){
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
  }
  
  
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
  