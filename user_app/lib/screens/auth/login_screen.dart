import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../models/auth/auth.dart';
import '../../models/auth/credentials.dart';
import '../../providers/auth/auth_provider.dart';
import '../../static_files.dart';
import '../landing/menu_screen.dart';
import 'components/text_input.dart';
import 'signup_screen.dart';

class LoginScreen extends ConsumerStatefulWidget {
  static String id = 'LoginScreen';

  const LoginScreen({super.key});

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  @override
  void initState() {
    super.initState();
  }

  final LoginCredentials _credentials = LoginCredentials();

  bool loading = false;

  @override
  Widget build(BuildContext context) {
    ref.listen(
      authNotifierProvider,
      (AsyncValue<Auth>? previous, AsyncValue<Auth>? next) {
        WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
          next!.when(
            data: (data) {
              if (kDebugMode) {
                // print(data.user!.email);
              }
              setState(() {
                loading = false;
              });
              Navigator.pushNamed(context, MenuScreen.id);
            },
            error: (error, st) {
              if (kDebugMode) {
                print(st.toString());
              }
              if (error.runtimeType == DioError) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text(
                      'Login failed, Make sure you\'re connected to the internet',
                    ),
                  ),
                );
              }
              setState(() {
                loading = false;
              });
            },
            loading: () {
              setState(() {
                loading = true;
              });
            },
          );
        });
      },
    );

    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: SizedBox(
          height: height,
          width: width,
          child: ListView(
            children: [
              Container(
                height: 250,
                width: width,
                decoration: BoxDecoration(
                  // color: const Color(0xFF4B00D4),
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(kAuthBorderRadiusSize),
                    bottomRight: Radius.circular(kAuthBorderRadiusSize),
                  ),
                  image: const DecorationImage(
                    image: AssetImage('assets/images/blue_nav.png'),
                    fit: BoxFit.cover,
                  ),
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
                        'Derash',
                        style: kLogoTextStyle,
                      ),
                      // Row(
                      //   mainAxisAlignment: MainAxisAlignment.end,
                      //   children: [
                      //     Image.asset(
                      //       'assets/images/infranet-logo.png',
                      //       height: 80,
                      //       colorBlendMode: BlendMode.exclusion,
                      //     ),
                      //   ],
                      // ),
                      const Expanded(
                        child: SizedBox(),
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      Text(
                        'Sign In',
                        style: kBigLightTitleTextStyle,
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            'Sign In to use our app',
                            style: kWhiteDetailTextStyle,
                          ),
                          const SizedBox(
                            width: 4,
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
                label: 'Username',
                context: context,
                hint: 'username',
                inputIcon: Icons.person_outline,
                inputType: TextInputType.text,
                onChanged: (value) {
                  _credentials.username = value;
                  return null;
                },
              ),
              CustomTextInput(
                width: width,
                label: 'Password',
                context: context,
                hint: 'Password',
                obscured: true,
                inputIcon: Icons.lock_open_rounded,
                inputAction: TextInputAction.done,
                onChanged: (value) {
                  _credentials.password = value;
                  return null;
                },
              ),
              const SizedBox(
                height: 20,
              ),
              Center(
                child: GestureDetector(
                  onTap: () {
                    // ref.read(authNotifierProvider.notifier).login(
                    //       email: _credentials.username!,
                    //       password: _credentials.password!,
                    //     );

                    Navigator.pushNamed(
                      context,
                      MenuScreen.id,
                    );
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
                    child: Center(
                      child: loading
                          ? const SizedBox(
                              height: 30,
                              width: 30,
                              child: CircularProgressIndicator(
                                color: Colors.white,
                              ),
                            )
                          : const Text(
                              'Sign In',
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
                height: 20,
              ),
              // Row(
              //   mainAxisAlignment: MainAxisAlignment.center,
              //   children: [
              //     Padding(
              //       padding: const EdgeInsets.symmetric(
              //         horizontal: 20,
              //         vertical: 10,
              //       ),
              //       child: Row(
              //         mainAxisAlignment: MainAxisAlignment.end,
              //         children: [
              //           GestureDetector(
              //             onTap: () {
              //               Navigator.pushNamed(
              //                 context,
              //                 ForgotPasswordScreen.id,
              //               );
              //             },
              //             child: Text(
              //               'Forgot Password?',
              //               style: kDetailLinkTextStyle,
              //             ),
              //           )
              //         ],
              //       ),
              //     ),
              //   ],
              // ),
              // const SizedBox(
              //   height: 10,
              // ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Don\'t have an account?',
                    style: kLightDetailTextStyle,
                  ),
                  const SizedBox(
                    width: 4,
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, SignupScreen.id);
                    },
                    child: Text(
                      'Register',
                      style: kDetailLinkTextStyle,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
