const router = require('express').Router();
const {Exercise} = require('../../models');
const withAuth = require('../../utils/auth')