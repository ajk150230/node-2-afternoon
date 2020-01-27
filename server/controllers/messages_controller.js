let messages = [];
let id = 0;

module.exports = {
    create: (req, res) =>{
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) =>{
        res.status(200).send(messages)
    },
    update: (req, res) =>{
        const {text} = req.body;
        const updateID = req.params.id;
        const messagesIndex = messages.findIndex(messages => messages.id == updateID)
        messages[messagesIndex] = {
            id: messages.id,
            text: text || messages.text,
            time: messages.time
        }
        res.status(200).json(messages)
    },
    delete: (req, res) =>{
        const deleteID = req.params.id;
        messagesIndex= messages.findIndex(messages => messages.id == deleteID)
        messages.splice(messagesIndex, 1)
        res.status(200).json(messages)
    }
}

