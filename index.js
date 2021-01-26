const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const UserModel= require('./models/User-info');
const CaseStudyModel= require('./models/CS-info');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://josemartDB1:Tin2martin@cluster0.5aruf.mongodb.net/student-management?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

app.get("/get-all-cs", async (req, res) => {
var query = {client_name: "ABC23"};
    await CaseStudyModel.find(query, (err, result) =>   {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    res.send("got data from CSs");
});

app.get("/insert1", async (req, res) => {
    let fruits = new Set(["apple", "orange", "mango"]);
    const caseobj = new CaseStudyModel({

        project_id: "xyz1",
        client_name: "ABC23",
        industry: "DEF",
        problem: "agggsdhdh",
        idea: "raeywjrjy",
        impact: "dshmhmdhn",
        tags: fruits

        });
    await caseobj.save();
    res.send("Inserted data to casestudies");
});


app.listen(3050, ()=>{
    console.log("Server is Listening 3050");
});
