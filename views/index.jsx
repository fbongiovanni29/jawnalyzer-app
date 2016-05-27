var React = require('react');

var Jawn = React.createClass({
    getInitialState: function() {
        return this.props.jawn;
    },
  render: function() {
        return (
          <div>
              <h1>REMOTE: {this.state.remote}</h1>
              {this.state.title.map(function(title){
                    return <h1>{title.type} {title.amount}</h1>;
              })}
              {this.state.technologies.map(function(technology){
                    return <h1>{technology.type} {technology.amount}</h1>;
              })}
              {this.state.employmentType.map(function(empType){
                    return <h1>{empType.type} {empType.amount}</h1>;
              })}
              <h1>COMPANIES: {this.state.companies}</h1>
              {this.state.jobLocation.map(function(jobLoc){
                    return <h1>{jobLoc.city} {jobLoc.amount}</h1>;
              })}
              {this.state.type.map(function(type){
                    return <h1>{type.type} {type.amount}</h1>;
              })}
         </div>
        );
    }
  });


module.exports = Jawn;
