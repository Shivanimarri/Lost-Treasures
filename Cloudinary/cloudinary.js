const cloudinary = require('cloudinary').v2;
// Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
 // Click 'View API Keys' above to copy your API secret
    });


   async function getUploadUrl(id){
      var respnse = null;
      cloudinary.uploader.upload("C:/Users/marri/Downloads/"+id
      ).then((data)=>{
            respnse = data.url;
      });
      return respnse;
}

module.exports  = {getUploadUrl};