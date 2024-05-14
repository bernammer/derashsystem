import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:user_app/models/user/user_data.dart' as UserD;

import '../../dart_io_client.dart';
import '../../models/user/user_profile.dart';
import '../../static_files.dart';
import '../auth/auth_provider.dart';

final userProfileProvider = FutureProvider<UserD.UserData>((ref) async {
  final token = await ref.watch(authNotifierProvider.notifier).getLocalToken();
  debugPrint('Token: $token');
  Response response = await dio.get(
    '/api/auth/me',
    options: Options(
      headers: {
        // kAuthorization: token,
        'token': token,
      },
    ),
  );

  debugPrint(response.toString());

  return UserD.UserData.fromJson(response.data);
});
