const Designer = require("../models/designerModel");

// CREATE DESIGNER
exports.createDesigner = async (req, res) => {
    try {
        const designer = await Designer.create(req.body);
        res.status(201).json({ message: "Designer Created", designer });
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({ error: error.errors.map(e => e.message) });
        }
        res.status(500).json({ error: error.message });
    }
};

// GET ALL DESIGNERS
exports.getAllDesigners = async (req, res) => {
    try {
        const designers = await Designer.findAll();
        res.status(200).json(designers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET DESIGNER BY ID
exports.getDesignerById = async (req, res) => {
    try {
        const designer = await Designer.findByPk(req.params.id);
        if (designer) {
            res.status(200).json(designer);
        } else {
            res.status(404).json({ message: "Designer Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE DESIGNER
exports.updateDesigner = async (req, res) => {
    try {
        const designer = await Designer.findByPk(req.params.id);
        if (designer) {
            await designer.update(req.body);
            res.status(200).json({ message: "Designer Updated", designer });
        } else {
            res.status(404).json({ message: "Designer Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE DESIGNER
exports.deleteDesigner = async (req, res) => {
    try {
        const deleted = await Designer.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Designer Deleted" });
        } else {
            res.status(404).json({ message: "Designer Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
