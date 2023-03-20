import http from "http";
console.log(http);
const server = http.createServer(function(request,response){
  let body = "";
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>Hello World</h1>";
  body += "</body>";
  body += "</html>";

  
  response.statusCode = 200;
  response.setHeader("Content-Type","text/html");
  response.end("hello world");
});