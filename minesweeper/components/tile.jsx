import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault;
        this.props.updateGame(this.props.tile, e.altKey);
    }

    render() {   
        const tile = this.props.tile; 
        const count = tile.adjacentBombCount();
        let content;
        
        if (tile.explored && tile.bombed) {
            content = <div onClick={this.handleClick} className="tile bombed">&#128163;</div>
        } else if (tile.explored && count > 0) {
            content = <div onClick={this.handleClick} className={`tile explored color-${count}`}>{count}</div>
        } else if (tile.flagged) {
            content = <div onClick={this.handleClick} className="tile flagged">&#x2691;</div>
        } else if (tile.explored) {
            content = <div onClick={this.handleClick} className="tile explored"></div>
        } else {
            content = <div onClick={this.handleClick} className="tile unexplored"></div>
        }
        
        return content; 
    }
};