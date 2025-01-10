// const asyncHandler = ()=>{}

    const asyncHandler= (requestHandler)=>{
        (req,res,next)=>{
            Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))    
            }
    }




export {asyncHandler}


// const asyncHandler = ()=>{};
// const asyncHandler= (fn)=>{()=>{}}
// const asyncHandler= (fn)=>async ()=>{}

    // using try catch 

// const asyncHandler = (fn)=>async (err, req, res, next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }
// }