const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    contact: {
        type: Object,
        default: {
            email: '',
            phone:[]
        }
    },
    links: {
        type: Object,
    },
    show:{
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
});


//Model---------------------------->
const Model = mongoose.model('Footer', Schema);

//Export----------------------------->
module.exports = Model;

// Proceed in sme maner as footer.