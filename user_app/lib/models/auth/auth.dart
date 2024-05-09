class Auth {
  String? token;

  // User? user;

  Auth({
    this.token,
    // this.user,
  });

  Auth.fromJson(Map<String, dynamic> json) {
    token = json['token'];
    // user = json['user'] != null ? User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['token'] = token;
    // if (user != null) {
    //   data['user'] = user!.toJson();
    // }
    return data;
  }
}

class User {
  int? id;
  String? name;
  String? email;
  String? phone;
  int? isAdmin;
  String? activated;
  String? emailVerifiedAt;
  String? createdAt;
  String? updatedAt;

  User(
      {this.id,
      this.name,
      this.email,
      this.phone,
      this.isAdmin,
      this.activated,
      this.emailVerifiedAt,
      this.createdAt,
      this.updatedAt});

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    email = json['email'];
    phone = json['phone'];
    isAdmin = json['is_admin'];
    activated = json['activated'];
    emailVerifiedAt = json['email_verified_at'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    data['email'] = email;
    data['phone'] = phone;
    data['is_admin'] = isAdmin;
    data['activated'] = activated;
    data['email_verified_at'] = emailVerifiedAt;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    return data;
  }
}
