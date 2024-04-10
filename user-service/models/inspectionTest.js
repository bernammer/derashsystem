
// TestSchema
// InspectionTest

// user : String,
// vehicle : String,
// brakeForce : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// parkingForce : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String},
// axleLoad : : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String},
// brakeEfficiency :  {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String},
// brakeDifference :  {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String},
// parkingBrakeEfficiency : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// parkingBrakeDifference : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// sideSlip : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// totalParkingEfficiency : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// totalBrakeEfficiency : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// totalhandBrakeEfficiency : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// suspensionEfficency : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// suspensionDifference : {frontAxleLeft : String , frontAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String , rearAxleLeft : String , rearAxleRight : String , frontAxlePassFail : String , frontAxleSandard : String}
// highBeanIntensity : {left : String ,  LeftPassFail : String, leftStandard : String ,right : String , RightPassFail : String, RightStandard : String }
// offsetLRofFarLight  : {left : String ,  LeftPassFail : String, leftStandard : String ,right : String , RightPassFail : String, RightStandard : String }
// offsetLRofNearLight  : {left : String ,  LeftPassFail : String, leftStandard : String ,right : String , RightPassFail : String, RightStandard : String }
// offsetUDofFarLight  : {left : String ,  LeftPassFail : String, leftStandard : String ,right : String , RightPassFail : String, RightStandard : String }
// offSetUDofNearLight  : {left : String ,  LeftPassFail : String, leftStandard : String ,right : String , RightPassFail : String, RightStandard : String }
// hc : {testMode : String , passFail : String},
// co : {testMode : String , passFail : String},
// lambda : {testMode : String , passFail : String},
// co2 : {testMode : String , passFail : String},
// o2 : {testMode : String , passFail : String},
// no : {testMode : String , passFail : String},

const mongoose = require('mongoose');
const { Schema } = mongoose;


// Define the InspectionTest schema
const inspectionTestSchema = new Schema({
 vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
 user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
 brakeForce: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 parkingForce: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 axleLoad: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 brakeEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 brakeDifference: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 parkingBrakeEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 parkingBrakeDifference: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 sideSlip: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 totalParkingEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 totalBrakeEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 totalHandBrakeEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 suspensionEfficiency: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 suspensionDifference: {
    frontAxleLeft: String,
    frontAxleRight: String,
    frontAxlePassFail: String,
    frontAxleStandard: String,
    rearAxleLeft: String,
    rearAxleRight: String,
    rearAxlePassFail: String,
    rearAxleStandard: String
 },
 highBeanIntensity: {
    left: String,
    leftPassFail: String,
    leftStandard: String,
    right: String,
    rightPassFail: String,
    rightStandard: String
 },
 offsetLRofFarLight: {
    left: String,
    leftPassFail: String,
    leftStandard: String,
    right: String,
    rightPassFail: String,
    rightStandard: String
 },
 offsetLRofNearLight: {
    left: String,
    leftPassFail: String,
    leftStandard: String,
    right: String,
    rightPassFail: String,
    rightStandard: String
 },
 offsetUDofFarLight: {
    left: String,
    leftPassFail: String,
    leftStandard: String,
    right: String,
    rightPassFail: String,
    rightStandard: String
 },
 offsetUDofNearLight: {
    left: String,
    leftPassFail: String,
    leftStandard: String,
    right: String,
    rightPassFail: String,
    rightStandard: String
 },
 hc: {
    testMode: String,
    passFail: String
 },
 co: {
    testMode: String,
    passFail: String
 },
 lambda: {
    testMode: String,
    passFail: String
 },
 co2: {
    testMode: String,
    passFail: String
 },
 o2: {
    testMode: String,
    passFail: String
 },
 no: {
    testMode: String,
    passFail: String
 }
});

// Create the model
const InspectionTest = mongoose.model('InspectionTest', inspectionTestSchema);

module.exports = InspectionTest