import User from '../models/User.js';

const startChat = async (req, res) => {
    const { firstUserID, secondUserID } = req.body;
    
    try{
        const firstUser = await User.findById(firstUserID);
        const secondUser = await User.findById(secondUserID);
        const result = await User.createNewRoom(firstUser, secondUser);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const sendMessage = async (req, res) => {
    const { userID, chatID, content } = req.body;

    try{
        const result = await User.sendMessage(userID, chatID, content);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const test = async (req, res) => {
    const { id } = req.body;
    try{
        const result = await User.findById(id);
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const chat = { sendMessage, startChat, test };
export default chat;