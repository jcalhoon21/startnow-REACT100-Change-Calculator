import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      

    }

    this.handleButtonClick =  this.handleButtonClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleButtonClick(){
    this.calculate();
 }

 calculate(){

 }

  render() {
    return (
      <div className="container">
      
        <div>
          <h2>Change Calculator</h2>
          <hr className="my-3"></hr>
        </div>
        
       {/* Left Column - Enter Information */}   
        <div className="row">
          <div className="col-4 rounded">
            <div className="card">
              
              <div className="card-header">
                Enter Information
              </div>
              
              <div className="card-body">
                <h5 className="card-title">How much is due?</h5>
                
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>
             
                <h5 className="card-title">How much was received?</h5>
              
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>
              </div>
              
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-lg btn-block">Calculate</button>
              </div>
            
            </div>
        </div>

        {/* Right Column - Change Due */}
        <div className="col-8 rounded">
          <div className="jumbotron">
            
              <div className="card-header text-center alert alert-success" role="alert">
                The total change due is: ?
              </div>
              
              <div className="row">
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Twenties</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Tens</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Fives</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Ones</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Quarters</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Dimes</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Nickels</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Pennies</h5>
                      <p className="card-text">?</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

      
    )
  }
}

export default App;
