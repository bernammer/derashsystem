class LoginCredentials {
  String? username;
  String? password;

  LoginCredentials({
    this.username,
    this.password,
  });
}

class RegisterCredentials {
  String? username;
  String? password;
  String? phoneNumber;
  String? firstName;
  String? lastName;
  String? houseNumber;
  String? nationality;
  String? sex;
  String? subcity;
  String? wereda;
  String? birthdate;

  RegisterCredentials({
    this.username,
    this.password,
    this.firstName,
    this.phoneNumber,
    this.houseNumber,
    this.birthdate,
    this.lastName,
    this.nationality,
    this.sex,
    this.subcity,
    this.wereda,
  });
}
