const productModel = require('../models/productSchema');
const getAllProduct = async (req, res) => {

    try {
        const fetchData = await productModel.find({});
        res.status(200).json({ fetchData });

    } catch (error) {
        console.log('error in fetch data', error);
    }
}

const getAllProductByName = async (req, res) => {
    try {

        const { company, name, featured, sort, select, page, limit } = req.query;
        const querySelector = {};

        if (company) {
            querySelector.company = company;
        }
        if (name) {
            querySelector.name = { $regex: name, $options: "i" };
        }
        if (featured) {
            querySelector.featured = featured;
        }
        let apiData = productModel.find(querySelector);

        if (sort) {
            const sortFix = sort.replaceAll(",", " ");
            apiData = apiData.sort(sortFix);
        }

        if (select) {

            const selectFix = select.replaceAll(",", " ");
            apiData = apiData.select(selectFix);
        }
        
        if (page || limit) {
            let pageNumber = Number(page) || 1;
            let limitPerPage = Number(limit) || 2;
            let skip = (pageNumber - 1) * limitPerPage;
            apiData = apiData.skip(skip).limit(limitPerPage);
        }

        const fetchData = await apiData;
        res.status(200).json({ fetchData });

    } catch (error) {
        console.log('error in fetch data', error);
    }
}

module.exports = { getAllProduct, getAllProductByName };