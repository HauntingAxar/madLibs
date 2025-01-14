var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `One ${formData.adjective1} morning, a ${formData.adjective2} ${formData.noun1} decided to ${formData.verb1} to the ${formData.noun2} in search of an adventure.
  Along the way, it spotted a ${formData.noun3} that seemed to be ${formData.verb2} in the distance. Curiosity got the best of it, and the ${formData.noun4} quickly ran
  over to ${formData.verb3} the situation. It turned out to be a thrilling experience that the ${formData.noun5} would never forget.`
}

function generateStory2(formData){
  return `The ${formData.adjective1} ${formData.noun1} decided to ${formData.verb1} to the ${formData.noun2} for a fun day of exploration. Along the way it stopped to ${formData.verb2}
  with some friendly ${formData.noun3} that were playing near the path. After a while, it decided to ${formData.verb3} and continue on its journey. As it reached the ${formData.noun4},
  it noticed a ${formData.adjective2} ${formData.noun5} sitting quietly in the corner, waiting for something exciting to happen.`
}

function generateStory3(formData){
  return `The ${formData.adjective1} ${formData.noun1} decided to ${formData.verb1} to the ${formData.noun2}. Along the way, it stopped to ${formData.verb2} with some ${formData.noun3}
  and ${formData.noun4}. After a while it finally reached the bridge, where a ${formData.adjective2} ${formData.noun5} was waiting to ${formData.verb3}.`
}