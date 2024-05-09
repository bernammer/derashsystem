// ignore_for_file: use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers/auth/auth_provider.dart';
import '../landing/menu_screen.dart';
import '../onboarding/on_boarding_screen_1.dart';

class SplashScreen extends ConsumerStatefulWidget {
  static String id = '/';

  const SplashScreen({super.key});

  @override
  ConsumerState<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends ConsumerState<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(
      const Duration(
        seconds: 2,
      ),
      () async {
        final authValue =
            await ref.read(authNotifierProvider.notifier).isAuthenticated();
        if (authValue) {
          Navigator.popAndPushNamed(context, MenuScreen.id);
        } else {
          Navigator.popAndPushNamed(context, OnboardingScreen1.id);
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Expanded(
                child: SizedBox(
              height: 10,
            )),
            const Text(
              'Derash',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 60,
              ),
            ),
            const SizedBox(
              height: 30,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width * 0.80,
              child: const LinearProgressIndicator(
                color: Colors.black,
                backgroundColor: Colors.black12,
              ),
            ),
            const Expanded(
                child: SizedBox(
              height: 10,
            ),),
            Image.asset(
              'assets/images/infranet-logo.png',
              height: 60,
            ),
            const SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}
