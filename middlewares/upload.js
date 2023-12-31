const multer  = require('multer');

module.exports = ( multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, './public/upload/users')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) =>{
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg', 'image/bitmap', 'image/tiff', 'image/gif', 'image/eps', 'image/svg', 'image/avif', 'image/webp'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg){
            return cb(null, true);
        }
        return cb(null, false);
    }
}));