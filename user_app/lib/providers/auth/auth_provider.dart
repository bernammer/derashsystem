import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../../dart_io_client.dart';
import '../../models/auth/auth.dart';
import '../../static_files.dart';

final authNotifierProvider =
    StateNotifierProvider<AuthNotifier, AsyncValue<Auth>>((ref) {
  return AuthNotifier();
});

class AuthNotifier extends StateNotifier<AsyncValue<Auth>> {
  AuthNotifier() : super(AsyncValue<Auth>.data(Auth()));

  Auth? auth;
  String? token;

  FlutterSecureStorage storage = const FlutterSecureStorage();

  login({required String email, required String password}) async {
    state = const AsyncValue<Auth>.loading();

    Response response = Response(requestOptions: RequestOptions(path: ''));

    try {
      response = await dio.post(
        '/api/auth/login',
        data: FormData.fromMap(
          {
            'email': email,
            'password': password,
          },
        ),
        options: Options(
          contentType: multipart,
          headers: {
            'host': hostUrl,
          },
        ),
      );

      debugPrint(response.statusMessage);
      auth = Auth.fromJson(response.data);

      await storage.write(key: kToken, value: auth!.token);

      state = AsyncValue.data(auth!);
    } on DioError catch (e) {
      state = AsyncValue.error(e);
      debugPrint(e.message);
    }
  }

  Future<bool> register({
    required String name,
    required String email,
    required String password,
    required String phone,
    required String field,
  }) async {
    state = const AsyncValue<Auth>.loading();

    Response response = Response(requestOptions: RequestOptions(path: ''));

    try {
      response = await dio.post(
        '/api/auth/register',
        data: FormData.fromMap(
          {
            'email': email,
            'password': password,
            'password_confirmation': password,
            'phone': phone,
            'name': name,
            'field': field
          },
        ),
        options: Options(
          contentType: multipart,
          headers: {
            'host': hostUrl,
          },
        ),
      );

      auth = Auth.fromJson(response.data);

      await storage.write(key: kToken, value: auth!.token);

      state = AsyncValue.data(auth!);

      debugPrint('register ${response}');
      return true;
    } on DioError catch (e) {
      state = AsyncValue.error(e);
      debugPrint(e.toString());
      return false;
    }
  }

  Future<bool> logout() async {
    try {
      auth = null;
      state = AsyncValue<Auth>.data(Auth());
      await storage.delete(key: kToken);
      return true;
    } catch (e) {
      return false;
    }
  }

  Future<bool> isAuthenticated() async {
    if (auth != null) {
      return true;
    } else if (await storage.read(key: kToken) != null) {
      return true;
    }
    return false;
  }

  Future<String?> getLocalToken() async {
    if (token != null) {
      return 'Bearer ${token!}';
    } else {
      token = await storage.read(key: kToken);
      if (token != null) {
        return 'Bearer ${token!}';
      }
    }
    return null;
  }

  // User? getUser() {
  //   if (state.value!.user == null) {
  //     return null;
  //   }
  //   return state.value!.user;
  // }
}
