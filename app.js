const express = require('express');
const bodyParser = require('body-parser');
const { getBooks, postBook, putBook, deleteBook } = require('./api/api');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', async (req, res) => {
    books = await getBooks();
    res.render('index', { books });
});

app.post('/create', async (req, res) => {
    const newBook = req.body;
    await postBook(newBook)
    res.redirect('/');
});

app.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    const editBook = req.body;
    await putBook(id, editBook);
    res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await deleteBook(id)
    res.redirect('/');
});

// Listen 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
