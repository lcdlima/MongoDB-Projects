// Retorne o vooId do primeiro voo em que o campo rtk não exista
db.voos.findOne({"rtk": {$not: {$exists: true}}}, {"vooId": 1, _id: 0});