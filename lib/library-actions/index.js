"use server"


import Book from '../models/book.model';
import Contributor from '../models/author.model';

import { connectToDB } from '../mongoose';

export async function getBooksByCategory(cat, page) {
    try {
        const perPage = 20; // Number of items to show per page
        const skip = (page - 1) * perPage; // Calculate how many items to skip based on the page number

        connectToDB(); // Connect to your database
        const query = {
            'type.url': cat, // Filter by the url field within the type object
            // You can add additional filters here if needed
        };
        const totalBooksCount = await Book.countDocuments(query); // Count the total number of books in the database

        const books = await Book.find(query)
            .skip(skip) // Skip the appropriate number of items
            .limit(perPage); // Limit the number of items per page

        const startRange = skip + 1;
        const endRange = Math.min(skip + perPage, totalBooksCount);


        return {
            books,
            totalBooksCount,
            startRange,
            endRange,
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getBooks(page) {
    try {
        const perPage = 20; // Number of items to show per page
        const skip = (page - 1) * perPage; // Calculate how many items to skip based on the page number

        connectToDB(); // Connect to your database

        const totalBooksCount = await Book.countDocuments(); // Count the total number of books in the database

        const books = await Book.find()
            .skip(skip) // Skip the appropriate number of items
            .limit(perPage); // Limit the number of items per page

        const startRange = skip + 1;
        const endRange = Math.min(skip + perPage, totalBooksCount);

        return {
            books,
            totalBooksCount,
            startRange,
            endRange,
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getBook(id){
    try {
        connectToDB(); // Connect to your database
        const book = await Book.findOne({bookId: id});
        return book;
    } catch (error) {
        console.log(error);
    }
}


export const getAuthor = async (id) => {
    try {
        connectToDB();
        const author = await Contributor.findOne({authorId: id});
        if(!author) {
            return "author not found";
        }
        return author;
    } catch (error) {
        console.log(error);
    }
}


export const getRandomAuthors = async () => {
    try {
        connectToDB();
        const authors = await Contributor.find();
        if (!authors || authors.length === 0) {
            return "Authors not found";
        }

        // Shuffle the authors array
        const shuffledAuthors = shuffleArray(authors);

        // Select the first 20 authors
        const randomAuthors = shuffledAuthors.slice(0, 20);
        
        return randomAuthors;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching random authors");
    }
}

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
