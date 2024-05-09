import 'package:flutter/material.dart';

import 'on_boarding_screen.dart';
import 'on_boarding_screen_3.dart';

class OnboardingScreen2 extends StatelessWidget {
  static String id = 'LandingScreen2';

  const OnboardingScreen2({super.key});

  @override
  Widget build(BuildContext context) {
    return OnboardingScreen(
      label: 'New Label 2',
      message: 'New Message 2',
      image: 'landing_red_2.png',
      page: 2,
      skip: false,
      onTap: () {
        Navigator.pushNamed(
          context,
          OnboardingScreen3.id,
        );
      },
    );
  }
}
