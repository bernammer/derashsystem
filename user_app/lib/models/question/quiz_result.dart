class QuizResult {
  List<Wrong>? wrong;
  int? correct;
  int? totalQuestions;

  QuizResult({this.wrong, this.correct, this.totalQuestions});

  QuizResult.fromJson(Map<String, dynamic> json) {
    if (json['wrong'] != null) {
      wrong = <Wrong>[];
      json['wrong'].forEach((v) {
        wrong!.add(Wrong.fromJson(v));
      });
    }
    correct = json['correct'];
    totalQuestions = json['totalQuestions'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (wrong != null) {
      data['wrong'] = wrong!.map((v) => v.toJson()).toList();
    }
    data['correct'] = correct;
    data['totalQuestions'] = totalQuestions;
    return data;
  }
}

class Wrong {
  int? id;
  String? question;
  String? choiceA;
  String? choiceB;
  String? choiceC;
  String? choiceD;
  Answer? answer;

  Wrong(
      {this.id,
      this.question,
      this.choiceA,
      this.choiceB,
      this.choiceC,
      this.choiceD,
      this.answer});

  Wrong.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    question = json['question'];
    choiceA = json['choice_a'];
    choiceB = json['choice_b'];
    choiceC = json['choice_c'];
    choiceD = json['choice_d'];
    answer = json['answer'] != null ? Answer.fromJson(json['answer']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['question'] = question;
    data['choice_a'] = choiceA;
    data['choice_b'] = choiceB;
    data['choice_c'] = choiceC;
    data['choice_d'] = choiceD;
    if (answer != null) {
      data['answer'] = answer!.toJson();
    }
    return data;
  }
}

class Answer {
  String? answer;

  Answer({this.answer});

  Answer.fromJson(Map<String, dynamic> json) {
    answer = json['answer'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['answer'] = answer;
    return data;
  }
}
