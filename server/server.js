//backend should go
const { getJson } = require("serpapi");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());


app.get("/api/game", (req, res) => {
    //first find a business

    getJson({
        engine: "yelp",
        find_desc: "food",
        find_loc: "New Jersey, United States",
        api_key: "[API KEY]"
    }, (searchJson) => {

        
        const pickRand = Math.floor(Math.random() * searchJson["organic_results"].length)

        const business = searchJson["organic_results"][pickRand];
        const businessID = business.place_ids[0];
        const trueRating = business.rating;

        //business's reviews

        getJson({
            engine: "yelp_reviews",
            place_id: businessID,
            api_key: "[API KEY]"
        }, (reviewJson) => {
            const gameData = {
                name: business.title,
                rating: trueRating,
                reviews: reviewJson["reviews"].map(rev => ({
                    text: rev.comment,
                    photo: rev.images ? rev.images[0] : null,
                    user: rev.username
                }))
            };

            res.json(gameData);
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Live server; listening on http://localhost:${PORT}');
});
