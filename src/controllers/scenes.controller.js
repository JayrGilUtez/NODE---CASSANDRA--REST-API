import { executeQuery } from "../db.js";

//getAllScenes

export const getAllScenes = async (req, res) => {
    try {
        const result = await executeQuery('SELECT * FROM scenes');
        res.json(result);
        console.log(result);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });

    }
    
};