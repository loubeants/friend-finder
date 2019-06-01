var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var match;
        var responses = newFriend.scores;
        var diffArr = [];
        
        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < responses.length; j++) {
                var difference = (Math.abs(friends[i].scores[j] - responses[j]))
                totalDiff += difference
            }
            diffArr.push(totalDiff)
        };
        
        friends.push(newFriend);
        match = Math.min(...diffArr);
        var matchIndex = (diffArr.indexOf(match));
        res.json(friends[matchIndex]);
    });
};