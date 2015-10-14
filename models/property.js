
var Property = function Property (id) {
    this.data.id = id;
    this.init();
};

Property.prototype = {

    data: {
        id: null,
        properties: null,
        ratings: null
    },
    property: null,

    init: function init () {
        this.loadData();
        this.findProperty();
        this.cleanUp();
    },

    /*
     * Loads property & assoc data from file.
     */ 
    loadData: function loadData () {
        this.data.properties = require('../data/properties');
        this.data.ratings = require('../data/ratings');
    },

    /*
     * Clean up memory after use.
     */
    cleanUp: function cleanUp () {
        this.data = null;
    },

    /*
     * Attempt to find the requested property from the loaded data.
     */
    findProperty: function findProperty () {
        var self = this,
            ratings_total = 0;

        if (self.data.properties[self.data.id]) { // Does requested property exist?
            self.property = self.data.properties[self.data.id]; // Get property.
            self.buildFriendsMessage();
            self.property.ratings_count = self.data.ratings[self.property.id].length || null; // Get ratings data if it exists.
            for (var i = 0, i_len = self.data.ratings[self.property.id].length; i < i_len; i ++) { // Calculate the average rating.
                ratings_total += self.data.ratings[self.property.id][i];
            }
            self.property.ratings_average = Math.round((ratings_total / self.property.ratings_count) * 100) / 100;
        }
    },

    /*
     * Processes friends and generates output.
     */
    buildFriendsMessage: function getFriendsList () {

        var rooms_count = this.property.rooms.length,
            friends_count,
            friends;

        for (var i = 0, i_len = rooms_count; i < i_len; i ++) {
            friends_count = this.property.rooms[i].friends.length;
            friends = this.property.rooms[i].friends.sort();

            switch (friends_count) {

                case 0:
                    this.property.rooms[i].friends_message = "";
                    break;
                case 1:
                    this.property.rooms[i].friends_message = friends[0] + " has stayed here";
                    break;
                case 2:
                    this.property.rooms[i].friends_message = friends[0] + " and " + friends[1] + " have stayed here";
                    break;
                default:
                    this.property.rooms[i].friends_message = friends[0] + ", " + friends[1] + " and " + (friends_count - 2) + " other friend" + ((friends_count - 2) > 1 ? 's' : '') + " have stayed here";
                    break;
                    
            }
        }
    },

    /*
     * Returns the property or null.
     */
    getProperty: function getProperty () {
        return this.property;
    }

};

module.exports = Property;