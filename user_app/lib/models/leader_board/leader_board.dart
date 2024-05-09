class LeaderBoard {
  List<Data>? data;

  LeaderBoard({this.data});

  LeaderBoard.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      data = <Data>[];
      json['data'].forEach((v) {
        data!.add(Data.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (this.data != null) {
      data['data'] = this.data!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Data {
  num? score;
  User? user;
  Profile? profile;
  num? average;

  Data({this.score, this.user, this.profile, this.average});

  Data.fromJson(Map<String, dynamic> json) {
    score = json['score'];
    user = json['user'] != null ? User.fromJson(json['user']) : null;
    profile =
        json['profile'] != null ? Profile.fromJson(json['profile']) : null;
    average = json['average'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['score'] = score;
    if (user != null) {
      data['user'] = user!.toJson();
    }
    if (profile != null) {
      data['profile'] = profile!.toJson();
    }
    data['average'] = average;
    return data;
  }
}

class User {
  int? id;
  String? name;
  String? phone;
  String? field;
  String? email;
  String? emailVerifiedAt;
  int? isAdmin;
  String? createdAt;
  String? updatedAt;
  Profile? profile;

  User(
      {this.id,
      this.name,
      this.phone,
      this.field,
      this.email,
      this.emailVerifiedAt,
      this.isAdmin,
      this.createdAt,
      this.updatedAt,
      this.profile});

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    phone = json['phone'];
    field = json['field'];
    email = json['email'];
    emailVerifiedAt = json['email_verified_at'];
    isAdmin = json['is_admin'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    profile =
        json['profile'] != null ? Profile.fromJson(json['profile']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    data['phone'] = phone;
    data['field'] = field;
    data['email'] = email;
    data['email_verified_at'] = emailVerifiedAt;
    data['is_admin'] = isAdmin;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    if (profile != null) {
      data['profile'] = profile!.toJson();
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
  int? gradeId;
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
