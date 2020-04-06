const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors');
const port = 4000

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
  
// read feed from json file
const fileContents = fs.readFileSync('./feed/data.json', 'utf-8');
const feed = JSON.parse(fileContents);

app.get('/api/data', (req, res) => res.send(feed))
app.get('/api/data/:slug', (req, res) => {
    const finditem =  feed.filter((item) => {
        return item.slug === req.params.slug;
    });
    res.send(finditem)
})

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))