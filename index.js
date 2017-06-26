const
    mp = require('mongodb-promise')

mp.MongoClient.connect("mongodb://localhost:27017/potato")
    .then(db => {
        return db.close()
    })
    .then(console.log('success'))
    .catch(console.error)
