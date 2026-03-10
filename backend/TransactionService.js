function addTransaction(amount, desc){

    if(!amount || amount === "" || isNaN(amount)){
        console.log("Invalid amount");
        return;
    }

    if(!desc || desc === ""){
        console.log("Description cannot be empty");
        return;
    }

    var sql = `INSERT INTO transactions (amount, description)
               VALUES (${amount}, '${desc}')`;

    con.query(sql, function(err,result){
        if (err) throw err;
    });

    return 200;
}