import { db } from "./initFirebase";

var leadsRef = database.ref("potions");
leadsRef.on("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childData = childSnapshot.val();
  });
});

leadsRef.on("child_added", function (snapshot) {
  console.log(snapshot);
});
