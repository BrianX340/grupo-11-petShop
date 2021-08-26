const { getAllProducts , searchProductByName } = require('../database/db');
const path = require('path')

module.exports = {
    adminPanel: (req,res) =>{
        res.render('admin//adminPanel')
    },
    allProducts: (req,res) =>{
        res.send(getAllProducts())
    },
    searchProducts: (req,res) =>{
        res.render('admin//resultProductSearch', {productos:searchProductByName(req.params.name)})
    },
    createProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    editProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    deleteProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
}