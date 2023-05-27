const tickectNotificationModel = require("../models/ticketNotification.model");

exports.acceptNotificationRequest = async (req, res) => {
  const notificationObject = {
    ticketId: req.body.ticketId,
    subject: req.body.subject,
    content: req.body.content,
    recepientEmails: req.body.recepientEmails,

    requester: req.body.requester,
  };
  try {
    const notification = await tickectNotificationModel.create(
      notificationObject
    );

    if (notification) {
      return res.status(201).send({
        reuestId: notification._id,
        message:
          "Request has been accepted. Check status by using the provided requestId",
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Some internal server error occured",
    });
  }
};
exports.getNotification = async (req, res) => {
  try {
    const notification = await tickectNotificationModel.findOne({
      _id: req.params.id,
    });
    if (notification) {
      return res.status(200).send(notification);
    } else {
      return res.status(200).send("id is invalid");
    }
  } catch (err) {
    return res.status(500).send({
      message: "Some internal Error",
    });
  }
};
