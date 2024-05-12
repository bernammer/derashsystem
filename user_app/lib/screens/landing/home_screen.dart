// ignore_for_file: library_private_types_in_public_api

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:user_app/screens/vehicle/vehicle_screen.dart';

import '../../helper_widgets/custom_error_widget.dart';
import '../../providers/user/user_profile_provider.dart';
import '../../static_files.dart';
import '../auth/signin_screen.dart';
import '../components/circular_loading.dart';

class HomeScreen extends ConsumerStatefulWidget {
  static String id = 'HomeScreen';

  const HomeScreen({super.key});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends ConsumerState<HomeScreen> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  bool registered = true;
  bool verified = true;
  bool addVehicle = false;
  bool boloRequested = false;

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;

    final user = ref.watch(userProfileProvider);

    return Scaffold(
      key: _scaffoldKey,
      backgroundColor: kScaffoldBackgroundColor,
      body: user.when(
        data: (data) {
          return SafeArea(
            top: true,
            child: Container(
              height: MediaQuery.sizeOf(context).height,
              width: MediaQuery.sizeOf(context).width,
              padding: const EdgeInsets.symmetric(
                horizontal: 20,
                vertical: 10,
              ),
              decoration: const BoxDecoration(
                color: Colors.white,
              ),
              child: SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 20),
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 4,
                      ),
                      width: MediaQuery.sizeOf(context).width,
                      decoration: const BoxDecoration(
                          // color: Color(0xFFFB6009),
                          // borderRadius: BorderRadius.circular(20),
                          ),
                      child: const Text(
                        'Check Where You Are',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 30,
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    UserStageWidget(
                      verified: registered,
                      title: "Registration",
                      width: MediaQuery.sizeOf(context).width * 0.6,
                      fontSize: 18,
                      onTap: () {},
                    ),
                    const SizedBox(height: 20),
                    UserStageWidget(
                      verified: verified,
                      title: "Account Verification",
                      onTap: () {},
                    ),
                    const SizedBox(height: 20),
                    UserStageWidget(
                      verified: addVehicle,
                      title: "Add Vehicle",
                      onTap: () {
                        Navigator.pushNamed(context, VehicleScreen.id,);
                      },
                    ),
                    const SizedBox(height: 20),
                    UserStageWidget(
                      verified: boloRequested,
                      title: "Request Bolo Service",
                      onTap: () {},
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Center(
                      child: InkWell(
                        onTap: () {
                          if (verified) {
                            // Navigator.pushNamed(context, SignUpOrSignInScreen.id);
                            debugPrint('Go to next page');
                          }
                        },
                        child: AnimatedContainer(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 8,
                            vertical: 8,
                          ),
                          // width: MediaQuery.sizeOf(context).width,
                          width: 120,
                          decoration: BoxDecoration(
                            color: boloRequested
                                ? Colors.black
                                : const Color(0xFFD9D9D9),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          duration: const Duration(
                            milliseconds: 300,
                          ),
                          child: Row(
                            children: [
                              const SizedBox(
                                width: 10,
                              ),
                              Text(
                                "Finish\nService",
                                style: TextStyle(
                                  fontSize: 16,
                                  color: boloRequested
                                      ? Colors.white
                                      : Colors.black,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
        error: (error, st) {
          debugPrint('HomeScreen: $error \n$st');

          try {
            var newError = error as DioError;
            if (newError.message.toLowerCase().contains('unauthorized') ||
                newError.response?.statusCode == 401) {
              WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
                Navigator.pushReplacementNamed(context, SigninScreen.id);
              });
            }
          } catch (e) {
            return CustomErrorWidget(
              onTap: () {
                ref.refresh(userProfileProvider);
              },
            );
          }
          return CustomErrorWidget(
            onTap: () {
              ref.refresh(userProfileProvider);
            },
          );
        },
        loading: () {
          return const CircularLoading();
        },
      ),
    );
  }
}

class UserStageWidget extends StatelessWidget {
  const UserStageWidget({
    super.key,
    required this.verified,
    required this.title,
    required this.onTap,
    this.width,
    this.height,
    this.fontSize = 18,
  });

  final bool verified;
  final String title;
  final VoidCallback onTap;
  final double? width;
  final double? height;
  final double? fontSize;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        InkWell(
          onTap: onTap,
          child: AnimatedContainer(
            padding: const EdgeInsets.symmetric(
              horizontal: 8,
              vertical: 8,
            ),
            width: width ?? MediaQuery.sizeOf(context).width * 0.6,
            height: height,
            decoration: BoxDecoration(
              color:
                  verified ? const Color(0xFF0A7B00) : const Color(0xFFD9D9D9),
              borderRadius: BorderRadius.circular(12),
            ),
            duration: const Duration(
              milliseconds: 300,
            ),
            child: Center(
              child: Text(
                title,
                style: TextStyle(
                  fontSize: fontSize ?? 26,
                  color: verified ? Colors.white : Colors.black,
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 10),
        Center(
          child: AnimatedContainer(
            width: 2,
            height: 50,
            decoration: BoxDecoration(
              color:
                  verified ? const Color(0xFF0A7B00) : const Color(0xFFD9D9D9),
              borderRadius: const BorderRadius.only(
                topLeft: Radius.circular(20),
                topRight: Radius.circular(20),
              ),
            ),
            duration: const Duration(
              milliseconds: 300,
            ),
          ),
        ),
        Center(
          child: AnimatedContainer(
            width: 15,
            height: 15,
            decoration: BoxDecoration(
              color:
                  verified ? const Color(0xFF0A7B00) : const Color(0xFFD9D9D9),
              borderRadius: BorderRadius.circular(20),
            ),
            duration: const Duration(
              milliseconds: 300,
            ),
          ),
        ),
      ],
    );
  }
}