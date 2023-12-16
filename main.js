function main(){
    var professionDict = makeProfDict()
  
  
  for (const row of INPUT_DATA.slice(1)) {
    const job = getCellData(INPUT_DATA, row, HEADERS["profession"]);
    const req = getCellData(INPUT_DATA, row, HEADERS["requirement"]);
    if (!professionDict[job]) {
      professionDict[job] = {};
    }
    if (!professionDict[job][req]) {
      professionDict[job][req] = [];
    }
    console.log(professionDict)
    const content = {
      "type": getCellData(INPUT_DATA, row, HEADERS["type"]),
      "rarity": getCellData(INPUT_DATA, row, HEADERS["rarity"]),
      "content": getCellData(INPUT_DATA, row, HEADERS["content"]),
      "amount": {
        "min": getCellData(INPUT_DATA, row, HEADERS["min"]),
        "max": getCellData(INPUT_DATA, row, HEADERS["max"])
      },
      "unitWorth": getCellData(INPUT_DATA, row, HEADERS["unitWorth"]),
      "nbt": getCellData(INPUT_DATA, row, HEADERS["nbt"])
    };
    console.log(content)
    professionDict[job][req].push(content);
  }
  console.log(professionDict["armorer"]["rew"])
  }
  
  function makeProfDict(){
    professionDict = {}
    professionCol = getColumnNumber(OUTPUT_DATA, HEADERS["profession"])
    professionList = OUTPUT_DATA[professionCol]
    for (const profession of professionList){
      professionDict[profession] = {}
    }
    return professionDict
  };
  
  
  // Make a dict of all professions
  // Add an entry for obj/rew within the dict
  
  // For each row
  // Create an empty dict
  // Make an entry for "type"
  // if rarity make an entry for rarity
  // make an entry for content
  // make an amount entry...
  // ... make sub entries min/max with next two rows
  // make a unitWorth row
  // if nbt make an nbt row
  