import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../dart_io_client.dart';
import '../../models/payment/chapa.dart';
import '../../models/vehicle/vehicle.dart';
import '../../static_files.dart';
import '../auth/auth_provider.dart';

final vehicleProvider = FutureProviderFamily<Vehicle, String>((ref, userId) async {
  final token = await ref.watch(authNotifierProvider.notifier).getLocalToken();
  final response = await dio.post(
    '/api/users/$userId',
    options: Options(
      headers: {
        kAuthorization: token,
      },
    ),
  );
  return Vehicle.fromJson(response.data);
});
