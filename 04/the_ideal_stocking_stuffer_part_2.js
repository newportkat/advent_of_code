const CryptoJS = require("crypto-js")

const findLowestPositiveInteger = (secretKey) => {
  let stopLoop = true

  for (i = 0; stopLoop; i++) {
    let md5hash = CryptoJS.MD5(`${secretKey}${i}`).toString()
    let firstSixChars = md5hash.substring(0, 6)
    if (firstSixChars === "000000") {
      console.log(i)
      stopLoop = false
    }
  }
}

findLowestPositiveInteger("yzbqklnj")
