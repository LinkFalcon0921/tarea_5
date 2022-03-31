const { MongoClient, ServerApiVersion } = require("mongodb");
const { Contact } = require("./contact");

//Done!!

const uri =
  "mongodb+srv://app_root_nodeJS:znqeDJR0fek4wFkr@tests.pemh6.mongodb.net/agend_contact?retryWrites=true&w=majority";

const db_to_connect = "agend_contact";
const collection_to_connect = "contacts";

const client = () => {
  return new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
};

async function test_connect() {
  const clientSession = client();

  clientSession.connect((err) => {
    if (err) {
      console.error("No se pudo conectar a la base de datos.", err);
    }

    const collection = clientSession.db(db_to_connect);

    if (collection) {
      console.log(
        "Connected",
        collection.collection(collection_to_connect).collectionName
      );
    } else {
      console.log("Not connected");
    }

    clientSession.close();
  });
}

async function insertOne(item = new Contact().getContact()) {
  const clientSession = client();
  clientSession.connect((err) => {
      if (err) throw err;

      const collection = clientSession
        .db(db_to_connect)
        .collection(collection_to_connect);

      collection.insertOne(item, function (errt, res) {
        if (errt) throw errt;
        console.log("1 document inserted");
        clientSession.close();
        
      });

  });
}

/**Get all elements in the database as a array*/
async function getListOfCollections() {
  const clientSession = client();

  try {
    await clientSession.connect();

    const dbo = clientSession
      .db(db_to_connect)
      .collection(collection_to_connect);

    //List of de documents
    const result = await dbo.find({},{projection: {_id:0}}).toArray();

    return result;
  } finally {
    await clientSession.close();
  }
}

module.exports = { getListOfCollections, insertOne };

// const test_item = new Contact("luis", "casas", "809-012-3121");

// console.log(test_item.getContact());

// insertOne(test_item.getContact());
// getListOfCollections().then((i) => {
//   console.log(i);
// });

// test_connect().catch(console.dir);
