import React from 'react'

class C4Button extends React.Component
{
  render()  
  {
    return (
        <button>Yellow</button>
    ); 
  }
}
class Grid extends React.Component{
  renderButton(){
    return (
        <C4Button/>
    );
  }

  render()
  {
    return(
      <div>
        {this.renderButton()}
      </div>
    )
  }
}

export default Grid;