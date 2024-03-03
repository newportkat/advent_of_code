// Santa's list is a file that contains many double-quoted string literals, one on each line.
// The only escape sequences used are
// \\\ (which represents a single backslash),
// \\" (which represents a lone double-quote character), and
// \\x plus two hexadecimal characters (which represents a single character with that ASCII code).

function hexToAscii(hexString) {
  // Remove the "\x" prefix if it's included in the hexString
  if (hexString.slice(0, 2) === "\\x") {
    hexString = hexString.slice(2)
    console.log(`hexString: ${hexString}`)
  }

  // Convert the hexadecimal string to an ASCII character
  const asciiCode = parseInt(hexString, 16) // Parse the string as base 16
  console.log(`asciiCode: ${asciiCode}`)

  const asciiChar = String.fromCharCode(asciiCode) // Get the ASCII character
  console.log(`asciiChar: ${asciiChar}`)

  return asciiChar
}

// Example usage
console.log(hexToAscii("\x27")) // Outputs: '
