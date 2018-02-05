import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amtRec: 0,
      amtDue: 0,
      change: {
        total: 0,
        dollars20: 0,
        dollars10: 0,
        dollars5: 0,
        dollars: 0,
        quarters: 0,
        nickels: 0,
        dimes: 0,
        pennies: 0
      }
    }

    this.handleButtonClick =  this.handleButtonClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleAmtReceived = this.handleAmtReceived.bind(this);
    this.handleAmtDue = this.handleAmtDue.bind(this);
  }

  handleButtonClick(e){
    this.setState({
      amtDue:e.target.value,
      amtRec:e.target.value
    })
  }

  handleAmtReceived(e) {
    var value = e.target.value;
    this.setState({ amtRec: value });
  }


  handleAmtDue(e) {
    var value = e.target.value;
    this.setState({ amtDue: value });
  }

 calculate(){
    var received = this.state.amtRec;  
    var due = this.state.amtDue;
    
    var change = {
      total: 0,
      dollars20: 0,
      dollars10: 0,
      dollars5: 0,
      dollars: 0,
      quarters: 0,
      nickels: 0,
      dimes: 0,
      pennies: 0
    }


    var changeDue = (received - due).toFixed(2);
    
    change.total = changeDue;

    var centsDue = Math.round((changeDue) * 100);


        // DOLLARS20 FORMULA
        if (centsDue / 2000 >= 1) {
        var dollars20 = Math.floor(centsDue / 2000);

        change.dollars20 = dollars20;

        centsDue = centsDue - (dollars20 * 2000);
        }

        // DOLLARS10 FORMULA
        if (centsDue / 1000 >= 1) {
        var dollars10 = Math.floor(centsDue / 1000);

        change.dollars10 = dollars10;

        centsDue = centsDue - (dollars10 * 1000);
        }

        // DOLLARS5 FORMULA
        if (centsDue / 500 >= 1) {
        var dollars5 = Math.floor(centsDue / 500);

        change.dollars5 = dollars5;

        centsDue = centsDue - (dollars5 * 500);
        }

        // DOLLARS FORMULA
        if (centsDue / 100 >= 1) {
          var dollars = Math.floor(centsDue / 100);
  
          change.dollars = dollars;
  
          centsDue = centsDue - (dollars * 100);
          }

        // QUARTERS FORMULA
        if (centsDue / 25 >= 1) {
            var quarters = Math.floor(centsDue / 25);
            
            change.quarters = quarters;

            centsDue = centsDue - (quarters * 25);
        }

        // DIMES FORMULA
        if (centsDue / 10 >= 1) {
            var dimes = Math.floor(centsDue / 10);

            change.dimes = dimes;

            centsDue = centsDue - (dimes * 10);
        }

        // NICKELS FORMULA
        if (centsDue / 5 >= 1) {
            var nickels = Math.floor(centsDue / 5);

            change.nickels = nickels;

            centsDue = centsDue - (nickels * 5);
        }

        // PENNIES FORMULA
        if (centsDue / 1 >= 1) {
            var pennies = Math.floor(centsDue / 1);

            change.pennies = pennies;

            centsDue = centsDue - (pennies * 1);
        }

        this.setState({change: change});
    
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
          <div className="col-md-4 rounded">
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
                  <input 
                      type="text" 
                      name="amtDue"
                      onChange={this.handleAmtDue}
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                  />
                </div>
             
                <h5 className="card-title">How much was received?</h5>
              
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input 
                      type="text" 
                      name="amtRec"
                      onChange={this.handleAmtReceived}
                      className="form-control" 
                      aria-label="Amount (to the nearest dollar)" 
                  />
                </div>
              </div>
              
              <div className="card-footer">
                <button 
                      type="button" 
                      className="btn btn-primary btn-lg btn-block" 
                      onClick={this.calculate}>Calculate
                </button>
              </div>
            
            </div>
        </div>

        

        {/* Right Column - Change Due */}
        <div className="col-md-8 rounded">
          <div className="jumbotron">
            
              <div className="card-header text-center alert alert-success" role="alert">
                The total change due is: ${ this.state.change.total }
              </div>
              
              <div className="row">
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Twenties</h5>
                      <p className="card-text">{this.state.change.dollars20}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Tens</h5>
                      <p className="card-text">{this.state.change.dollars10}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Fives</h5>
                      <p className="card-text">{this.state.change.dollars5}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Ones</h5>
                      <p className="card-text">{this.state.change.dollars}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Quarters</h5>
                      <p className="card-text">{this.state.change.quarters}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Dimes</h5>
                      <p className="card-text">{this.state.change.dimes}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Nickels</h5>
                      <p className="card-text">{this.state.change.nickels}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center bg-light border mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Pennies</h5>
                      <p className="card-text">{this.state.change.pennies}</p>
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
