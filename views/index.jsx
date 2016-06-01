var React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');

var Jawn = React.createClass({
    getInitialState: function() {
        return this.props.jawn;
    },
  render: function() {
    console.log(this.state.title)
        return (
          <div>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.0/fixed-data-table-base.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.0/fixed-data-table.min.css" />
            <div>
                <h1>Amount of Companies: {this.state.companies}</h1>
                <h1>Amount Remote: {this.state.remote}</h1>
          </div>
          <div>
            <Table
              rowsCount={this.state.title.length}
              rowHeight={50}
              headerHeight={50}
              width={1000}
              height={500}>
              <Column
                header={<Cell>Job Titles *{this.state.companies} reported*</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.title[props.rowIndex].type}
                  </Cell>
                )}
                width={200}
              />
              <Column
                header={<Cell>Amount</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.title[props.rowIndex].amount}
                  </Cell>
                )}
                width={100}
              />
            </Table>
          </div>
          <div>
            <Table
              rowsCount={this.state.technologies.length}
              rowHeight={50}
              headerHeight={50}
              width={1000}
              height={500}>
              <Column
                header={<Cell>Skills Listed *{this.state.amt_technologies} reported*</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.title[props.rowIndex].type}
                  </Cell>
                )}
                width={200}
              />
              <Column
                header={<Cell>Amount</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.title[props.rowIndex].amount}
                  </Cell>
                )}
                width={100}
              />
            </Table>
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
