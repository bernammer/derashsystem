import 'package:flutter/material.dart';

import '../../../static_files.dart';

class CustomTextInput extends StatelessWidget {
  final BuildContext context;
  final double width;
  final IconData inputIcon;
  final bool obscured;
  final TextInputType inputType;
  final TextInputAction inputAction;
  final String label;
  final String hint;
  final String? Function(String?)? validator;
  final String? Function(String?)? onChanged;
  final AutovalidateMode validationMode;

  const CustomTextInput({
    super.key,
    required this.context,
    required this.width,
    required this.label,
    required this.hint,
    required this.inputIcon,
    this.obscured = false,
    this.inputType = TextInputType.text,
    this.inputAction = TextInputAction.next,
    this.validator,
    this.onChanged,
    this.validationMode = AutovalidateMode.onUserInteraction,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(
            height: 12,
          ),
          Text(
            label,
            style: const TextStyle(
              color: kDarkTextColor,
              fontSize: 18,
            ),
          ),
          const SizedBox(
            height: 6,
          ),
          Container(
            height: 60,
            decoration: BoxDecoration(
              color: kInputBackgroundColor,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: kInputBorderColor,
                style: BorderStyle.solid,
                width: 2.0,
              ),
            ),
            child: Center(
              child: Padding(
                padding: const EdgeInsets.only(left: 0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  textBaseline: TextBaseline.ideographic,
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    // Center(
                    //   child: Icon(
                    //     inputIcon,
                    //   ),
                    // ),
                    // const SizedBox(
                    //   width: 18,
                    // ),
                    SizedBox(
                      width: width * 0.70,
                      child: TextFormField(
                        autovalidateMode: validationMode,
                        validator: validator,
                        obscureText: obscured,
                        keyboardType: inputType,
                        textInputAction: inputAction,
                        textAlign: TextAlign.start,
                        cursorColor: Colors.black,
                        onChanged: onChanged,
                        style: const TextStyle(
                          color: Colors.black,
                          fontSize: 16.0,
                        ),
                        // strutStyle: const StrutStyle(forceStrutHeight: true),
                        decoration: InputDecoration(
                          hintText: hint,
                          border: InputBorder.none,
                          // prefixIcon: Icon(
                          //   inputIcon,
                          // ),
                          contentPadding: const EdgeInsets.only(left: 20),
                          hintStyle: const TextStyle(
                            color: Colors.black45,
                            height: 0,
                          ),
                          focusColor: Colors.black,
                          floatingLabelBehavior: FloatingLabelBehavior.never,
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
