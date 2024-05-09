import 'package:flutter/cupertino.dart';

import 'on_boarding_screen.dart';
import 'on_boarding_screen_2.dart';

class OnboardingScreen1 extends StatelessWidget {
  static String id = 'LandingScreen1';

  const OnboardingScreen1({super.key});

  @override
  Widget build(BuildContext context) {
    return OnboardingScreen(
      label: 'New Label 1',
      message: 'New Message 1',
      image: 'landing_red_1.png',
      page: 1,
      skip: true,
      onTap: () {
        Navigator.pushNamed(
          context,
          OnboardingScreen2.id,
        );
      },
    );
  }
}
