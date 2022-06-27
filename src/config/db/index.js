const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Nodejs_blog');
        console.log('Success!!!');
    } catch (error) {
        console.log('Failed!!!');
    }
}

module.exports = { connect };
