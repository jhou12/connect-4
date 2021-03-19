import React from 'react'
import Position from './Position.jsx'

class Row extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        {this.props.row.map((position, index) => <Position position={position} key={index} rowIndex={this.props.rowIndex} colIndex={index} togglePiece={this.props.togglePiece}/>)}
        <p></p>
      </div>
    )
  }
}

export default Row