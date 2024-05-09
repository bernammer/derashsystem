import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:validators/validators.dart';

import '../../helper_widgets/custom_error_widget.dart';
import '../../providers/vecle/vehiclesProvider.dart';
import '../../static_files.dart';
import '../components/circular_loading.dart';
import 'add_vehicle_screen.dart';

class VehicleScreen extends ConsumerStatefulWidget {
  static String id = 'VehicleScreen';

  const VehicleScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _VehicleScreenState createState() => _VehicleScreenState();
}

class _VehicleScreenState extends ConsumerState<VehicleScreen> {
  @override
  void initState() {
    super.initState();
  }

  hideModal(BuildContext ctx) {
    Navigator.pop(ctx);
  }

  showSnackBar(String message, BuildContext ctx) {
    ScaffoldMessenger.of(ctx).showSnackBar(
      SnackBar(
        content: Text(message),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // final exams = ref.watch(examsProvider(args.subject));
    final vehicles = ref.watch(vehicleProvider);

    return Scaffold(
      backgroundColor: kScaffoldBackgroundColor,
      appBar: AppBar(
        leading: const BackButton(
          color: Colors.white,
        ),
        title: const Text(
          'Your Vehicles',
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        backgroundColor: kPrimaryBlueColor,
      ),
      body: vehicles.when(
        error: (data, st) {
          return Stack(
            children: [
              SingleChildScrollView(
                child: SizedBox(
                  height: MediaQuery.of(context).size.height,
                  width: MediaQuery.of(context).size.width,
                  child: Column(
                    mainAxisAlignment: data != null
                        ? MainAxisAlignment.start
                        : MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      VehicleListTile(
                        // key: Key(exams![i].id.toString()),
                        title: '3-AA-123456',
                        subtitle: 'Hatchback',
                        trailingIcon: true
                            ? const Icon(
                                Icons.check,
                                color: Colors.green,
                              )
                            : const Icon(
                                Icons.lock,
                                color: Colors.black,
                              ),
                        onTap: () {},
                      ),
                      Container(
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
                          border: Border.all(
                            color: Colors.green,
                            width: 2,
                          )
                        ),
                        child: ListTile(
                          title: const Text(
                            'Add',
                            style: TextStyle(
                              color:  Colors.black,
                            ),
                          ),
                          subtitle:  const Text('Add New Vehicle'),
                          onTap: (){
                            Navigator.pushNamed(context, AddVehicleScreen.id);
                          },
                          trailing: const Icon(Icons.add),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ],
          );
        },
        data: (error) {
          debugPrint(error.toString());
          return CustomErrorWidget(
            onTap: () {
              // ref.refresh(examsProvider(args.subject));
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

class VehicleListTile extends StatelessWidget {
  final String title;
  final String? subtitle;
  final IconData? icon;
  final Icon? trailingIcon;
  final VoidCallback? onTap;

  const VehicleListTile({
    super.key,
    required this.title,
    this.icon,
    this.onTap,
    this.subtitle,
    this.trailingIcon,
  });

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
          title,
          style: TextStyle(
            color: icon != null && icon == Icons.logout
                ? Colors.red
                : Colors.black,
          ),
        ),
        subtitle: isNull(subtitle) ? null : Text(subtitle ?? ''),
        onTap: onTap,
        trailing: trailingIcon,
      ),
    );
  }
}

class ExamSubjectArgument {
  final String subject;

  ExamSubjectArgument({required this.subject});
}
