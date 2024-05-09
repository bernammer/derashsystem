class QuestionsList {
  String? exam;
  String? subject;
  int? allowedTime;
  List<Questions>? questions;

  QuestionsList({this.exam, this.subject, this.questions});

  QuestionsList.fromJson(Map<String, dynamic> json) {
    exam = json['exam'];
    subject = json['subject'];
    allowedTime = json['allowed_time'];
    if (json['questions'] != null) {
      questions = <Questions>[];
      json['questions'].forEach((v) {
        questions!.add(Questions.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['exam'] = exam;
    data['subject'] = subject;
    data['allowed_time'] = allowedTime;
    if (questions != null) {
      data['questions'] = questions!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Questions {
  int? id;
  String? question;
  String? a;
  String? b;
  String? c;
  String? d;
  String? answer;
  String? image;
  String? passage;
  String? explanation;
  int? yearId;
  int? subjectId;
  int? userId;
  String? createdAt;
  String? updatedAt;
  Pivot? pivot;

  Questions(
      {this.id,
      this.question,
      this.a,
      this.b,
      this.c,
      this.d,
      this.answer,
      this.image,
      this.passage,
      this.explanation,
      this.yearId,
      this.subjectId,
      this.userId,
      this.createdAt,
      this.updatedAt,
      this.pivot});

  Questions.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    question = json['question'];
    a = json['a'];
    b = json['b'];
    c = json['c'];
    d = json['d'];
    answer = json['answer'];
    image = json['image'];
    passage = json['passage'];
    explanation = json['explanation'];
    yearId = json['year_id'];
    subjectId = json['subject_id'];
    userId = json['user_id'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    pivot = json['pivot'] != null ? Pivot.fromJson(json['pivot']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['question'] = question;
    data['a'] = a;
    data['b'] = b;
    data['c'] = c;
    data['d'] = d;
    data['answer'] = answer;
    data['image'] = image;
    data['passage'] = passage;
    data['explanation'] = explanation;
    data['year_id'] = yearId;
    data['subject_id'] = subjectId;
    data['user_id'] = userId;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    if (pivot != null) {
      data['pivot'] = pivot!.toJson();
    }
    return data;
  }
}

class Pivot {
  int? examId;
  int? questionId;

  Pivot({this.examId, this.questionId});

  Pivot.fromJson(Map<String, dynamic> json) {
    examId = json['exam_id'];
    questionId = json['question_id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['exam_id'] = examId;
    data['question_id'] = questionId;
    return data;
  }
}
