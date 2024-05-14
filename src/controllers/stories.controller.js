
import { executeQuery } from "../db.js"

// getAllStories

export const getAllStories = async (req, res) => {
    try {
        const result = await executeQuery('SELECT * FROM stories');
        res.json(result)
        console.log(result);

    } catch (error) {
      
        return res.status(500).json({ message: "Something goes wrong" });

    }

};




