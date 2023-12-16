function main(){
    professionDict = {}
    professionCol = getColumnNumber(OUTPUT_DATA, HEADERS["profession"])
    professionList = OUTPUT_DATA[professionCol]
    console.log(professionList)
    for (const profession of professionList){
      console.log(profession)
      professionDict[profession] = {}
    }
    console.log(professionDict)
  
      for (const row of DATA) {
  }
  }
  
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
  