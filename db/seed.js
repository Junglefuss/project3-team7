const mongoose = require('./connection');

const Comments = require('../models/Comments');
const Visitors = require('../models/Visitors');

// clear the database of records using both models
Visitors.deleteMany({}).then(() => {
  console.log('deleted all Visitors');
  Comments.deleteMany({}).then(() => {
    console.log('deleted all Comments');

    // create two Visitors each with two favorites
    Visitors.create({
      username: 'junglefuss',
      email: 'jgoldfuss@gmail.com'
    }).then(jg => {
      // create two Comments associated with one Visitor
      Comments.create({
        bar: 'Gary Danko',
        text: 'this place is awesome',
        user: jg.id
      }).then(bar => {
        jg.favorites.push(bar);
        jg.save();
        console.log('created jg:Gary Danko');
      });
      // .then(bar => {
      //   Comments.create({
      //     bar: 'Howard Black',
      //     text: 'super secret but fun',
      //     user: jg.id
      //   }).then(bar => {
      //     jg.favorites.push(bar);
      //     jg.save();
      //     console.log('created jg:Howard Black');
      //   });
      // });
    });

    Visitors.create({
      username: 'testing1',
      email: 'test@gmail.com'
    }).then(tm => {
      Comments.create({
        bar: "Terence's Place",
        text: 'best bar ever',
        user: tm.id
      }).then(bar => {
        tm.favorites.push(bar);
        tm.save();
        console.log("created tm:Terence's Place");
      });
      // .then(bar => {
      //   Comments.create({
      //     bar: 'The Beer Garden',
      //     text: 'great selection of local beers',
      //     user: tm.id
      //   }).then(bar => {
      //     tm.favorites.push(bar);
      //     tm.save();
      //     console.log('created tm:The Beer Garden');
      //   });
      // });
    });
  });
});
