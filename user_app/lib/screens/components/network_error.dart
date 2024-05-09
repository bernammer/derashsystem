import 'package:flutter/material.dart';

class NetworkError extends StatelessWidget {
  static String id = 'NetworkError';
  const NetworkError({Key? key, this.message = ''}) : super(key: key);

  final String message;

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments;
    return SizedBox(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(message.isNotEmpty ? message : 'An error has occurred'),
        ],
      ),
    );
  }
}
