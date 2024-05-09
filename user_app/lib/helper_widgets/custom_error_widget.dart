import 'package:flutter/material.dart';
import 'package:user_app/providers/theme/theme_provider.dart';

class CustomErrorWidget extends StatefulWidget {
  static String id = 'ErrorWidget';

  const CustomErrorWidget({
    super.key,
    required this.onTap,
    this.message,
  });

  final Function() onTap;
  final String? message;

  @override
  _CustomErrorWidgetState createState() => _CustomErrorWidgetState();
}

class _CustomErrorWidgetState extends State<CustomErrorWidget> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 20,
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: [
          Text(
            'Oops, \nsomething went wrong',
            style: TextStyle(
              color: Theme.of(context).custom.searchAppBarColor,
              fontSize: 30,
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          widget.message != null
              ? Text(
                  widget.message!,
                  style: TextStyle(
                    color: Theme.of(context).custom.searchAppBarColor,
                    fontSize: 18,
                  ),
                )
              : const SizedBox(),
          const SizedBox(
            height: 10,
          ),
          GestureDetector(
            onTap: widget.onTap,
            child: Container(
              height: 50,
              padding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 6,
              ),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                border: Border.all(
                  color: Theme.of(context).custom.searchAppBarColor,
                ),
                shape: BoxShape.rectangle,
              ),
              child: Center(
                widthFactor: 1.5,
                child: Text(
                  'Try again',
                  style: TextStyle(
                    color: Theme.of(context).custom.searchAppBarColor,
                    fontSize: 18,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
