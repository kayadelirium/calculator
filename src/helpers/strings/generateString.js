const generateString = count => Array(count).fill(0).map(element => chars[Math.floor(Math.random() * chars.length)]).join("");

const chars = "slkjdf lsj eoiwe jfnlskdn... iwue.b nfossdfl sneoifsd fjsdodjss f  sd fs ";

export default generateString;