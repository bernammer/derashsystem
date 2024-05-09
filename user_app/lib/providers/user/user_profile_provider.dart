import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../dart_io_client.dart';
import '../../models/user/user_profile.dart';
import '../../static_files.dart';
import '../auth/auth_provider.dart';

final userProfileProvider = FutureProvider<UserProfile>((ref) async {
  final token = await ref.watch(authNotifierProvider.notifier).getLocalToken();

  // Response response = await dio.get(
  //   '/api/user',
  //   options: Options(
  //     headers: {
  //       kAuthorization: token,
  //     },
  //   ),
  // );

  // debugPrint(response.toString());

  // return UserProfile.fromJson(response.data);
  return UserProfile(profile: Profile(), user: User());
});
