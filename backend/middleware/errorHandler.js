const errorHandler=(err,req,res,next)=>{
    console.log('error handler :',err.message)
    const statusCode=res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message:err.message,
        stack:development === 'production' ? null : err.stack
    })
};

module.exports={
    errorHandler
}