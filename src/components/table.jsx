import React from 'react';
import Square from './square.jsx';
import tableStyle from './componentsStyle/table.module.css';
import trStyle from './componentsStyle/tr.module.css';

class Table extends React.Component { 
  renderSquare(i, j) {
    return (
      <Square 
        gameStatus = {this.props.gameStatus}
        value = {this.props.board[i][j]}
        onClick = {() => this.props.onClick(i, j)}
      />
    );
  }

  render() {
    return (
      <table className={tableStyle.table}>
        <tr className={trStyle.tr}>
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
        </tr>
        <tr className={trStyle.tr}>
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
        </tr>
        <tr className={trStyle.tr}>
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
        </tr>
      </table>
    );
  }
}

export default Table;