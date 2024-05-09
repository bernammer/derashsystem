import 'package:flutter/material.dart';
import 'package:validators/validators.dart';

import '../../static_files.dart';
import '../landing/home_screen.dart';
import 'components/text_input.dart';

class ForgotPasswordScreen extends StatelessWidget {
  static String id = 'ForgotPasswordScreen';

  const ForgotPasswordScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: SizedBox(
          height: height,
          width: width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                height: 250,
                width: width,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(kAuthBorderRadiusSize),
                    bottomRight: Radius.circular(kAuthBorderRadiusSize),
                  ),
                  image: const DecorationImage(
                      image: AssetImage(
                        'assets/images/blue_nav.png',
                      ),
                      fit: BoxFit.cover),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(
                        height: 30,
                      ),
                      Text(
                        'Logo Text',
                        style: kLogoTextStyle,
                      ),
                      const Expanded(
                        child: SizedBox(),
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      Text(
                        'Forgot Password',
                        style: kBigLightTitleTextStyle,
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            'Recover Your Account',
                            style: kWhiteDetailTextStyle,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(
                height: 24,
              ),
              CustomTextInput(
                width: width,
                label: 'Email',
                context: context,
                hint: 'someone@example.com',
                inputIcon: Icons.person_outline,
                inputType: TextInputType.emailAddress,
                inputAction: TextInputAction.done,
                validator: (value) {
                  if (isNull(value)) {
                    return 'Email can\'t accept empty';
                  }
                  if (!isEmail(value!)) {
                    return 'Has to be a valid email';
                  }
                  return null;
                },
              ),
              const Expanded(
                child: SizedBox(),
              ),
              Center(
                child: GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, HomeScreen.id);
                  },
                  child: Container(
                    width: width * 0.85,
                    height: 50,
                    decoration: BoxDecoration(
                      color: const Color(0xFF4B00D4),
                      borderRadius:
                          BorderRadius.circular(kButtonBorderRadiusSize),
                      boxShadow: [
                        BoxShadow(
                          color: kBlueButtonShadowColor,
                          offset: const Offset(0, 3),
                        ),
                      ],
                    ),
                    child: const Center(
                      child: Text(
                        'Forgot Password',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 26,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 30,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
