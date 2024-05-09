class SubjectExams {
  List<Exams>? exams;
  List<ActivatedExams>? activatedExams;

  SubjectExams({this.exams, this.activatedExams});

  SubjectExams.fromJson(Map<String, dynamic> json) {
    if (json['exams'] != null) {
      exams = <Exams>[];
      json['exams'].forEach((v) {
        exams!.add(Exams.fromJson(v));
      });
    }
    if (json['activatedExams'] != null) {
      activatedExams = <ActivatedExams>[];
      json['activatedExams'].forEach((v) {
        activatedExams!.add(ActivatedExams.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (exams != null) {
      data['exams'] = exams!.map((v) => v.toJson()).toList();
    }
    if (activatedExams != null) {
      data['activatedExams'] = activatedExams!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Exams {
  int? id;
  String? name;
  int? subjectId;
  String? createdAt;
  String? updatedAt;

  Exams({this.id, this.name, this.subjectId, this.createdAt, this.updatedAt});

  Exams.fromJson(Map<String, dynamic> json) {
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

class ActivatedExams {
  int? id;
  int? examId;
  int? userId;
  String? createdAt;
  String? updatedAt;

  ActivatedExams(
      {this.id, this.examId, this.userId, this.createdAt, this.updatedAt});

  ActivatedExams.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    examId = json['exam_id'];
    userId = json['user_id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['exam_id'] = examId;
    data['user_id'] = userId;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    return data;
  }
}
