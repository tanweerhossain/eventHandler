'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,uploadEvents } from '../../actions/booksActions';

class UpdateEntry extends React.Component{
    componentDidMount(){
        console.log('hello1')
        this.props.getEvents();
        console.log('hello2')
    }
    render(){
        const id = this.props.id;
        console.log('render ',id)
        const event = this.props.events.filter((record)=>{
            return (record._id ===id);
        })
        return (
            <div>
                hello
            {/* <table>
                <tbody>
                    <tr>
                        <td>Date :</td>
                        <td><input type='date' ref='date' value={} /></td>
                    </tr><tr>
                        <td>Time :</td>
                        <td><input type='text' ref='time' placeholder="hh:mm" /></td>
                    </tr><tr>
                        <td>Venue :</td>
                        <td><input type='text' ref='venue' /></td>
                    </tr><tr>
                        <td>Description :</td>
                        <td><input type='text' ref='description' /></td>
                    </tr><tr>
                        <td>Number of people involved :</td>
                        <td><input type='number' ref='no_of_people_involved' /></td>
                    </tr><tr>
                        <td colSpan="2" >
                            <center>
                                <button onClick={this.handleSubmit.bind(this)} >Save</button>
                            </center>
                        </td>
                    </tr>
                </tbody> 
            </table>*/}
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