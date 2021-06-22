import './App.css';
import React from 'react';
import Table from './components/table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(3).fill(null).map(row => new Array(3).fill(null)),
      nextChar: 0,
      gameStatus: ''
    }
  }

  handleClick = (i, j) => {
    let increment = this.state.nextChar + 1;
    let table = this.state.board;
    table[i][j] = (increment % 2 ? 'X' : '0');
    this.setState({ 
      board: table,
      nextChar: increment 
    });
    for (let x = 0; x < 3; ++x) {
      let sumLine = null, sumColumn = null;
      for (let y = 0; y < 3; ++y) {
        sumLine += table[x][y];
        sumColumn += table[y][x];
      }
      if (sumLine === 'nullXXX' || sumColumn === 'nullXXX') {
        this.setState({ gameStatus: 'X has won!' });
      } else if (sumLine === 'null000' || sumColumn === 'null000') {
        this.setState({ gameStatus: '0 has won!' });
      }
    }
    if (table[0][0] + table[1][1] + table[2][2] === 'XXX' || table[0][2] + table[1][1] + table[2][0] === 'XXX') {
      this.setState({ gameStatus: 'X has won!' });
    } else if (table[0][0] + table[1][1] + table[2][2] === '000' || table[0][2] + table[1][1] + table[2][0] === '000') {
      this.setState({ gameStatus: '0 has won!' });
    }
  }

  render() {
    return (
      <div className="App">
        <center>
          <button class="btn btn-primary m-4" onClick={() => window.location.reload()}><i class="las la-redo-alt"></i></button>
          <Table 
            gameStatus = {this.state.gameStatus}
            board = {this.state.board}
            onClick = {(i, j) => this.handleClick(i, j)}
          />
          <h3>{this.state.gameStatus}</h3>
        </center>
      </div>
    );
  }
}

export default App;