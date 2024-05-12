import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:user_app/screens/vehicle/vehicle_screen.dart';

import 'providers/theme/theme_provider.dart';
import 'screens/about/about_screen.dart';
import 'screens/auth/forgot_password_screen.dart';
import 'screens/auth/signin_screen.dart';
import 'screens/auth/signup_screen.dart';
import 'screens/landing/menu_screen.dart';
import 'screens/onboarding/on_boarding_screen_1.dart';
import 'screens/onboarding/on_boarding_screen_2.dart';
import 'screens/onboarding/on_boarding_screen_3.dart';
import 'screens/payment/payment_chapa.dart';
import 'screens/profile/profile_edit_screen.dart';
import 'screens/profile/profile_screen.dart';
import 'screens/settings/settings_screen.dart';
import 'screens/splash/splash_screen.dart';
import 'screens/vehicle/add_vehicle_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // MobileAds.instance.initialize();

  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer(
      builder: (BuildContext context, WidgetRef ref, Widget? child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          darkTheme: ref.watch(darkThemeProvider),
          theme: ref.watch(lightThemeProvider),
          themeMode: ref.watch(themeModeProvider),
          initialRoute: SplashScreen.id,
          routes: {
            SplashScreen.id: (context) => const SplashScreen(),
            OnboardingScreen1.id: (context) => const OnboardingScreen1(),
            OnboardingScreen2.id: (context) => const OnboardingScreen2(),
            OnboardingScreen3.id: (context) => const OnboardingScreen3(),
            SigninScreen.id: (context) => const SigninScreen(),
            SignupScreen.id: (context) => const SignupScreen(),
            ForgotPasswordScreen.id: (context) => const ForgotPasswordScreen(),
            MenuScreen.id: (context) => const MenuScreen(),
            ProfileScreen.id: (context) => const ProfileScreen(),
            ProfileEditScreen.id: (context) => const ProfileEditScreen(),
            SettingsScreen.id: (context) => const SettingsScreen(),
            AboutScreen.id: (context) => const AboutScreen(),
            VehicleScreen.id: (context) => const VehicleScreen(),
            AddVehicleScreen.id: (context) => const AddVehicleScreen(),
            PaymentChapa.id: (context) => const PaymentChapa(),
          },
        );
      },
    );
  }
}
