const filter = require('node-image-filter');
const express = require('express');

const app = express();

app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json());

export default function handle(req, res){
    const { imgUrl } = req.body;
    console.log(imgUrl);
    return res.json(imgUrl);
}


/* filter.render(imageUrl, filter.preset.grayscale, function(result)
    {
        res.send(result);
    });
*/
// upload image -> send image to server -> server add metadata -> send to firebase ->
// send image to server to apply filter -> return image