const fs         = require('fs');
const path       = require('path');
const async      = require('async');
const HTTPStatus = require('http-status');

module.exports = function(app, wagner) {

  app.get('/v1/shop', function(req, res) {
    wagner.get('Shop')["index"](req).then(function(result) {
        res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
    }).catch(function(error){
        console.log(error);
        res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

};
