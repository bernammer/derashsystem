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

  DateTime? selectedDate = null;

  final _formKey = GlobalKey<FormState>();

  onSubmit() async {
    setState(() {
      loading = true;
    });
    await ref.read(authNotifierProvider.notifier).register(
          firstName: registerCredentials.firstName!,
          lastName: registerCredentials.firstName!,
          username: registerCredentials.username!,
          password: registerCredentials.password!,
          phone: registerCredentials.phoneNumber!,
          houseNumber: registerCredentials.houseNumber!,
          nationality: registerCredentials.nationality!,
          sex: registerCredentials.sex!,
          subCity: registerCredentials.subcity!,
          wereda: registerCredentials.wereda!,
          birthdate: registerCredentials.birthdate!,
        );
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
                child: Form(
                  key: _formKey,
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
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.username = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty email';
                }
                // if (!isEmail(value!)) {
                //   return 'It has to be valid email';
                // }
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
              hint: '0 if it is new',
              inputIcon: Icons.house,
              inputType: TextInputType.number,
              onChanged: (val) {
                registerCredentials.houseNumber = val;
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
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.nationality = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty nationality';
                }
                // if (!isNumeric(value!)) {
                //   return 'It has to be valid House Number';
                // }
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
              hint: 'Male or Female',
              inputIcon: Icons.male,
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.sex = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty sex';
                }
                if (value != 'Male' || value != 'Female') {
                  return 'Sex must be Male or Female';
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
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.subcity = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty subcity';
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
              inputType: TextInputType.text,
              onChanged: (val) {
                registerCredentials.wereda = val;
                return null;
              },
              validator: (value) {
                if (isNull(value)) {
                  return 'Can\'t accept empty wereda';
                }
                return null;
              },
            ),
            const SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  const SizedBox(
                    height: 12,
                  ),
                  const Text(
                    'Birth Day',
                    style: TextStyle(
                      color: kDarkTextColor,
                      fontSize: 18,
                    ),
                  ),
                  const SizedBox(
                    height: 6,
                  ),
                  InkWell(
                    onTap: () async {
                      selectedDate = (await showDatePicker(
                            context: context,
                            initialDate: DateTime.now(),
                            // Initial display date
                            firstDate: DateTime(1920, 1, 1),
                            // First selectable date (optional)
                            lastDate: DateTime(2100, 12,
                                31), // Last selectable date (optional)
                          ) ??
                          selectedDate);
                      registerCredentials.birthdate =
                          selectedDate?.toIso8601String();
                      setState(() {});
                    },
                    child: Container(
                      height: 60,
                      decoration: BoxDecoration(
                        color: kInputBackgroundColor,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: kInputBorderColor,
                          style: BorderStyle.solid,
                          width: 2.0,
                        ),
                      ),
                      child: Center(
                        child: Padding(
                          padding: const EdgeInsets.only(left: 0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            textBaseline: TextBaseline.ideographic,
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              // Center(
                              //   child: Icon(
                              //     inputIcon,
                              //   ),
                              // ),
                              const SizedBox(
                                width: 18,
                              ),
                              SizedBox(
                                width: width * 0.70,
                                child: selectedDate == null
                                    ? const Text('Not Selected')
                                    : Text(
                                        '${selectedDate?.year}-${selectedDate?.month}-${selectedDate?.day}'),
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              ),
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
                onTap: onSubmit,
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
                            child: CircularProgressIndicator(
                              color: Colors.white,
                            ),
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
