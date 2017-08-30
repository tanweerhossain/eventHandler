import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom'
import { postEvents } from '../../actions/booksActions';

class BookEntry extends React.Component{
    handleSubmit(){
        this.props.postEvents([{
            date: findDOMNode(this.refs.date).value ,
            time: findDOMNode(this.refs.time).value ,
            venue: findDOMNode(this.refs.venue).value ,
            description: findDOMNode(this.refs.description).value ,
            no_of_people_involved: findDOMNode(this.refs.no_of_people_involved).value 
        }])
    }
    render(){
        return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Date :</td>
                        <td><input type='date' ref='date' /></td>
                    </tr><tr>
                        <td>Time :</td>
                        <td><input type='text' ref='time' /></td>
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
                        <td><button onClick={this.handleSubmit.bind(this)} >Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postEvents : postEvents
    },dispatch);
}
export default connect(null,mapDispatchToProps)(BookEntry);