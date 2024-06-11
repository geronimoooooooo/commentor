const comments = require("../sharedData.js")




function formComments(req, res){
    // console.log(myArray); // [1, 2, 3, 4, 5]
    const {pets} = req.body;
    if(pets){
        console.log(pets);
    }
    const userName = req.body.userName;
    const comment = req.body.textAreaComment;
    console.log("username: "+userName + " with comment: "+comment);

    console.log('this is form: '+ JSON.stringify(req.body));
    // res.send('this is form '+ JSON.stringify(req.body));
    
    console.log(comments);
    
    
    comments.push({username: userName, comment: comment});  
    res.render('comments-show', {
        name: "Bro",
        titlePage: "Show Comments",
        header: "View all comments",
        comments: comments
    });
    
    
}

module.exports = {formComments, comments}