mysql = require('mysql');

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    })

// see example in https://codeforgeek.com/2015/03/restful-api-node-and-express-4/

    // LECTURE DES UTILISATEURS
    router.get("/customers",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=? ORDER BY cli_date_creation desc";
        var table = ["client","societe_id", '1'];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query  :" + err});
            } else {
               // res.json({"Error" : false, "Message" : "Success", "customer" : rows});
                res.json(rows);
            }
        });
    });

// POSTMAN test request JSON/BODY
// {
// "societe_id":"1",
// "cli_nom":"Renoir",
// "cli_prenom":"Myriam",
// "cli_adresse1":"8 rue de la gare",
// "cli_cp":"52300",
// "cli_ville":"Joinville",
// "cli_tel":"",
// "cli_mobile":"0625441104",
// "cli_email":"test@gmail.fr"
// }
    // AJOUT UTILISATEUR
   router.post("/customers/:societe_id",function(req,res){
        var query = "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, NOW(), ?, ?, ?,'', ?, ?, ? , ? , ?, '', '')";
        var table = ["client","societe_id","cli_date_creation","cli_nom", "cli_prenom", "cli_adresse1", "cli_adresse2", "cli_cp", 
        "cli_ville","cli_tel", "cli_mobile", "cli_email", "cli_texte", "cli_societe",
        req.params.societe_id,
        req.body.cli_nom, 
        req.body.cli_prenom, 
        req.body.cli_adresse1, 
        req.body.cli_cp, 
        req.body.cli_ville,
        req.body.cli_tel, 
        req.body.cli_mobile, 
        req.body.cli_email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query :" + err});
            } else {
                res.json({"Error" : false, "Message" : "Customer Added !"});
            }
        });
    });

   // MODIFICATION UTILISATEUR
   router.put("/customers/:cli_id",function(req,res){
        var query = "UPDATE ?? SET ??=NOW(), ??=?, ??=?, ??=?, ??=?, ??=?, ??=?, ??=?, ??=? WHERE ??=?";
        var table = ["client","cli_date_creation",
         "cli_nom",     req.body.cli_nom, 
         "cli_prenom",  req.body.cli_prenom, 
         "cli_adresse1", req.body.cli_adresse1, 
         "cli_cp",      req.body.cli_cp, 
         "cli_ville",   req.body.cli_ville, 
         "cli_tel",     req.body.cli_tel,
         "cli_mobile",  req.body.cli_mobile,
         "cli_email",   req.body.cli_email,
         "cli_id",      req.params.cli_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query :" + err});
            } else {
                res.json({"Error" : false, "Message" : "Customer updated " +  req.params.cli_id + "!"});
            }
        });
    });

// CONSULTATION D'UN CLIENT
router.get("/customers/:cli_id",function(req,res){
        var query = "SELECT * from ?? WHERE ??=?";
        var table = ["client","cli_id",req.params.cli_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query :" + err});
            } else {
                res.json(rows[0]); // return first result
            }
        });
    });

// SUPPRESION D'UN CLIENT
router.delete("/customers/:cli_id",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["client","cli_id",req.params.cli_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query  :" + err});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with cli_id "+req.params.cli_id});
            }
        });
    });

}
module.exports = REST_ROUTER;