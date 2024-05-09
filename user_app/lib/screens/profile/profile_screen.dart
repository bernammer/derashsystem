import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:humanizer/humanizer.dart';
import 'package:validators/validators.dart';

import '../../dart_io_client.dart';
import '../../helper_widgets/custom_error_widget.dart';
import '../../providers/auth/auth_provider.dart';
import '../../providers/user/user_profile_provider.dart';
import '../../static_files.dart';
import '../components/circular_loading.dart';
import '../onboarding/on_boarding_screen_1.dart';
import '../splash/splash_screen.dart';
import 'profile_edit_screen.dart';

class ProfileScreen extends ConsumerWidget {
  static String id = 'ProfileScreen';

  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var width = MediaQuery.of(context).size.width;
    var containerWidth = width * 0.9;

    final profile = ref.watch(userProfileProvider);

    return Scaffold(
      backgroundColor: kScaffoldBackgroundColor,
      body: profile.when(
        data: (data) {
          return Stack(
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
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          // const BackButton(
                          //   color: Colors.white,
                          // ),
                          Text(
                            'Profile',
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
                          Stack(
                            children: [
                              // Container(
                              //   height: 140,
                              //   width: 140,
                              //   decoration: BoxDecoration(
                              //     borderRadius: BorderRadius.circular(50),
                              //   ),
                              //   child: data.profile?.image != null
                              //       ? CachedNetworkImage(
                              //           imageUrl:
                              //               baseUrl + data.profile!.image!,
                              //           fit: BoxFit.cover,
                              //         )
                              //       : Image.asset(
                              //           'assets/images/pi.png',
                              //           fit: BoxFit.cover,
                              //         ),
                              // ),
                              Container(
                                height: 140,
                                width: 140,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(100),
                                  border: Border.all(
                                    color: kPrimaryBlueColor,
                                    width: 2,
                                  ),
                                ),
                                child: Icon(
                                  Icons.person,
                                  size: 80,
                                  color: kPrimaryBlueColor,
                                ),
                              ),
                              // Positioned(
                              //   bottom: 8,
                              //   right: 8,
                              //   child: GestureDetector(
                              //     onTap: () {
                              //       Navigator.pushNamed(
                              //         context,
                              //         ProfileEditScreen.id,
                              //       );
                              //     },
                              //     child: Container(
                              //       height: 30,
                              //       width: 30,
                              //       decoration: BoxDecoration(
                              //         color: Colors.green,
                              //         shape: BoxShape.circle,
                              //         border: Border.all(
                              //           color: Colors.white,
                              //           width: 2,
                              //         ),
                              //       ),
                              //       child: const Icon(
                              //         FontAwesomeIcons.pencil,
                              //         color: Colors.white,
                              //         size: 15,
                              //       ),
                              //     ),
                              //   ),
                              // ),
                            ],
                          ),
                          const SizedBox(
                            height: 12,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              // Container(
                              //   height: 32,
                              //   width: 120,
                              //   decoration: BoxDecoration(
                              //     color: kPrimaryBlueColor,
                              //     borderRadius: BorderRadius.circular(8),
                              //     boxShadow: [
                              //       BoxShadow(
                              //         color: kPrimaryBlueColor.withOpacity(0.6),
                              //         offset: const Offset(0, 0),
                              //         blurRadius: 2,
                              //         spreadRadius: 2,
                              //       )
                              //     ],
                              //     border: Border.all(
                              //       color: kPrimaryBlueColor,
                              //     ),
                              //   ),
                              //   child: const Center(
                              //     child: Text(
                              //       '32 Followers',
                              //       style: TextStyle(
                              //         color: Colors.white,
                              //         fontSize: 14,
                              //       ),
                              //     ),
                              //   ),
                              // ),
                              InkWell(
                                onTap: () {
                                  Navigator.pushNamed(
                                    context,
                                    ProfileEditScreen.id,
                                  );
                                },
                                child: Container(
                                  height: 32,
                                  width: 120,
                                  decoration: BoxDecoration(
                                    color: kPrimaryBlueColor,
                                    borderRadius: BorderRadius.circular(8),
                                    boxShadow: [
                                      // BoxShadow(
                                      //   color:
                                      //   kPrimaryBlueColor.withOpacity(0.8),
                                      //   offset: const Offset(0, 0),
                                      //   blurRadius: 2,
                                      //   spreadRadius: 2,
                                      // )
                                    ],
                                    border: Border.all(
                                      color: kPrimaryBlueColor,
                                    ),
                                  ),
                                  child: const Center(
                                    child: Text(
                                      'Edit',
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
                    ProfileTile(
                      title: data.user?.username,
                      subtitle: 'Name',
                    ),
                    ProfileTile(
                      title: data.user?.nationality,
                      subtitle: 'Nationality',
                    ),
                    ProfileTile(
                      title: data.user?.phone_number,
                      subtitle: 'Phone Number',
                    ),
                    ProfileTile(
                      title: data.user?.houseNumber,
                      subtitle: 'House Number',
                    ),
                    ProfileTile(
                      title: data.user?.sex,
                      subtitle: 'Sex',
                    ),
                    ProfileTile(
                      title: data.user?.subCity,
                      subtitle: 'Sub City',
                    ),
                    ProfileTile(
                      title: data.user?.wereda,
                      subtitle: 'Wereda',
                    ),
                    ProfileTile(
                      title: 'Logout',
                      icon: Icons.logout,
                      onTap: () async {
                        final result = await ref
                            .read(authNotifierProvider.notifier)
                            .logout();
                        if (result) {
                          Navigator.pushNamedAndRemoveUntil(
                            context,
                            OnboardingScreen1.id,
                            ModalRoute.withName(
                              SplashScreen.id,
                            ),
                          );
                        } else {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text(
                                'Logout Failed! Try again later',
                              ),
                            ),
                          );
                        }
                      },
                    ),
                  ],
                ),
              ),
            ],
          );
        },
        error: (error, st) {
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

class ProfileTile extends StatelessWidget {
  final String? title;
  final String? subtitle;
  final IconData? icon;
  final VoidCallback? onTap;

  const ProfileTile({
    Key? key,
    required this.title,
    this.icon,
    this.onTap,
    this.subtitle,
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
        leading: icon == null
            ? null
            : Icon(
                icon,
                color: icon != null && icon == Icons.logout
                    ? Colors.red
                    : Colors.black,
              ),
        title: Text(
          title ?? '',
          style: TextStyle(
            color: icon != null && icon == Icons.logout
                ? Colors.red
                : Colors.black,
          ),
        ),
        subtitle: isNull(subtitle) ? null : Text(subtitle ?? ''),
        onTap: onTap,
      ),
    );
  }
}
