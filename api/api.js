const axios = require('axios');

async function getBooks() {
    try {
        const response = await axios.get("http://localhost:5000/books");
        return response.data.data;
    } 
    catch (error) {
        console.log(error);
        return [];
    }
}

async function postBook(newBook) {
    try {
        const response = await axios.post("http://localhost:5000/books", newBook);
        return response;
    } catch (error) {
        console.log(error);
        return;
    }
}

async function putBook(id, editBook) {
    try {
        const response = await axios.put(`http://localhost:5000/books/${id}`, editBook);
        return response;
    } catch (error) {
        console.log(error);
        return;
    }
}

async function deleteBook(id) {
    try {
        const response = await axios.delete(`http://localhost:5000/books/${id}`);
        return response;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = { getBooks, postBook, putBook, deleteBook };
