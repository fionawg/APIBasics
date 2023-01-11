const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

const courses = [{ id: 1, name: 'web dev' },
                 { id: 2, name: 'it' },
                 { id: 3, name: 'cybersecurity' }];

// http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// request course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    console.log(parseInt(req.params.id));
    if (!course){
        res.status(404).send("The course with the given ID was not found.");
    }
    return res.send(course);
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});