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
    }
    componentDidMount(){
        this.props.getEvents();
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
        
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Date :</td>
                            <td><input type='date' ref='date' value={this.state.date} onChange={()=>{
                                this.setState(...this.state,{
                                    date : findDOMNode(this.refs.date).value
                                })
                            }}/></td>
                        </tr><tr>
                            <td>Time :</td>
                            <td><input type='text' ref='time' placeholder="hh:mm" value={this.state.time} onChange={()=>{
                                this.setState(...this.state,{
                                    time : findDOMNode(this.refs.time).value
                                })
                            }}/></td>
                        </tr><tr>
                            <td>Venue :</td>
                            <td><input type='text' ref='venue' value={this.state.venue} onChange={()=>{
                                this.setState(...this.state,{
                                    venue : findDOMNode(this.refs.venue).value
                                })
                            }} /></td>
                        </tr><tr>
                            <td>Description :</td>
                            <td><input type='text' ref='description' value={this.state.description} onChange={()=>{
                                this.setState(...this.state,{
                                    description : findDOMNode(this.refs.description).value
                                })
                            }} /></td>
                        </tr><tr>
                            <td>Number of people involved :</td>
                            <td><input type='number' ref='no_of_people_involved' value={this.state.no_of_people_involved} onChange={()=>{
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

function mapStateToProps(state){
    return{
        events : state.events
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        uploadEvents : uploadEvents
        //otherKey : other action function,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateEntry)