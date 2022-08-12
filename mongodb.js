const mongodb = require('mongodb') //allows us to connect mongodb database to node.js
const MongodbClient = mongodb.MongoClient; //required to connect to the db 

const connection_url = "mongodb://127.0.0.1:27017" //URl of the db we're trying to connect to 
const db_name = "hybr1ddb"

MongodbClient.connect(connection_url,{'useNewUrlParser': true}, (error, client) => {//2nd arg is to correctly parse 1st arg
    if(error){
        return "failed to connect to db";
    }

    console.log('connection established')
    const db = client.db(db_name)
    db.collection('users').insertOne({ //insertOne inserts a document(name & age) into a collection(users)
        name: 'mrigais',
        type:false })
    }, (error, result)=> {
        if(error){
            console.log('unable to insert document.')
        }

        console.log(result);
    })

                                        // INSERT MANY
//     db.collection('test_collection').insertMany([{description: 'test description 1',completed:false}, 
//     {description:'test description 2', completed: true}, 
//     {description: 'test description 3', completed:false},
//     {description: 'reading',completed:true},
//     {description: 'writing',completed:false}
// ],
//          (error, result)=> {
//              if(error){
//                  console.log(error)
//              }

//              console.log(result);

//          })


                                //.................FETCHING DATA.............//
    // db.collection('users').findOne({name:'mrigais'}, (error, user)=>{

    //     if(error){
    //         return error;
    //     }

    //     console.log(user)
    // }  )

    // db.collection('test_collection').find({completed: true}).toArray((e, result)=>{
    //     console.log(result)

    // })


                             //.................UPDATING DATA .................//

//     db.collection('users').updateMany({name: 'netero'}, 
//     {
//         $set: {
//             name: 'saitama'
//         },
//         $inc: {
//             age: 2
//         },
//     }).then((success) => {
//         console.log(success)
//         return success;
//     }).catch((error)=>{
//         console.log(error)
//         return error;
//     })
// }) 

                            //.................UPDATING DATA .................//            

    // db.collection('test_collection').deleteMany(
    //     { description: 'reading'}
    //     ).then((success) => {
    //         console.log(success)
    //         return success
    //     }).catch((errror)=> {
    //         console.log(errror)
    //         return error
    //     })
    // })

    // db.collection('test_collection').deleteMany(
    //     { 
    //         description: 'writing'
    //     }).then((s)=>{
    //         console.log(s)
    //         return s

    //     }).catch((e) => {
    //         console.log(e)
    //         return e
    //     })
    // })