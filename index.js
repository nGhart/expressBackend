const express = require('express');
const server = express();

const handleAllRequests=(request, response)=>{
    response.send("Response from server.use")
}
const handlePostRequest=(request,response)=>{
response.json({msg:"Example of POST method in use"})
}
const handleGetRequest=(request,response)=>{
response.json({msg:"Example of GET method in use"})
}
const handlePutRequest=(request,response)=>{
response.send("Example of PUT method in use")
}
const handleDeleteRequest=()=>{
  response.json({msg:"Example of DEL method in use"})
}

server.use('/post', handleAllRequests);
server.post("/post", handlePostRequest)
server.get("/get", handleGetRequest)
server.put("/put", handleGetRequest)
server.delete("/del",handleDeleteRequest)
server.listen(3000, '127.0.0.1', function () {
  console.log('Ready to accept request');
});