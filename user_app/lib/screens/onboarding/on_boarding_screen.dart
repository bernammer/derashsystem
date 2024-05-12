import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../static_files.dart';
import '../auth/signin_screen.dart';

class OnboardingScreen extends StatelessWidget {
  final String label;
  final String message;
  final String image;
  final int page;
  final bool skip;
  final VoidCallback onTap;

  const OnboardingScreen({
    Key? key,
    required this.label,
    required this.message,
    required this.page,
    required this.skip,
    required this.onTap,
    required this.image,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;
    return Hero(
      tag: 'onboarding',
      child: Scaffold(
        body: SizedBox(
          height: height,
          width: width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                height: height * 0.45,
                width: width,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(kLandingBorderRadiusSize),
                    bottomRight: Radius.circular(kLandingBorderRadiusSize),
                  ),
                  color: kPrimaryBlueColor,
                ),
                child: const Stack(
                  children: [
                    Padding(
                      padding: EdgeInsets.only(bottom: 25),
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        // child: CircleAvatar(
                        //   backgroundColor: kLighterBlueColor,
                        //   radius: 90,
                        // ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(bottom: 35),
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: Icon(
                          Icons.car_crash_outlined,
                          color: Colors.white,
                          size: 300,
                        ),
                      ),
                    ),
                    // Padding(
                    //   padding: const EdgeInsets.only(bottom: 35),
                    //   child: Align(
                    //     alignment: Alignment.bottomCenter,
                    //     child: Image.asset(
                    //       'assets/images/$image',
                    //       height: height * 0.30,
                    //     ),
                    //   ),
                    // ),
                  ],
                ),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        label,
                        style: kBoldTitleTextStyle,
                      ),
                      const SizedBox(
                        height: 16,
                      ),
                      Text(
                        message,
                        style: kLightDetailTextStyle,
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      height: 6,
                      width: 22,
                      decoration: BoxDecoration(
                        color: page == 1
                            ? kLandingActiveColor
                            : kLandingInactiveColor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                    const SizedBox(
                      width: 4,
                    ),
                    Container(
                      height: 6,
                      width: 22,
                      decoration: BoxDecoration(
                        color: page == 2
                            ? kLandingActiveColor
                            : kLandingInactiveColor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                    const SizedBox(
                      width: 4,
                    ),
                    Container(
                      height: 6,
                      width: 22,
                      decoration: BoxDecoration(
                        color: page == 3
                            ? kLandingActiveColor
                            : kLandingInactiveColor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 16,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    page < 2
                        ? GestureDetector(
                            onTap: () {
                              Navigator.pushNamed(context, SigninScreen.id);
                            },
                            child: Text(
                              'Skip',
                              style: kBigLightDetailTextStyle,
                            ),
                          )
                        : GestureDetector(
                            onTap: () {
                              Navigator.pop(context);
                            },
                            child: Container(
                              height: 50,
                              width: 50,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8),
                                color: kBlueButtonColor,
                                boxShadow: [
                                  BoxShadow(
                                    color: kBlueButtonShadowColor,
                                    offset: const Offset(0, 3),
                                  ),
                                ],
                              ),
                              child: const Icon(
                                Icons.chevron_left,
                                color: Colors.white,
                                size: 36,
                              ),
                            ),
                          ),
                    GestureDetector(
                      onTap: onTap,
                      child: Container(
                        height: 50,
                        width: 50,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: kBlueButtonColor,
                          boxShadow: [
                            BoxShadow(
                              color: kBlueButtonShadowColor,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: const Icon(
                          Icons.chevron_right,
                          color: Colors.white,
                          size: 36,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 20,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
