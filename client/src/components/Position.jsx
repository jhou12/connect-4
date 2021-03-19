import React from 'react'

class Position extends React.Component {
  constructor(props) {
    super(props)
    this.sendPosition = this.sendPosition.bind(this)
  }
  sendPosition() {
    this.props.togglePiece(this.props.rowIndex, this.props.colIndex)
  }
  render() {
    if (this.props.position === 0) {
      return (
          <span className="circle0" onClick={this.sendPosition}>
          </span>
      )
    } else if (this.props.position === 1) {
      return (
        <span className="circle1" onClick={this.sendPosition}>
        </span>
    )
    } else {
      return (
        <span className="circle2" onClick={this.sendPosition}>
        </span>
    )
    }
  }
}

export default Position