import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:humanizer/humanizer.dart';
import 'package:validators/validators.dart';

import '../../models/auth/auth.dart';
import '../../models/auth/credentials.dart';
import '../../providers/auth/auth_provider.dart';
import '../../static_files.dart';
import '../landing/menu_screen.dart';
import 'components/text_input.dart';

class SignupScreen extends ConsumerStatefulWidget {
  static String id = 'SignupScreen';

  const SignupScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends ConsumerState<SignupScreen> {
  bool loading = false;

  RegisterCredentials registerCredentials = RegisterCredentials();

  //true when Natural and false when Social
  bool? field;

  isNatural() {
    if (field != null && field == true) {
      return true;
    }
    return false;
  }

  isSocial() {
    if (field != null && field == false) {
      return true;
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    const double topHeight = 250;

    ref.listen(authNotifierProvider,
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
            Navigator.pushNamed(
              context,
              MenuScreen.id,
            );
          },
          error: (error, st) {
            if (kDebugMode) {
              print(st.toString());
            }
            setState(() {
              loading = false;
            });
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text(
                  'Couldn\'t register you, Try again later',
                ),
              ),
            );
          },
          loading: () {
            setState(() {
              loading = true;
            });
            if (kDebugMode) {
              print('Loading');
            }
          },
        );
      });
    });

    return Scaffold(
      body: SafeArea(
        top: true,
        child: ListView(
          // physics: ClampingScrollPhysics(),
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
                      'Register',
                      style: kBigLightTitleTextStyle,
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Text(
                          'Register to use our app',
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
            // SizedBox(
            //   height: 24,
            // ),
            // SizedBox(
            //   height: topHeight,
            // ),
            CustomTextInput(
              width: width,
              label: 'First Name',
              context: context,
              hint: 'Abebe',
              inputIcon: Icons.person_outline,
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty name';
                }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Last Name',
              context: context,
              hint: 'Kebede',
              inputIcon: Icons.person_outline,
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.lastName = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty name';
                }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Phone number',
              context: context,
              hint: '0912345678',
              inputIcon: Icons.phone,
              inputType: TextInputType.phone,
              onChanged: (val) {
                registerCredentials.phoneNumber = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty number';
                }
                if (!isNumeric(value!)) {
                  return 'Phone number must be numbers only';
                }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Username',
              context: context,
              hint: 'username',
              inputIcon: Icons.person,
              inputType: TextInputType.emailAddress,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty email';
                }
                if (!isEmail(value!)) {
                  return 'It has to be valid email';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'House Number',
              context: context,
              hint: '0027',
              inputIcon: Icons.house,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Nationality',
              context: context,
              hint: 'et',
              inputIcon: Icons.flag,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.nationality = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Sex',
              context: context,
              hint: 'M',
              inputIcon: Icons.male,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Sub City',
              context: context,
              hint: 'Yeka',
              inputIcon: Icons.location_city,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Woreda',
              context: context,
              hint: '19',
              inputIcon: Icons.location_city,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Birth Date',
              context: context,
              hint: '18-02-1997',
              inputIcon: Icons.date_range,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.birthdate = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty House Number';
                }
                if (!isNumeric(value!)) {
                  return 'It has to be valid House Number';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            CustomTextInput(
              width: width,
              label: 'Password',
              context: context,
              hint: 'Password',
              obscured: true,
              inputIcon: Icons.lock_open_rounded,
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.password = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty password';
                }
                if (isNumeric(value!)) {
                  return 'Can\'t be all numbers';
                }
                if (!isLength(value, 6)) {
                  return 'Has to be at least longer than 6 characters';
                }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Confirm Password',
              context: context,
              hint: 'Confirm Password',
              obscured: true,
              inputIcon: Icons.lock_open_rounded,
              inputType: TextInputType.text,
              validator: (value) {
                if (isNull(value)) {
                  return 'Password do not match';
                }
                if (value != registerCredentials.password) {
                  return 'Passwords do not match';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 20,
            ),
            Center(
              child: GestureDetector(
                onTap: () async {
                  setState(() {
                    loading = true;
                  });
                  // await ref.read(authNotifierProvider.notifier).register(
                  //       name: registerCredentials.firstName!,
                  //       email: registerCredentials.username!,
                  //       password: registerCredentials.password!,
                  //       phone: registerCredentials.phoneNumber!,
                  //       field: registerCredentials.houseNumber ?? kNatural,
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
                    color: kAuthButtonColor,
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
                            child: CircularProgressIndicator(),
                          )
                        : const Text(
                            'Sign Up',
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
          ],
        ),
      ),
    );
  }
}
