const cloudinary = require('cloudinary').v2;
// Configuration
    cloudinary.config({ 
        cloud_name: 'dxli91w0b', 
        api_key: '826825787912333', 
        api_secret: 'PrTyjDHKRkWZGsp_SN8UJ57x4II' // Click 'View API Keys' above to copy your API secret
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