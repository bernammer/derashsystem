import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../dart_io_client.dart';
import '../../models/payment/chapa.dart';
import '../../static_files.dart';
import '../auth/auth_provider.dart';

final chapaPaymentLinkProvider = FutureProvider<Chapa>((ref) async {
  final token = await ref.watch(authNotifierProvider.notifier).getLocalToken();
  final response = await dio.post(
    '/api/pay/chapa',
    options: Options(
      headers: {
        kAuthorization: token,
      },
    ),
  );
  return Chapa.fromJson(response.data);
});
