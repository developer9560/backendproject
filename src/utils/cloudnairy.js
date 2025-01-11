import {v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY ,
    api_secrete:process.env.CLOUDINARY_API_SECRETE ,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath, {
         resource_type: "auto"
        })
        // file has been uloaded successfull
        console.log("file is uploaded on cloudinary", response.url);
        return response ;
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved temporay file as the upload opration got failed
        return null;
    }
}


export {uploadOnCloudinary}


