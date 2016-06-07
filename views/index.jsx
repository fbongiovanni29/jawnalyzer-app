import FixedDataTable from 'fixed-data-table'
import React from 'react'
import { Row, Col, Navbar, Nav } from 'react-bootstrap'
const {Table, Column, Cell} = require( 'fixed-data-table' )


var Jawn = React.createClass( {
  getInitialState: function () {
    return this.props.jawn;
  },
  render: function () {
    return (
    <div>
      <Navbar>
          <Navbar.Header>
              <Navbar.Brand>
                  Jawnalyzer
              </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
              <Navbar.Header>
                  <Navbar.Brand>
                      { this.state.companies } Companies
                  </Navbar.Brand>
              </Navbar.Header>
          </Nav>
      </Navbar>
      <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.0/fixed-data-table-base.min.css" />
      <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.0/fixed-data-table.min.css" />
      <Row className="show-grid">
        <Col md={ 3 }>
        <Table
               rowsCount={ this.state.title.length }
               rowHeight={ 50 }
               headerHeight={ 50 }
               width={ 300 }
               height={ this.state.title.length * 50 + 50 }>
          <Column
                  header={ <Cell>
                             Job Titles *
                             { this.state.companies } reported*
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.title[ props.rowIndex ].type }
                           </Cell>
                         ) }
                  width={ 200 } />
          <Column
                  header={ <Cell>
                             Amount
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.title[ props.rowIndex ].amount }
                           </Cell>
                         ) }
                  width={ 100 } />
        </Table>
        </Col>
        <Col md={ 3 }>
        <Table
               rowsCount={ this.state.technologies.length }
               rowHeight={ 50 }
               headerHeight={ 110 }
               width={ 300 }
               height={ this.state.technologies.length * 50 + 50 }>
          <Column
                  header={ <Cell>
                             Sum amount of { this.state.amt_technologies } companies listed multiple skillsets/technologies used.
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.technologies[ props.rowIndex ].type }
                           </Cell>
                         ) }
                  width={ 200 } />
          <Column
                  header={ <Cell>
                             Amount
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.technologies[ props.rowIndex ].amount }
                           </Cell>
                         ) }
                  width={ 100 } />
        </Table>
        </Col>
        <div>
          <Col md={ 3 }>
          <Table
                 rowsCount={ this.state.employmentType.length }
                 rowHeight={ 50 }
                 headerHeight={ 50 }
                 width={ 300 }
                 height={ this.state.employmentType.length * 50 + 50 }>
            <Column
                    header={ <Cell>
                               Employment Types
                             </Cell> }
                    cell={ props => (
                             <Cell {...props}>
                               { this.state.employmentType[ props.rowIndex ].type }
                             </Cell>
                           ) }
                    width={ 200 } />
            <Column
                    header={ <Cell>
                               Amount
                             </Cell> }
                    cell={ props => (
                             <Cell {...props}>
                               { this.state.employmentType[ props.rowIndex ].amount }
                             </Cell>
                           ) }
                    width={ 100 } />
          </Table>
          <br/>
          <Table
                 rowsCount={ this.state.type.length }
                 rowHeight={ 50 }
                 headerHeight={ 50 }
                 width={ 300 }
                 height={ this.state.type.length * 50 + 50 }>
            <Column
                    header={ <Cell>
                               Company Types
                             </Cell> }
                    cell={ props => (
                             <Cell {...props}>
                               { this.state.type[ props.rowIndex ].type }
                             </Cell>
                           ) }
                    width={ 200 } />
            <Column
                    header={ <Cell>
                               Amount
                             </Cell> }
                    cell={ props => (
                             <Cell {...props}>
                               { this.state.type[ props.rowIndex ].amount }
                             </Cell>
                           ) }
                    width={ 100 } />
          </Table>
          </Col>
        </div>
        <Col md={ 3 }>
        <Table
               rowsCount={ this.state.jobLocation.length }
               rowHeight={ 50 }
               headerHeight={ 50 }
               width={ 300 }
               height={ this.state.jobLocation.length * 50 + 50 }>
          <Column
                  header={ <Cell>
                             Job Locations
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.jobLocation[ props.rowIndex ].type }
                           </Cell>
                         ) }
                  width={ 200 } />
          <Column
                  header={ <Cell>
                             Amount
                           </Cell> }
                  cell={ props => (
                           <Cell {...props}>
                             { this.state.jobLocation[ props.rowIndex ].amount }
                           </Cell>
                         ) }
                  width={ 100 } />
        </Table>
        </Col>
      </Row>
    </div>
    );
  }
} );


module.exports = Jawn;
