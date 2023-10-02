const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('thanh cong');
    } catch (error) {
        console.log('that bai');
    }
}

module.exports = { connect };
