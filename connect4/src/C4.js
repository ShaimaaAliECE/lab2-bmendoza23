import React from 'react'

class C4Button extends React.component
{
  render()  {
    return (
        <button>Yellow</button>
    ); 
  }
}
class Grid extends React.component{
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