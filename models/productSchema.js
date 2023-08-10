const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:[true,'price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['apple','samsung','realme','vivo'],
            message:`{VALUE} is not supported`
        }
    }

});

const productCollection = mongoose.model('Product',productSchema);

module.exports = productCollection;