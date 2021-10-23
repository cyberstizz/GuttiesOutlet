const express from 'express'; //pointing to express dependancy
const app = express(); // initiation of server as app variable
const port = process.env.PORT || 5000; // created port variable in case of environment variables


// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11



// below displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 