const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKeys: false
    }
);

module.exports = moongose.model('storages', StorageSchema)