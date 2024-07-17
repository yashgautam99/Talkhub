import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiver } = req.params;
    const senderId = req.user._id;

    let conversation = await conversation.findOne({
      participants: { $all: [sunderId, receiverId] },
    });

    if (!senderId) {
      conversation = await conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Messsage({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
