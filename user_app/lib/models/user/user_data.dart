class UserData {
  User? user;

  UserData({this.user});

  UserData.fromJson(Map<String, dynamic> json) {
    user = json['user'] != null ? new User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.user != null) {
      data['user'] = this.user!.toJson();
    }
    return data;
  }
}

class User {
  AdminVerification? adminVerification;
  String? sId;
  String? username;
  String? firstName;
  String? lastName;
  String? phoneNumber;
  String? password;
  String? houseNumber;
  String? nationality;
  String? sex;
  String? subCity;
  String? wereda;
  String? birthdate;
  List<Vehicles>? vehicles;
  int? iV;

  User(
      {this.adminVerification,
        this.sId,
        this.username,
        this.firstName,
        this.lastName,
        this.phoneNumber,
        this.password,
        this.houseNumber,
        this.nationality,
        this.sex,
        this.subCity,
        this.wereda,
        this.birthdate,
        this.vehicles,
        this.iV});

  User.fromJson(Map<String, dynamic> json) {
    adminVerification = json['adminVerification'] != null
        ? new AdminVerification.fromJson(json['adminVerification'])
        : null;
    sId = json['_id'];
    username = json['username'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    phoneNumber = json['phone_number'];
    password = json['password'];
    houseNumber = json['houseNumber'];
    nationality = json['nationality'];
    sex = json['sex'];
    subCity = json['subCity'];
    wereda = json['wereda'];
    birthdate = json['birthdate'];
    if (json['vehicles'] != null) {
      vehicles = <Vehicles>[];
      json['vehicles'].forEach((v) {
        vehicles!.add(new Vehicles.fromJson(v));
      });
    }
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.adminVerification != null) {
      data['adminVerification'] = this.adminVerification!.toJson();
    }
    data['_id'] = this.sId;
    data['username'] = this.username;
    data['firstName'] = this.firstName;
    data['lastName'] = this.lastName;
    data['phone_number'] = this.phoneNumber;
    data['password'] = this.password;
    data['houseNumber'] = this.houseNumber;
    data['nationality'] = this.nationality;
    data['sex'] = this.sex;
    data['subCity'] = this.subCity;
    data['wereda'] = this.wereda;
    data['birthdate'] = this.birthdate;
    if (this.vehicles != null) {
      data['vehicles'] = this.vehicles!.map((v) => v.toJson()).toList();
    }
    data['__v'] = this.iV;
    return data;
  }
}

class AdminVerification {
  String? status;

  AdminVerification({this.status});

  AdminVerification.fromJson(Map<String, dynamic> json) {
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['status'] = this.status;
    return data;
  }
}

class Vehicles {
  String? sId;
  String? vehicleType;
  String? buildInCountry;
  String? vehicleModel;
  String? builtInYear;
  String? chassisNumber;
  String? motorNumber;
  String? bodyType;
  String? color;
  String? fuelType;
  String? horsePower;
  String? weight;
  String? singleWeight;
  String? capacity;
  String? cc;
  String? cylinderQuantity;
  String? allowedWorkType;
  String? axleQuantity;
  String? plate;
  int? iV;

  Vehicles(
      {this.sId,
        this.vehicleType,
        this.buildInCountry,
        this.vehicleModel,
        this.builtInYear,
        this.chassisNumber,
        this.motorNumber,
        this.bodyType,
        this.color,
        this.fuelType,
        this.horsePower,
        this.weight,
        this.singleWeight,
        this.capacity,
        this.cc,
        this.cylinderQuantity,
        this.allowedWorkType,
        this.axleQuantity,
        this.plate,
        this.iV});

  Vehicles.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    vehicleType = json['vehicleType'];
    buildInCountry = json['buildInCountry'];
    vehicleModel = json['vehicleModel'];
    builtInYear = json['builtInYear'];
    chassisNumber = json['chassisNumber'];
    motorNumber = json['motorNumber'];
    bodyType = json['bodyType'];
    color = json['color'];
    fuelType = json['fuelType'];
    horsePower = json['horsePower'];
    weight = json['weight'];
    singleWeight = json['singleWeight'];
    capacity = json['capacity'];
    cc = json['cc'];
    cylinderQuantity = json['cylinderQuantity'];
    allowedWorkType = json['allowedWorkType'];
    axleQuantity = json['axleQuantity'];
    plate = json['plate'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['vehicleType'] = this.vehicleType;
    data['buildInCountry'] = this.buildInCountry;
    data['vehicleModel'] = this.vehicleModel;
    data['builtInYear'] = this.builtInYear;
    data['chassisNumber'] = this.chassisNumber;
    data['motorNumber'] = this.motorNumber;
    data['bodyType'] = this.bodyType;
    data['color'] = this.color;
    data['fuelType'] = this.fuelType;
    data['horsePower'] = this.horsePower;
    data['weight'] = this.weight;
    data['singleWeight'] = this.singleWeight;
    data['capacity'] = this.capacity;
    data['cc'] = this.cc;
    data['cylinderQuantity'] = this.cylinderQuantity;
    data['allowedWorkType'] = this.allowedWorkType;
    data['axleQuantity'] = this.axleQuantity;
    data['plate'] = this.plate;
    data['__v'] = this.iV;
    return data;
  }
}
