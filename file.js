import fs from "fs";
let name = "jin";
let date = new Date();
let fileName = date.getUTCDate() + name;

fs.writeFileSync(`./${fileName}.txt` ,name);