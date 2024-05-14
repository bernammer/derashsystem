class Auth {
  String? message;
  User? user;
  String? token;

  Auth({this.message, this.user, this.token});

  Auth.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    user = json['user'] != null ? new User.fromJson(json['user']) : null;
    token = json['token'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['message'] = this.message;
    if (this.user != null) {
      data['user'] = this.user!.toJson();
    }
    data['token'] = this.token;
    return data;
  }
}

class User {
  String? username;
  String? firstName;
  String? lastName;
  String? phoneNumber;
  String? password;
  String? nationality;
  String? sex;
  String? subCity;
  String? wereda;
  String? birthdate;
  List<Null>? vehicles;
  AdminVerification? adminVerification;
  String? sId;
  String? createdAt;
  String? updatedAt;
  int? iV;

  User(
      {this.username,
        this.firstName,
        this.lastName,
        this.phoneNumber,
        this.password,
        this.nationality,
        this.sex,
        this.subCity,
        this.wereda,
        this.birthdate,
        this.vehicles,
        this.adminVerification,
        this.sId,
        this.createdAt,
        this.updatedAt,
        this.iV});

  User.fromJson(Map<String, dynamic> json) {
    username = json['username'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    phoneNumber = json['phone_number'];
    password = json['password'];
    nationality = json['nationality'];
    sex = json['sex'];
    subCity = json['subCity'];
    wereda = json['wereda'];
    birthdate = json['birthdate'];
    sId = json['_id'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['username'] = this.username;
    data['firstName'] = this.firstName;
    data['lastName'] = this.lastName;
    data['phone_number'] = this.phoneNumber;
    data['password'] = this.password;
    data['nationality'] = this.nationality;
    data['sex'] = this.sex;
    data['subCity'] = this.subCity;
    data['wereda'] = this.wereda;
    data['birthdate'] = this.birthdate;
    data['_id'] = this.sId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
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
