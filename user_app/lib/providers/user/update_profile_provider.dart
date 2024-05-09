import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../dart_io_client.dart';
import '../../models/user/user_profile.dart';
import '../../static_files.dart';
import '../auth/auth_provider.dart';

final profileUpdateProvider =
    StateNotifierProvider<ProfileUpdateNotifier, AsyncValue<UserProfile>>(
        (ref) {
  return ProfileUpdateNotifier(ref: ref);
});

class ProfileUpdateNotifier extends StateNotifier<AsyncValue<UserProfile>> {
  ProfileUpdateNotifier({required this.ref})
      : super(const AsyncValue.loading());
  final Ref ref;

  updateProfile(UpdateProfile profile) async {
    final token = ref.watch(authNotifierProvider.notifier).getLocalToken();

    try {
      Response response = await dio.post(
        '/api/user',
        data: FormData.fromMap({
          'name': profile.name,
          'phone': profile.phone,
          'field': profile.field,
          'email': profile.email,
          'bio': profile.bio,
          'school': profile.school,
          'town': profile.city,
          'region': profile.region,
          'grade_id': profile.grade,
          '_method': 'PUT',
        }),
        options: Options(
          headers: {
            kAuthorization: await token,
            'Content-Type': 'multipart/form-data',
          },
        ),
      );
      state = AsyncValue.data(UserProfile.fromJson(response.data));
      return AsyncValue.data(UserProfile.fromJson(response.data));
    } on DioError catch (e) {
      state = AsyncValue.error(e);
      return AsyncValue.error(e);
    }
  }
}

final profileStateProvider = StateProvider<UpdateProfile>((ref) {
  return UpdateProfile();
});

class UpdateProfile {
  String? name;
  String? email;
  String? phone;
  String? field;
  String? bio;
  String? school;
  String? city;
  String? region;
  String? grade;

  UpdateProfile({
    this.name,
    this.bio,
    this.school,
    this.city,
    this.region,
    this.phone,
    this.grade,
    this.email,
    this.field,
  });

  UpdateProfile copyWith(
      {school, name, bio, city, region, phone, grade, email, field}) {
    return UpdateProfile(
      school: school ?? this.school,
      name: name ?? this.name,
      bio: bio ?? this.bio,
      city: city ?? this.city,
      region: region ?? this.region,
      phone: phone ?? this.phone,
      grade: grade ?? this.grade,
      email: email ?? this.email,
      field: field ?? this.field,
    );
  }
}
