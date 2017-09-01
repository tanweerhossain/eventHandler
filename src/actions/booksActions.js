"use strict"
import axios from 'axios';

export function getEvents(){
    return function(dispatch){
        axios.get("/events")
            .then(function(response){
                dispatch({
                    type:"GET_EVENTS",
                    payload: response.data
                })
            })
            .catch(function(error){
                dispatch({
                    type:"GET_EVENTS_REJECTED",
                    payload: "There was an error while getting a events."
                })
            })
    }
}

export function postEvents(events){
    return function(dispatch){
        axios.post("/events",events)
            .then(function(response){
                dispatch({
                    type:"POST_EVENTS",
                    payload: response.data
                })
            })
            .catch(function(error){
                dispatch({
                    type:"POST_EVENTS_REJECTED",
                    payload: "There was an error while posting a new event."
                })
            })
    }
}

export function uploadEvents(event){
    return {
        type:"UPLOAD_EVENTS",
        payload: event
    };
}

export function deleteEvents(id){
    return function(dispatch){
        axios.delete("/events/" + id)
            .then(function(response){
                dispatch({
                    type:"DELETE_EVENT",
                    payload: id
                })
            })
            .catch(function(err){
                dispatch({
                    type:"DELETE_EVENT_REJECTED",
                    payload:err
                })
            })
    }
}