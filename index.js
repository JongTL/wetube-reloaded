import "core-js";

import express from "express";
//const express = require('express');
const app = express();

const PORT =4000;


const handleListening = () => console.log(`listening on:https://localhost:${PORT}`);
const handleHome=(req,res)=> res.send("hello from home");
const handleProfile = (req,res) =>res.send("your are on my profile");

app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(PORT,handleListening);
