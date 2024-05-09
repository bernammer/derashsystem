import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:humanizer/humanizer.dart';
import 'package:validators/validators.dart';

import '../../models/user/user_profile.dart';
import '../../providers/user/update_profile_provider.dart';
import '../../providers/user/user_profile_provider.dart';
import '../../static_files.dart';

class ProfileEditScreen extends ConsumerStatefulWidget {
  static String id = 'ProfileEditScreen';

  const ProfileEditScreen({Key? key}) : super(key: key);

  @override
  _ProfileEditScreenState createState() => _ProfileEditScreenState();
}

class _ProfileEditScreenState extends ConsumerState<ProfileEditScreen> {
  final _formKey = GlobalKey<FormState>();

  //true when Natural and false when Social
  bool? field;

  UpdateProfile newProfile = UpdateProfile();

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
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) {
        final oldProfile = ref.watch(userProfileProvider).asData!.value;
        newProfile = UpdateProfile(
          bio: oldProfile.profile?.bio ?? '',
          name: oldProfile.user?.username ?? '',
          grade: oldProfile.profile?.gradeId.toString() ?? '1',
          city: oldProfile.profile?.town ?? '',
          email: oldProfile.user?.nationality,
          phone: oldProfile.user?.phone_number,
          region: oldProfile.profile?.region,
          school: oldProfile.profile?.school,
          field: oldProfile.user?.houseNumber,
        );
        if (oldProfile.user!.houseNumber!.toLowerCase() == kNatural) {
          setState(() {
            field = true;
          });
        } else {
          setState(() {
            field = false;
          });
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final oldProfile = ref.watch(userProfileProvider).asData?.value;

    var width = MediaQuery.of(context).size.width;
    var containerWidth = width * 0.9;

    ref.listen(
      profileUpdateProvider,
      (AsyncValue<UserProfile>? previous, AsyncValue<UserProfile>? next) {
        next!.when(
          data: (data) {
            ref.refresh(userProfileProvider);
            Navigator.pop(context);
          },
          error: (err, st) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('Update failed. Try again later'),
              ),
            );
          },
          loading: () {
            // debugPrint('Updating');
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Row(
                  children: [
                    Text('Trying'),
                    SizedBox(
                      height: 20,
                      child: CircularProgressIndicator(),
                    )
                  ],
                ),
              ),
            );
          },
        );
      },
    );

    return Scaffold(
      backgroundColor: kScaffoldBackgroundColor,
      body: Stack(
        alignment: Alignment.topCenter,
        children: [
          Container(
            width: width,
            height: 160,
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage(
                  'assets/images/nav.png',
                ),
                fit: BoxFit.cover,
              ),
            ),
            child: Column(
              children: [
                const SizedBox(
                  height: 50,
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // const BackButton(
                      //   color: Colors.white,
                      // ),
                      Text(
                        'Edit Profile',
                        style: kWhiteDetailTextStyle.copyWith(
                          fontSize: 22,
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
          SingleChildScrollView(
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const SizedBox(
                    height: 100,
                  ),
                  Container(
                    width: containerWidth,
                    height: width * 0.55,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(
                        kProfileBorderRadiusSize,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.2),
                          spreadRadius: 3,
                          offset: const Offset(3, 3),
                          blurRadius: 3,
                        ),
                      ],
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const CircleAvatar(
                          // backgroundImage: CachedNetworkImageProvider(
                          //   'assets/images/pi.png',
                          // ),
                          backgroundImage: AssetImage('assets/images/pi.png'),
                          child: Icon(
                            Icons.camera_alt_outlined,
                            size: 60,
                          ),
                          radius: 70,
                        ),
                        const SizedBox(
                          height: 8,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            GestureDetector(
                              onTap: () {
                                Navigator.pop(context);
                              },
                              child: Container(
                                height: 32,
                                width: 120,
                                decoration: BoxDecoration(
                                  // color: Colors.green,
                                  borderRadius: BorderRadius.circular(8),
                                  border: Border.all(
                                    color: Colors.red,
                                  ),
                                ),
                                child: const Center(
                                  child: Text(
                                    'Cancel',
                                    style: TextStyle(
                                      color: Colors.red,
                                      fontSize: 14,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            InkWell(
                              onTap: () {
                                if (_formKey.currentState!.validate()) {
                                  ref
                                      .read(profileUpdateProvider.notifier)
                                      .updateProfile(newProfile);
                                } else {
                                  if (kDebugMode) {
                                    print('not valid');
                                  }
                                }
                              },
                              child: Container(
                                height: 32,
                                width: 120,
                                decoration: BoxDecoration(
                                  color: Colors.green,
                                  borderRadius: BorderRadius.circular(8),
                                  border: Border.all(
                                    color: Colors.green,
                                  ),
                                ),
                                child: const Center(
                                  child: Text(
                                    'Save',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 14,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.user?.username ?? '',
                    hint: 'Abebe Kebede',
                    subtitle: 'Name',
                    onChanged: (val) {
                      newProfile.name = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Name Can not be empty';
                      }
                      return null;
                    },
                    textInputType: TextInputType.name,
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.user?.nationality ?? '',
                    hint: 'someone@example.com',
                    subtitle: 'Email',
                    onChanged: (val) {
                      newProfile.email = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Email Can not be empty';
                      }
                      if (!isEmail(val!)) {
                        return 'Must be a valid email';
                      }
                      return null;
                    },
                    textInputType: TextInputType.emailAddress,
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.user?.phone_number ?? '',
                    hint: '0911223344',
                    subtitle: 'Phone',
                    onChanged: (val) {
                      newProfile.phone = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Phone Can not be empty';
                      }
                      if (!isNumeric(val!)) {
                        return 'Phone can only be numbers';
                      }
                      return null;
                    },
                    textInputType: TextInputType.phone,
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.profile?.gradeId.toString() ?? '',
                    hint: '10',
                    subtitle: 'Grade',
                    onChanged: (val) {
                      newProfile.grade = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Grade Can not be empty';
                      }
                      if (!isNumeric(val!)) {
                        return 'Grade can only be numbers';
                      }
                      return null;
                    },
                    textInputType: TextInputType.number,
                  ),
                  Container(
                    height: 70,
                    margin: const EdgeInsets.symmetric(
                      horizontal: 8,
                      vertical: 8,
                    ),
                    padding: const EdgeInsets.symmetric(
                        // horizontal: 8,
                        ),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 1,
                          child: InkWell(
                            onTap: () {
                              newProfile.field = kNatural;
                              setState(() {
                                field = true;
                              });
                            },
                            child: Container(
                              decoration: BoxDecoration(
                                color: isNatural()
                                    ? Colors.black26
                                    : Colors.transparent,
                                borderRadius: const BorderRadius.only(
                                  topLeft: Radius.circular(8),
                                  bottomLeft: Radius.circular(8),
                                ),
                              ),
                              child: Center(
                                child: Text(
                                  kNatural.toTitleCase(),
                                  style: const TextStyle(
                                    fontSize: 16,
                                    color: Colors.black54,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                        // VerticalDivider(
                        //   color: kInputBorderColor,
                        //   thickness: 2,
                        //   endIndent: 0,
                        //   indent: 0,
                        //   width: 2,
                        // ),
                        Expanded(
                          flex: 1,
                          child: InkWell(
                            onTap: () {
                              newProfile.field = kSocial;
                              setState(() {
                                field = false;
                              });
                            },
                            child: Container(
                              decoration: BoxDecoration(
                                color: isSocial()
                                    ? Colors.black26
                                    : Colors.transparent,
                                borderRadius: const BorderRadius.only(
                                  topRight: Radius.circular(8),
                                  bottomRight: Radius.circular(8),
                                ),
                              ),
                              child: Center(
                                child: Text(
                                  kSocial.toTitleCase(),
                                  style: const TextStyle(
                                    fontSize: 16,
                                    color: Colors.black54,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.profile?.bio ?? '',
                    subtitle: 'Bio',
                    hint: 'Studying ...',
                    onChanged: (val) {
                      newProfile.bio = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Bio can not be empty';
                      }
                      return null;
                    },
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.profile?.region ?? '',
                    subtitle: 'Region',
                    hint: 'Addis Ababa / Oromia / Amhara / Tigray ...',
                    onChanged: (val) {
                      newProfile.region = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'Region can not be empty';
                      }
                      return null;
                    },
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.profile?.town ?? '',
                    subtitle: 'City',
                    hint: 'Addis / Adama / Gondor / Hawassa',
                    onChanged: (val) {
                      newProfile.city = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'City can not be empty';
                      }
                      return null;
                    },
                  ),
                  ProfileEditTile(
                    initial: oldProfile?.profile?.school ?? '',
                    subtitle: 'School',
                    hint: 'Kality Catholic School',
                    onChanged: (val) {
                      newProfile.school = val;
                    },
                    validator: (val) {
                      if (isNull(val)) {
                        return 'School can not be empty';
                      }
                      return null;
                    },
                    textInputAction: TextInputAction.done,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ProfileEditTile extends StatelessWidget {
  final String initial;
  final String hint;
  final String subtitle;
  final IconData? icon;
  final TextInputType textInputType;
  final TextInputAction textInputAction;
  final Function(String)? onChanged;
  final String? Function(String?)? validator;

  const ProfileEditTile({
    Key? key,
    required this.initial,
    this.icon,
    this.onChanged,
    required this.subtitle,
    required this.hint,
    this.textInputAction = TextInputAction.next,
    this.textInputType = TextInputType.text,
    this.validator,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 8,
        vertical: 8,
      ),
      padding: const EdgeInsets.symmetric(
        horizontal: 8,
      ),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(8),
      ),
      child: ListTile(
        title: TextFormField(
          key: Key(initial),
          initialValue: initial,
          onChanged: onChanged,
          validator: validator,
          textInputAction: textInputAction,
          keyboardType: textInputType,
          decoration: InputDecoration.collapsed(
            hintText: hint,
          ),
          style: const TextStyle(
            color: Colors.black,
          ),
        ),
        subtitle: Text(
          subtitle,
        ),
      ),
    );
  }
}
