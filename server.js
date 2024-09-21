// const express = require('express')
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send ("Hello world");
// });
// app.listen( port, () => console.log(`app listening on port ${port}`));



const express = require('express')
const employeesRoutes = require('./src/employees/routes');
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {

    res.send("hello ninjas don't panic");

});
app.use('/api/v1/employees', employeesRoutes);

app.listen(port, console.log(`app is listening on ${port}`));