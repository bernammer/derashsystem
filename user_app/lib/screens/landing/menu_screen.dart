import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:user_app/providers/theme/theme_provider.dart';
import '../profile/profile_screen.dart';
import '../settings/settings_screen.dart';
import 'home_screen.dart';

class MenuScreen extends StatefulWidget {
  static String id = 'MenuScreen';
  const MenuScreen({Key? key}) : super(key: key);

  @override
  _MenuScreenState createState() => _MenuScreenState();
}

class _MenuScreenState extends State<MenuScreen> {
  int currentIndex = 0;

  final List<Widget> _pages = [
    const HomeScreen(),
    // const LeaderBoardScreen(),
    // const ProgressScreen(),
    const ProfileScreen(),
    const SettingsScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        if (currentIndex == 0) {
          SystemNavigator.pop();
          return true;
        } else {
          setState(() {
            currentIndex = 0;
          });
          return false;
        }
      },
      child: Scaffold(
        body: Center(
          child: _pages.elementAt(currentIndex),
        ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: currentIndex,
          elevation: 6.0,
          selectedItemColor: Theme.of(context).custom.searchAppBarColor,
          unselectedItemColor:
              Theme.of(context).custom.searchAppBarColor.withOpacity(0.4),
          selectedIconTheme: IconThemeData(
            color: Theme.of(context).custom.searchAppBarColor,
          ),
          unselectedIconTheme: IconThemeData(
            color: Theme.of(context).custom.searchAppBarColor.withOpacity(0.4),
          ),
          onTap: (newIndex) {
            setState(() {
              currentIndex = newIndex;
            });
          },
          items: const [
            BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
              ),
              label: 'Home',
            ),
            // BottomNavigationBarItem(
            //   icon: Icon(
            //     FontAwesomeIcons.trophy,
            //   ),
            //   label: 'Leaderboard',
            // ),
            // BottomNavigationBarItem(
            //   icon: Icon(
            //     FontAwesomeIcons.stairs,
            //   ),
            //   label: 'Progress',
            // ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.person,
              ),
              label: 'Profile',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                FontAwesomeIcons.gear,
              ),
              label: 'Settings',
            ),
          ],
        ),
      ),
    );
  }
}
