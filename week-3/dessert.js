/*
============================================
; Title: Assignment 3.2 - Restaurant App
; File Name: dessert.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the restaurant.html file
; Resources: 
;   JavaScript code was taken from "WEB 330 Assign_3.pdf" 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso.
===========================================
*/

import { Product } from "./product.js"; // Import product class

export class Dessert extends Product // Export Dessert class
{
    constructor(name, price)
    {
        super(name, price);
    }
}