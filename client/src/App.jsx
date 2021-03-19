import React from 'react'
import ReactDOM from 'react-dom'
import Row from './components/Row.jsx'
const gameLogic = require('./gameLogic.js')

let reset = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameover: '',
      lock: false,
      current: reset,
      default: reset,
      turn: 'Red'
    }
    this.togglePiece = this.togglePiece.bind(this)
  }
  togglePiece(row, col) {
    // Red = 2, Black = 1, Blank = 0
    let bottomRow = gameLogic.rowDrop(this.state.current, col)
      if (this.state.turn === 'Red') {
      let newBoard = this.state.current
      newBoard[bottomRow][col] = 2
      this.setState({
        turn: 'Black',
        current: newBoard
      })
      if (gameLogic.winCheck(newBoard, bottomRow, col)) {
        this.setState({
          gameover: 'Red Wins!',
          lock: true
        })
      }
      if (gameLogic.tieCheck(newBoard)) {
        this.setState({
          gameover: 'Tie!'
        })
      }
    } else {
      let newBoard = this.state.current
      newBoard[bottomRow][col] = 1
      this.setState({
        turn: 'Red',
        current: newBoard
      })
      if (gameLogic.winCheck(newBoard, bottomRow, col)) {
        this.setState({
          gameover: 'Black Wins!',
          lock: true
        })
      }
      if (gameLogic.tieCheck(newBoard)) {
        this.setState({
          gameover: 'Tie!'
        })
      }
    }
  }
  render() {
    return (
      <div>

        <div className="gameover">{this.state.gameover}</div>
        <div className="turn">Current turn: {this.state.turn}</div>
      <p></p><div className="board">
        <p></p>
        {this.state.current.map((row, index) => <Row row={row} key={index} rowIndex={index} togglePiece={this.state.lock ? null : this.togglePiece}/>)}
      </div>

      </div>
    )
  }
}

export default App;