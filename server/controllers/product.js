const { Product } = require("../models/Product");
const multer = require('multer');
const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png' || ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

module.exports = {
    ImageUpload(req, res) {

        upload(req, res, err => {
            if (err) {
                return res.json({ success: false, err })
            }
            return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
        })
    },
    ProductUpload(req, res) {

        //save all the data we got from the client into the DB 
        const product = new Product(req.body)

        product.save((err) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true })
        })

    },
    ProductGet(req, res) {


        let order = req.body.order ? req.body.order : "desc";
        let sortBy = "_id";
        let limit = req.body.limit ? parseInt(req.body.limit) : 100; // 
        let skip = parseInt(req.body.skip)

        let findArgs = {};
        let term = req.body.searchTerm;
        console.log(term)
        findArgs=req.body.filters
        // for (let key in req.body.filters) {
        //     if (req.body.filters[key].length > 0) {
        //             findArgs[key] = req.body.filters[key]  
        //     }
        // }

        if(term) {
            Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
        } else {
            Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
        }

        

    },


    //?id=${productId}&type=single
    //id=12121212,121212,1212121   type=array 
    ProductById(req, res) {

        let type = req.query.type
        let productIds = req.query.id
        console.log("req.query.id", req.query.id)

        if (type === "array") {
            let ids = req.query.id.split(',');
            productIds = [];
            productIds = ids.map(item => {
                return item
            })
        }

        Product.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
    }


}
