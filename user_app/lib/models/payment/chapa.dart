class Chapa {
  String? message;
  String? status;
  Data? data;

  Chapa({this.message, this.status, this.data});

  Chapa.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    status = json['status'];
    data = json['data'] != null ? Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['message'] = message;
    data['status'] = status;
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}

class Data {
  String? checkoutUrl;

  Data({this.checkoutUrl});

  Data.fromJson(Map<String, dynamic> json) {
    checkoutUrl = json['checkout_url'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['checkout_url'] = checkoutUrl;
    return data;
  }
}
