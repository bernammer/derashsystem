class Answers {
  int? exam_id;
  List<Answer>? data;

  Answers({this.exam_id, this.data});

  Answers.fromJson(Map<String, dynamic> json) {
    exam_id = json['exam_id'];
    if (json['data'] != null) {
      data = <Answer>[];
      json['data'].forEach((v) {
        data!.add(Answer.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['exam_id'] = exam_id;
    if (this.data != null) {
      data['data'] = this.data!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Answer {
  int? questionId;
  String? answer;

  Answer({this.questionId, this.answer});

  Answer.fromJson(Map<String, dynamic> json) {
    questionId = json['question_id'];
    answer = json['answer'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['question_id'] = questionId;
    data['answer'] = answer;
    return data;
  }
}
