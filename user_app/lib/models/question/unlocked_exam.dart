class UnlockedExam {
  Data? data;

  UnlockedExam({this.data});

  UnlockedExam.fromJson(Map<String, dynamic> json) {
    data = json['data'] != null ? Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}

class Data {
  Exam? exam;

  Data({this.exam});

  Data.fromJson(Map<String, dynamic> json) {
    exam = json['exam'] != null ? Exam.fromJson(json['exam']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (exam != null) {
      data['exam'] = exam!.toJson();
    }
    return data;
  }
}

class Exam {
  int? id;
  String? name;
  int? subjectId;
  String? createdAt;
  String? updatedAt;

  Exam({this.id, this.name, this.subjectId, this.createdAt, this.updatedAt});

  Exam.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    subjectId = json['subject_id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    data['subject_id'] = subjectId;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    return data;
  }
}
