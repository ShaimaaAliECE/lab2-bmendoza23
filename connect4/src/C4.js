import React from 'react';
import './index.css';

// Creating C4Button class
class C4Button extends React.Component
{ 
  render()  
  { 
    return (
        <button
          disabled    = {this.props.disabled} 
          style       = {this.props.style}
          onClick     = {this.props.onClick}
        >
        </button>
    ); 
  }
}
//Creating Grid Class
class Grid extends React.Component{
  
  //Grid Constructor
  constructor(props)
  {
    super(props);
    this.state = {
      player: 'red',
      win: false,
      boardFull: false,
      displayMsg: '',
      gameBoard:[
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null]
      ]
    };
  }

  //Method to scan the whole game board for a win or the board being full
  boardScan(){
    let board = this.state.gameBoard; // Whole Game Board
    let nulls, hors, verts = 0;       // Tracking count for null, horizontal and vertical spaces
    let currentPlayer = this.state.player;  // Tracks current player

    //Counting null spaces over the board
    for (let r = 0; r<6; r++)         // Scanning over rows
    {
      for (let c = 0; c<7; c++)       // Scanning over columns
      {
        if(board[r][c] === null){
          nulls++;
        }
        //Board is full if no more null spaces are occupied
        if (nulls === (6*7)){ 
          this.state.boardFull = true;  //Declare board full
        }
      }
    }

    //Scanning columns for wins
    for(let c = 0; c <7; c++){
      for (let r = 0; r < 6; r++)
      {
        if (board[r][c] === null)
        {
          verts = 0;
          currentPlayer = null;
        } else if (board[r][c] === currentPlayer) {
          verts++;
        } else {
          verts = 1;
          currentPlayer = board[r][c];
        }

        //Checking if there is a vertical win for the player 
        if(verts >=4) 
        {
          this.state.win = true;   //Declare win
        }
      }
    }

    //Scanning rows for wins
    for(let r = 0; r <6; r++)
    {
      for (let c = 0; c < 7; c++)
      {
        if (board[r][c] === null)
        {
          hors = 0;
          currentPlayer = null;
        } else if (board[r][c] === currentPlayer) {
          hors++;
        } else {
          hors = 1;
          currentPlayer = board[r][c];
        }

        //Checking for horizontal win for the player 
        if(hors >=4) 
        {
          this.state.win = true;    //Declare win
        }
      }

      
    } 
  }

  //Render buttons grid
  renderButtons(){
    
      let btnGrid = [];
      //Render Rows
      for(let r = 0; r<6; r++){
        //Renders Columns
        for(let c = 0; c<7; c++){ 
          btnGrid.push(
          <C4Button 
            //Keeps track of the button
            key={r + " " + c}
            //Events that are handled upon button click
            disabled = {this.state.boardFull || this.state.win}
                            
            onClick  = {(e) => {
              //Switches color to current player
              e.target.style.backgroundColor = this.state.player;
              //Disables ability to click button
              e.target.disabled = true;

              //Update the board tracker
                let newBoard = this.state.gameBoard;    //Create new board variable
                newBoard[r][c] = this.state.player;     //insert the current player state in the board
                this.setState({gameBoard: newBoard});   //set the gameBoard as the temporary new Board variable

              //Scans board for win/board fill
              this.boardScan();
              
              //Checks if there is a win
              if(this.state.win){
                //Sends win alert message
                alert("Game Over! " + this.state.player + " Wins!");
              }

              if(this.state.boardFull){
                //Sends board full alert message
                alert("Game Over! The there are no more free spaces :(");
              }

              //Change player
              this.setState(
                {player: this.state.player === "red" ? "yellow" : "red"}
                )
              
            }
            }
          />);
        }
        btnGrid.push(<br key = {r + "br"} />);
      }
      return btnGrid;
    
  }  

  render()
  {
    return(
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}
export default Grid;