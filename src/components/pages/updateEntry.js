'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,uploadEvents } from '../../actions/booksActions';
import { findDOMNode } from 'react-dom';

class UpdateEntry extends React.Component{
    constructor(props){
        super(props);
        const id = this.props.id;
        const filteredEvents = this.props.events.filter((record)=>{
            return (record._id ===id);
        })
        const { _id, date, description, venue, time, no_of_people_involved} = filteredEvents[0];
        this.state = {
            _id : _id,
            date: date,
            description : description,
            venue:venue,
            time:time,
            no_of_people_involved:no_of_people_involved
        };
        console.log('constructor is called');
        
    }
    componentDidMount(){
        //this.props.getEvents();
        console.log('componentDidMount is called');
    }
    handleSubmit(){
        // this.props.updateEntryHandler(this.state)
        this.props.uploadEvents(this.state._id ,this.state )
        this.props.toggleEditableMode();
    }
    handleDiscard(){
        this.props.toggleEditableMode();
    }
    render(){
        console.log('render is called');
        
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Date :</td>
                            <td><input type='date' ref='date' value={ this.props.events.date || this.state.date} onChange={()=>{
                                this.setState(...this.state,{
                                    date : findDOMNode(this.refs.date).value
                                })
                            }}/></td>
                        </tr><tr>
                            <td>Time :</td>
                            <td><input type='text' ref='time' placeholder="hh:mm" value={ this.props.events.time || this.state.time} onChange={()=>{
                                this.setState(...this.state,{
                                    time : findDOMNode(this.refs.time).value
                                })
                            }}/></td>
                        </tr><tr>
                            <td>Venue :</td>
                            <td><input type='text' ref='venue' value={ this.props.events.venue || this.state.venue} onChange={()=>{
                                this.setState(...this.state,{
                                    venue : findDOMNode(this.refs.venue).value
                                })
                            }} /></td>
                        </tr><tr>
                            <td>Description :</td>
                            <td><input type='text' ref='description' value={ this.props.events.description || this.state.description} onChange={()=>{
                                this.setState(...this.state,{
                                    description : findDOMNode(this.refs.description).value
                                })
                            }} /></td>
                        </tr><tr>
                            <td>Number of people involved :</td>
                            <td><input type='number' ref='no_of_people_involved' value={ this.props.events.no_of_people_involved || this.state.no_of_people_involved} onChange={()=>{
                                this.setState(...this.state,{
                                    no_of_people_involved : findDOMNode(this.refs.no_of_people_involved).value
                                })
                            }} /></td>
                        </tr><tr>
                            <td colSpan="2" >
                                <center>
                                    <button onClick={this.handleSubmit.bind(this)} >Save</button>
                                    <button onClick={this.handleDiscard.bind(this)} >Discard</button>
                                </center>
                            </td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         events : state.events
//     }
// }
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        uploadEvents : uploadEvents
        //otherKey : other action function,
    },dispatch)
}

export default connect(null,mapDispatchToProps)(UpdateEntry)