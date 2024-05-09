import 'package:flutter/material.dart';

import '../auth/login_screen.dart';
import 'on_boarding_screen.dart';

class OnboardingScreen3 extends StatelessWidget {
  static String id = 'LandingScreen3';

  const OnboardingScreen3({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OnboardingScreen(
      label: 'New Label 3',
      message: 'New Message 3',
      image: 'landing_red_3.png',
      page: 3,
      skip: false,
      onTap: () {
        Navigator.pushNamed(
          context,
          LoginScreen.id,
        );
      },
    );
  }
}
