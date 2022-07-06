const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String },
        level: { type: String },
    },
    {
        timestamps: true,
    },
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete);

module.exports = mongoose.model('Course', Course);
