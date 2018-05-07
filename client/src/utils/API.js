import axios from 'axios'

const API = {

    getRsvps: function(){
        return axios.get("/rsvp")
    },

    saveRsvps: function(rsvpObj){
        return axios.post("/rsvp", rsvpObj)
    },

    deleteRsvp: function(id){
        return axios.delete(`/rsvp/${id}`)
    },

    postRsvp: function(rsvpObj){
        return axios.post("/rsvp", rsvpObj)
    }

}

export default API;