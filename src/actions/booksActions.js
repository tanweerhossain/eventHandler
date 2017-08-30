"use strict"

export function getEvents(events){
    return {
        type:"GET_EVENTS",
        payload: events
    }
}

export function postEvents(events){
    return {
        type:"POST_EVENTS",
        payload: events
    }
}

export function uploadEvents(event){
    return {
        type:"UPLOAD_EVENTS",
        payload: event
    };
}

export function deleteEvents(id){
    return {
        type:"DELETE_EVENT",
        payload: id
    };
}