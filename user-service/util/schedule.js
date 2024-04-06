const InsurranceSticker = require('./../models/InsuranceSticker'); // Adjust the path as necessary



// Function to check for insurance stickers with policyEndDate less than 30 days from now
function checkInsuranceStickers() {
    const currentDate = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(currentDate.getDate() + 30);

    InsurranceSticker.find({
        policyEndDate: {
            $lt: thirtyDaysFromNow
        }
    }).then(stickers => {
        console.log('Insurance Stickers expiring in less than 30 days:');
        stickers.forEach(sticker => {
            console.log(`Policy No: ${sticker.policyNo}, End Date: ${sticker.policyEndDate}`);
        });
    }).catch(err => {
        console.error('Error checking insurance stickers:', err);
    });
}

module.exports = {
    checkInsuranceStickers,
   };
   