/* eslint-disable consistent-return */
export function validateEmptyFields(req, res, next) {

    // const { photo } = req.files;
  
    const {
        title, description, city, address, type, photo, price, rooms, status
    } = req.body;

    if (!title || !description || !city || !address || !type || !photo || !price || !rooms || !status) {
        return res.status(400).json({
        status: 400,
        error: 'title, description, city, address, type, photo, price, rooms, status are required !',
        });
    }
    next();
}
