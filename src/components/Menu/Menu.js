import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  static defaultProps = {
    onShuffle: () => {}
  };

  render() {
    const { onShuffle } = this.props;
    return (
      <ul className="menu">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yianL"
          >
            github/
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yi-an-andrew-lai-81856354"
          >
            linkedin/
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yianL/yianlai.me"
          >
            src/
          </a>
        </li>
        <li onClick={onShuffle}>shuffle.sh</li>
      </ul>
    );
  }
}

export default Menu;
