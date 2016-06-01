var React = require('react');

var Jawn = React.createClass({
    getInitialState: function() {
        return this.props.jawn;
    },
  render: function() {
        return (
          <div>
            <div>
                <h1>Amount of Companies: {this.state.companies}</h1>
                <h1>Amount Remote: {this.state.remote}</h1>
          </div>
          <div>
                  {this.state.title.map(function(title){
                        return <h1>{title.type}: {title.amount}</h1>;
                  })}
          </div>
            <div>
                {this.state.technologies.map(function(technology){
                      return <h1>{technology.type} {technology.amount}</h1>;
                })}
          </div>
            <div>
                {this.state.employmentType.map(function(empType){
                      return <h1>{empType.type} {empType.amount}</h1>;
                })}
          </div>
            <div>
                <h1>COMPANIES: {this.state.companies}</h1>
          </div>
            <div>
                {this.state.jobLocation.map(function(jobLoc){
                      return <h1>{jobLoc.city} {jobLoc.amount}</h1>;
                })}
          </div>
            <div>
                {this.state.type.map(function(type){
                      return <h1>{type.type} {type.amount}</h1>;
                })}
          </div>
          </div>
        );
    }
  });


module.exports = Jawn;
