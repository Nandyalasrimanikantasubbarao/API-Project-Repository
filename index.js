const express = require("express");
//Database
const Database=require("./database");
//Initialise express
const Bokey=express();

Bokey.get("/",(req,res)=>{
    return res.json({books: Database.books});
});

Bokey.get("/is/:isbn",(req,res)=>{
    const getSpecificBook=Database.books.filter(
        (book)=>book.ISBN===req.params.isbn
    );
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the ISBN of ${req.params.isbn}`});
    }
    return res.json({book: getSpecificBook});
});

Bokey.get("/c/:category", (req,res)=>{
    const getSpecificBook=Database.books.filter(
        (book) => book.category.includes(req.params.category)
    )
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the category of ${req.params.category}`});

    };
    return res.json({book: getSpecificBook});
});

Bokey.get("/author",(req,res)=>{
    return res.json({authors:Database.author});
});

Bokey.get("/author/book/:isbn",(req,res)=>{
    const getSpecificAuthor =Database.author.filter(
        (author)=>author.books.includes(req.params.isbn)
    );
    if(getSpecificAuthor.length===0){
        return res.json({
            error:`No author found for the book of ${req.params.isbn}`
        });
    }
    return res.json({authors:getSpecificAuthor});
});

Bokey.get("/publications",(req,res)=>{
    return res.json({publications:Database.publications})
});

Bokey.listen(3005,()=>{
    console.log("Server is up and running");
});