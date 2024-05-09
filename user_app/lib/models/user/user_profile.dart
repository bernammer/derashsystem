class UserProfile {
  Profile? profile;
  User? user;

  UserProfile({this.profile, this.user});

  UserProfile.fromJson(Map<String, dynamic> json) {
    profile =
        json['profile'] != null ? Profile.fromJson(json['profile']) : null;
    user = json['user'] != null ? User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (profile != null) {
      data['profile'] = profile!.toJson();
    }
    if (user != null) {
      data['user'] = user!.toJson();
    }
    return data;
  }
}

class Profile {
  int? id;
  String? image;
  String? bio;
  String? school;
  String? town;
  String? region;
  dynamic? gradeId;
  int? userId;
  String? createdAt;
  String? updatedAt;

  Profile(
      {this.id,
      this.image,
      this.bio,
      this.school,
      this.town,
      this.region,
      this.gradeId,
      this.userId,
      this.createdAt,
      this.updatedAt});

  Profile.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    image = json['image'];
    bio = json['bio'];
    school = json['school'];
    town = json['town'];
    region = json['region'];
    gradeId = json['grade_id'];
    userId = json['user_id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['image'] = image;
    data['bio'] = bio;
    data['school'] = school;
    data['town'] = town;
    data['region'] = region;
    data['grade_id'] = gradeId;
    data['user_id'] = userId;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    return data;
  }
}

class User {
  int? id;
  String? username;
  String? firstName;
  String? lastName;
  String? phone_number;
  String? houseNumber;
  String? nationality;
  String? sex;
  bool? isAdmin;
  String? subCity;
  String? wereda;
  String? birthdate;

  User({
    this.id,
    this.username,
    this.phone_number,
    this.houseNumber,
    this.nationality,
    this.sex,
    this.isAdmin,
    this.subCity,
    this.wereda,
    this.birthdate,
    this.lastName,
    this.firstName,
  });

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    username = json['name'];
    phone_number = json['phone'];
    houseNumber = json['field'];
    nationality = json['email'];
    sex = json['email_verified_at'];
    isAdmin = json['is_admin'];
    subCity = json['created_at'];
    wereda = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = username;
    data['phone'] = phone_number;
    data['field'] = houseNumber;
    data['email'] = nationality;
    data['email_verified_at'] = sex;
    data['is_admin'] = isAdmin;
    data['created_at'] = subCity;
    data['updated_at'] = wereda;
    return data;
  }
}
