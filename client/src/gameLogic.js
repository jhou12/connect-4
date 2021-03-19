let rowDrop = function(state, col) {
  let bottomRow
  for (let row = 0; row < state.length; row++) {
    if (state[row][col] === 0) {
      bottomRow = row
    }
  }
  return bottomRow
}

let winCheck = function(state, row, col) {
  // Row Win:
  if (state[row].join('').includes('2222') || state[row].join('').includes('1111')) {
    return true
  }
  // Col Win:
  let colArray = [
    state[0][col],
    state[1][col],
    state[2][col],
    state[3][col],
    state[4][col],
    state[5][col]
  ]
  if (colArray.join('').includes('2222') || colArray.join('').includes('1111')) {
    return true
  }
  // Diag Left to Right Win:
  if (row < col) {
    let diagLR = []
    let startCol = col
    for (let startRow = 0; startRow < state.length; startRow++) {
      diagLR.push(state[startRow][startCol - row])
      startCol++
    }
    if (diagLR.join('').includes('2222') || diagLR.join('').includes('1111')) {
      return true
    }
  }
  if (col <= row) {
    let diagLR = []
    let startCol = 0
    for (let startRow = row - col; startRow < state.length; startRow++) {
      diagLR.push(state[startRow][startCol])
      startCol++
    }
    if (diagLR.join('').includes('2222') || diagLR.join('').includes('1111')) {
      return true
    }
  }
  // Diag Right to Left Win:
  let diagRL = []
  let lastRow = state.length - 1
  let startCol = col - (lastRow - row)
  for (let startRow = lastRow; startRow >= 0; startRow--) {
    diagRL.push(state[startRow][startCol])
    startCol++
  }
  startCol = 0
    if (diagRL.join('').includes('2222') || diagRL.join('').includes('1111')) {
      return true
    }
  return false
}

let tieCheck = function(state) {
  if (!state[0].includes(0)) {
    return true
  }
  return false
}

module.exports.rowDrop = rowDrop
module.exports.winCheck = winCheck
module.exports.tieCheck = tieCheck