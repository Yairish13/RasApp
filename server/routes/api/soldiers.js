const express = require('express');
const router = express.Router() ;


const { Soldier,User } = require('../../models');

router.get('/', async (req,res)=> {
    const allSoldiers = await Soldier.findAll();
    res.json(allSoldiers);
})

router.get("/:soldierId", async (req, res) => {
    try {
        const classSoldiers = await Soldier.findAll({ where:{id: req.params.soldierId} });
        res.json(classSoldiers);
    } catch (e) { res.json({ error: e.message }); }
 });
  

 router.post("/", async (req, res) => {
    const newSoldier = await Soldier.create(req.body);
    res.json(newSoldier);
  });
  
  router.patch("/:soldierId", async (req, res) => {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.update(req.body);
    res.json(soldier);
  });
  
  router.delete("/:soldierId", async (req, res) => {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.destroy();
    res.json({ deleted: true });
  });

module.exports = router ;
