import React from 'react';
import tdStyle from './componentsStyle/td.module.css';

class Square extends React.Component {
  render() { 
    return (
      <td className={tdStyle.td} align="center" valign="middle">
        <button disabled={this.props.value === '0' || this.props.value === 'X' || this.props.gameStatus !== ''} style={ { width: 180 , height: 180 } } type="button" class="btn btn-light" onClick={this.props.onClick}>{this.props.value}</button>
      </td>
    );
  }
}

export default Square;