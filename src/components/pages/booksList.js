"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,deleteEvents } from '../../actions/booksActions';
import BookEntry from './bookEntry';
import UpdateEntry from './updateEntry';

class BooksList extends React.Component{
    
    constructor(props){
        super(props);
        const x = this.props.events.filter((record)=>{
            return true;
        });
        this.state = {
            editable : false,
            id : ""
        }
    }
    componentDidMount(){
        //Calling 1st dispatch function
        this.props.getEvents();
    }
    handleDelete(id){
        this.props.deleteEvents(id);
    }
    toggleEditableMode(){
        this.setState(...this.state,{
            editable : false
        })
    }
    updateEntryHandler(event){

    }
    handleEdit(id){
        this.setState(...this.state,{
            editable : true,
            id : id
        })
    }
    view(){
        if (this.state.editable)
            return (<UpdateEntry 
                        //events={this.state.events} 
                        //updateEntryHandler={this.updateEntryHandler.bind(this,event)} 
                        id={this.state.id} 
                        toggleEditableMode={this.toggleEditableMode.bind(this)}
                    />);
        else
            return (<BookEntry />);
    }
    // transferingPropsDataToState(){
    //     this.setState(...this.state,{
    //         events: this.props.events
    //     })
    // }
    render(){

        const booksCopy = this.props.events.map((x)=>{
            return Object.assign({},x);
        })
        const booksList = booksCopy.map((booksArr)=>{
            return(
                <tr key={booksArr._id}>
                    <td>{booksArr.date}</td>
                    <td>{booksArr.time}</td>
                    <td>{booksArr.venue}</td>
                    <td>{booksArr.description}</td>
                    <td>{booksArr.no_of_people_involved}</td>
                    <td>
                        <button onClick={this.handleEdit.bind(this,booksArr._id)} >
                            Edit
                        </button>
                    </td>
                    <td>
                        <button onClick={this.handleDelete.bind(this,booksArr._id)} >
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
        const view = this.view();
        return (
            <div>
                {view}
                <table>
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>VENUE</th>
                            <th>DESCRIPTION</th>
                            <th>NO OF PEOPLE INVOLVED</th>
                        </tr>
                    </thead>
                    <tbody>
                {booksList}
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
        deleteEvents : deleteEvents
        //otherKey : other action function,
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);