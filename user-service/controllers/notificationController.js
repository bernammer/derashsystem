const Session = require("./../models/Session")
const admin = require("./../util/fb")

const sendNotification = async(req , res) => {
    try {

        const {id, title , body} = req.body;


        const session = await Session.find({user : id});
        if(!session) req.status(400).send("user not logged in")

        const message = {
            notification: {
              title:  title ,
              body: body
            },
            token: session.fcmToken
          };
        
         
          admin.messaging().send(message)
            .then((response) => {
              console.log('Notification sent successfully:', response);
              res.send('Notification sent successfully');
            })
            .catch((error) => {
              console.error('Error sending notification:', error);
              res.status(500).send('Error sending notification');
            });
     } catch (err) {
        res.status(500).json({ message: err.message });
     }
}
  


module.exports = {
    sendNotification
}