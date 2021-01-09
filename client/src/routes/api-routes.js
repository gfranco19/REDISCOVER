const db = require("../models");
const passport = require("../config/passport");
const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');
const isAuthenticated = require("../config/middleware/isAuthenticated");
let fileStoredPath = ``;
let usersAnimals = [];

const AWS_ACCESS_KEY_ID = "AKIA452CLZYC3UJDOARW"
const AWS_SECRET_ACCESS_KEY = "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"
const s3 = new aws.S3({ 
  apiVersion: '2006-03-01',
  params: {Bucket: "wildlife-observations-img-db"} 
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "wildlife-observations-img-db",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const id = uuid();
            fileStoredPath = `${id}${ext}`;
            cb(null, fileStoredPath);
        }
    })
});

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get("/api/hauntedPlaces", async (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      const currentHauntedPlaces = await db.HauntedPlace.findAll()
      const currentHauntedPlaceArray = []
      currentHauntedPlaces.forEach(HauntedPlace => currentHauntedPlaceArray.push(HauntedPlace.dataValues));
      res.json(currentHauntedPlaceArray);
    }
  });

  app.get("/api/historicalPlaces", async (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      const currentHistoricalPlaces = await db.HistoricalPlace.findAll()
      const currentHistoricalPlaceArray = []
      currentHistoricalPlaces.forEach(HistoricalPlace => currentHistoricalPlaceArray.push(HistoricalPlace.dataValues));
      res.json(currentHistoricalPlaceArray);
    }
  });

  app.get("/api/tvFilmPlaces", async (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      const currentTvFilmPlaces = await db.TvFilmPlace.findAll()
      const currentTvFilmPlaceArray = []
      currentTvFilmPlaces.forEach(TvFilmPlace => currentTvFilmPlaceArray.push(TvFilmPlace.dataValues));
      res.json(currentTvFilmPlaceArray);
    }
  });
 
  app.get("/account", isAuthenticated, async (req, res) => {
    const { userName } = req.user;
    const currentAnimals = await db.Animal.findAll()
    const currentAnimalArray = []
    currentAnimals.forEach(animal => currentAnimalArray.push(animal.dataValues));
    currentAnimalArray.forEach(animal => {
      if(animal.foundByUser === userName) { usersAnimals.push(animal) }
    });
    var hbsObject = {
      animal: usersAnimals,
      user: req.user,
    };
    usersAnimals = []
    res.render("account", hbsObject);
  });

  app.post("/upload", isAuthenticated, upload.single("picture"), async (req, res) => { 
    await db.Animal.create({
        animal_species: req.body.type,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        hostile: true,
        foundByUser: req.user.userName,
        note: req.body.note,
        picture: fileStoredPath
      })
        .then(() => {
          res.redirect(307, "/members");
        })
        .catch(err => {
          res.status(401).json(err);
        });
  });

  app.get("/members", isAuthenticated, async (req, res) => {
    const recentObservations = [];
    await db.Animal.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']]
    }).then(function (results){
      results.forEach(animal => {
        recentObservations.push(animal.dataValues);
      });
      var hbsObject = {
        animal: recentObservations,
      };
      res.render("members.handlebars", hbsObject);
    })
  });

  app.get("/api/previous_post", (req, res) => {
      db.Animal.findAll({
        where: {
          foundByUser: req.user.userName
        }
      }).then((results) => {
        res.json(results)
      }).catch(err => {
        res.json(err)
      });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  app.post("/api/user_data/change_email", async (req, res) => {
    const { oldInput } = req.body
    const { newInput } = req.body
    let user = await db.User.findOne({ where: { email: oldInput }})
    user.email = newInput
    await user.save()
  });

  app.post("/api/user_data/change_username", async (req, res) => {
    const { oldInput } = req.body
    const { newInput } = req.body
    let user = await db.User.findOne({ where: { email: oldInput }})
    user.userName = newInput
    await user.save()
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      return res.json({});
    } else {
      return res.json({
        userName: req.user.userName,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
