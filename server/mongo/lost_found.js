db.createCollection("lost_found", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "date", "title", "description" ],
         properties: {
            _id: {
               bsonType: "int",
               minimum: 1,
               description: "must be a positive integer and is required"
            },
            date: {
               bsonType: "date",
               description: "must be a date and is required"
            },
            title: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            description: {
               bsonType: "string",
               description: "must be a string and is required"
            }
            
         }
      }
   }
})
