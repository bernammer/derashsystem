class Result {
  int? correct;
  List<Incorrect>? incorrect;
  int? totalQuestions;

  Result({this.correct, this.incorrect, this.totalQuestions});

  Result.fromJson(Map<String, dynamic> json) {
    correct = json['correct'];
    if (json['incorrect'] != null) {
      incorrect = <Incorrect>[];
      json['incorrect'].forEach((v) {
        incorrect!.add(Incorrect.fromJson(v));
      });
    }
    totalQuestions = json['totalQuestions'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['correct'] = correct;
    if (incorrect != null) {
      data['incorrect'] = incorrect!.map((v) => v.toJson()).toList();
    }
    data['totalQuestions'] = totalQuestions;
    return data;
  }
}

class Incorrect {
  String? question;
  String? a;
  String? b;
  String? c;
  String? d;
  String? answer;
  String? image;
  String? passage;
  String? explanation;

  Incorrect(
      {this.question,
      this.a,
      this.b,
      this.c,
      this.d,
      this.answer,
      this.image,
      this.passage,
      this.explanation});

  Incorrect.fromJson(Map<String, dynamic> json) {
    question = json['question'];
    a = json['a'];
    b = json['b'];
    c = json['c'];
    d = json['d'];
    answer = json['answer'];
    image = json['image'];
    passage = json['passage'];
    explanation = json['explanation'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['question'] = question;
    data['a'] = a;
    data['b'] = b;
    data['c'] = c;
    data['d'] = d;
    data['answer'] = answer;
    data['image'] = image;
    data['passage'] = passage;
    data['explanation'] = explanation;
    return data;
  }
}
