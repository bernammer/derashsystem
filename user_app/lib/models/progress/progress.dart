class Progress {
  List<Data>? data;

  Progress({this.data});

  Progress.fromJson(Map<String, dynamic> json) {
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
  int? id;
  int? totalQuestions;
  int? correct;
  int? incorrect;
  Exam? exam;
  String? createdAt;

  Data(
      {this.id,
      this.totalQuestions,
      this.correct,
      this.incorrect,
      this.exam,
      this.createdAt});

  Data.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    totalQuestions = json['total_questions'];
    correct = json['correct'];
    incorrect = json['incorrect'];
    exam = json['exam'] != null ? Exam.fromJson(json['exam']) : null;
    createdAt = json['created_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['total_questions'] = totalQuestions;
    data['correct'] = correct;
    data['incorrect'] = incorrect;
    if (exam != null) {
      data['exam'] = exam!.toJson();
    }
    data['created_at'] = createdAt;
    return data;
  }
}

class Exam {
  int? id;
  String? name;
  Subject? subject;

  Exam({this.id, this.name, this.subject});

  Exam.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    subject =
        json['subject'] != null ? Subject.fromJson(json['subject']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    if (subject != null) {
      data['subject'] = subject!.toJson();
    }
    return data;
  }
}

class Subject {
  int? id;
  String? subject;
  String? description;
  String? createdAt;
  String? updatedAt;

  Subject(
      {this.id,
      this.subject,
      this.description,
      this.createdAt,
      this.updatedAt});

  Subject.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    subject = json['subject'];
    description = json['description'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['subject'] = subject;
    data['description'] = description;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    return data;
  }
}
