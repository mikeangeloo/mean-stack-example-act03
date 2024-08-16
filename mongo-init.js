db.createUser({
  user: "appuser",
  pwd: "apppassword123",
  roles: [
    {
      role: "readWrite",
      db: "meanStackExample"
    }
  ]
});

db = new Mongo().getDB("meanStackExample");