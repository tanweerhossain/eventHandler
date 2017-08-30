"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/booksActions';
import BookEntry from './bookEntry';

class BooksList extends React.Component{
    componentDidMount(){
        //Calling 1st dispatch function
        this.props.getEvents([{
            date: "2017-08-30" ,
            time: '15:00:00' ,
            venue: 'Bhubaneswar',
            description: 'TCS drive' ,
            no_of_people_involved: 5 
        },{
            date: "2017-08-31" ,
            time: '09:00:00' ,
            venue: 'Bangalore',
            description: 'TechSystem drive' ,
            no_of_people_involved: 3 
        }]);
    }
    render(){
        const booksCopy = this.props.books.map((x)=>{
            return Object.assign({},x);
        })
        const booksList = booksCopy.map((booksArr)=>{
            return(
                <div key={booksArr.date}>
                    <h2>{booksArr.date}</h2>
                    <h2>{booksArr.time}</h2>
                    <h2>{booksArr.venue}</h2>
                    <h2>{booksArr.description}</h2>
                    <h2>{booksArr.no_of_people_involved}</h2>
                </div>
            )
        })
        return (
            <div>
                <BookEntry />
                {booksList}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        books : state.events
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        //otherKey : other action function,
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);