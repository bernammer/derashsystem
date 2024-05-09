import 'package:flutter/material.dart';

import '../../static_files.dart';
import '../auth/components/text_input.dart';

class AddVehicleScreen extends StatefulWidget {
  static String id = 'AddVehicleScreen';

  const AddVehicleScreen({super.key});

  @override
  State<AddVehicleScreen> createState() => _AddVehicleScreenState();
}

class _AddVehicleScreenState extends State<AddVehicleScreen> {
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    return Scaffold(
      appBar: AppBar(
        leading: const BackButton(
          color: Colors.white,
        ),
        title: const Text(
          'Add Vehicle',
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        backgroundColor: kPrimaryBlueColor,
      ),
      body: Form(
        autovalidateMode: AutovalidateMode.onUserInteraction,
        child: ListView(
          children: [
            CustomTextInput(
              width: width,
              label: 'Plate',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Vehicle Type',
              context: context,
              hint: 'Hatchback',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Build in Country',
              context: context,
              hint: '--',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Build in Year',
              context: context,
              hint: '--',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Chassis Number',
              context: context,
              hint: '0123456789',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Motor Number',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Body Type',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Color',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Fuel Type',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Horse Power',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Weight',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Single Weight',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Capacity',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'CC',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Cylinder Quantity',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Allowed Work Type',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
            ),
            CustomTextInput(
              width: width,
              label: 'Axel Quantity',
              context: context,
              hint: '',
              inputIcon: Icons.car_rental,
              inputType: TextInputType.text,
              onChanged: (val) {
                // registerCredentials.firstName = val;
                return null;
              },
              validator: (value) {
                // if (isNull(value)) {
                //   return 'Can\'t accept empty name';
                // }
                return null;
              },
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
                  // Navigator.pushNamed(
                  //   context,
                  //   MenuScreen.id,
                  // );
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
                            child: CircularProgressIndicator(
                              color: Colors.white,
                            ),
                          )
                        : const Text(
                            'Add Vehicle',
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
