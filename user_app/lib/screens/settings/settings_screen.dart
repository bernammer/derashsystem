import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:user_app/providers/theme/theme_provider.dart';

import '../about/about_screen.dart';

class SettingsScreen extends StatefulWidget {
  static String id = 'SettingsScreen';

  const SettingsScreen({Key? key}) : super(key: key);

  @override
  _SettingsScreenState createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    bool soundOn = true;
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: width,
        padding: const EdgeInsets.symmetric(
          horizontal: 12,
          vertical: 8,
        ),
        decoration: BoxDecoration(
          color: Theme.of(context).custom.bgColor,
        ),
        child: SafeArea(
          top: true,
          child: CustomScrollView(
            slivers: [
              SliverList(
                delegate: SliverChildListDelegate.fixed(
                  [
                    SettingsListTile(
                      width: width,
                      label: 'Sound',
                      action: Switch(
                        value: soundOn,
                        onChanged: (newValue) {
                          setState(() {
                            soundOn = !soundOn;
                          });
                        },
                      ),
                      icon: Icons.speaker,
                    ),
                    SettingsListTile(
                      width: width,
                      label: 'Vibration',
                      action: Switch(
                        value: soundOn,
                        onChanged: (newValue) {
                          setState(() {
                            soundOn = !soundOn;
                          });
                        },
                      ),
                      icon: Icons.speaker,
                    ),
                    SettingsListTile(
                      width: width,
                      label: 'Push Notification',
                      action: Switch(
                        value: soundOn,
                        onChanged: (newValue) {
                          setState(() {
                            soundOn = !soundOn;
                          });
                        },
                      ),
                      icon: Icons.speaker,
                    ),
                    SettingsListTile(
                      width: width,
                      label: 'About',
                      // action: Switch(
                      //   value: true,
                      //   onChanged: (newValue) {
                      //     if (kDebugMode) {
                      //       print(newValue);
                      //     }
                      //   },
                      // ),
                      icon: Icons.question_mark,
                      onTap: () {
                        Navigator.pushNamed(
                          context,
                          AboutScreen.id,
                        );
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class SettingsListTile extends StatelessWidget {
  const SettingsListTile({
    Key? key,
    required this.width,
    required this.icon,
    required this.label,
    this.action,
    this.onTap,
  }) : super(key: key);

  final double width;
  final IconData icon;
  final String label;
  final Widget? action;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: width * 0.8,
        height: 50,
        padding: const EdgeInsets.symmetric(
          horizontal: 8,
        ),
        margin: const EdgeInsets.only(bottom: 10),
        decoration: BoxDecoration(
          color: Theme.of(context).custom.searchAppBarColor,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              color: Colors.white,
            ),
            const SizedBox(
              width: 12,
            ),
            Text(
              label,
              style: const TextStyle(
                color: Colors.white,
              ),
            ),
            const Expanded(
              child: SizedBox(),
            ),
            action ?? const SizedBox(),
          ],
        ),
      ),
    );
  }
}
