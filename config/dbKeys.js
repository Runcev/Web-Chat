if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: '' }; // Add your remote db connection string here
} else {
    module.exports = { mongoURI: 'mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb' }; // Add your local db connection string here
}