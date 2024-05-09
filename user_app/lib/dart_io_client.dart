import 'package:dio/dio.dart';

// const baseUrl = 'https://fetena.memokeria.com';
// const hostUrl = 'fetena.memokeria.com';

// const baseUrl = 'http://192.168.1.15:8000';
// const hostUrl = '192.168.1.15:8000';

const baseUrl = 'https://seven-camels-lie-196-190-62-76.loca.lt';
const hostUrl = 'seven-camels-lie-196-190-62-76.loca.lt';

const multipart = 'multipart/form-data';
const json = 'application/json';
const urlEncoded = 'application/x-www-form-urlencoded';

Dio dio = Dio(
  BaseOptions(
    baseUrl: baseUrl,
    connectTimeout: 10000,
    receiveTimeout: 15000,
    sendTimeout: 20000,
    headers: {
      'Accept': 'application/json',
      'host': hostUrl,
    },
  ),
);
