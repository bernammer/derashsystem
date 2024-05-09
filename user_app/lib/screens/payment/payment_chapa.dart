import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:webview_flutter/webview_flutter.dart';

import '../../helper_widgets/custom_error_widget.dart';
import '../../providers/payment/chapa_payment_link_provider.dart';
import '../components/circular_loading.dart';

class PaymentChapa extends ConsumerStatefulWidget {
  static String id = 'PaymentChapa';
  const PaymentChapa({
    Key? key,
    this.cookieManager,
  }) : super(key: key);

  final CookieManager? cookieManager;

  @override
  _PaymentChapaState createState() => _PaymentChapaState();
}

class _PaymentChapaState extends ConsumerState<PaymentChapa> {
  final Completer<WebViewController> _controller =
      Completer<WebViewController>();

  @override
  void initState() {
    super.initState();
    super.initState();
    if (Platform.isAndroid) {
      WebView.platform = SurfaceAndroidWebView();
    }
  }

  exitPaymentPage(String message) {
    debugPrint(message);
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    final paymentLink = ref.watch(chapaPaymentLinkProvider);
    return Scaffold(
      body: SafeArea(
        top: true,
        child: Stack(
          children: [
            paymentLink.map(
              data: (data) {
                return WebView(
                  initialUrl: data.value.data!.checkoutUrl,
                  javascriptMode: JavascriptMode.unrestricted,
                  onWebViewCreated: (WebViewController webViewController) {
                    _controller.complete(webViewController);
                  },
                  javascriptChannels: <JavascriptChannel>{
                    _toasterJavascriptChannel(context),
                  },
                  navigationDelegate: (NavigationRequest request) async {
                    if (request.url.toString() == 'https://chapa.co') {
                      exitPaymentPage('Payment Successful');
                    }
                    if (request.url
                        .toString()
                        .contains('checkout/payment-receipt/')) {
                      exitPaymentPage('Payment Successful');
                    }
                    print('allowing navigation to $request');
                    return NavigationDecision.navigate;
                  },
                  gestureNavigationEnabled: true,
                );
              },
              error: (error) {
                debugPrint(error.error.toString());
                return CustomErrorWidget(
                  onTap: () {
                    ref.refresh(chapaPaymentLinkProvider);
                  },
                );
              },
              loading: (_) {
                return const CircularLoading();
              },
            ),
            IconButton(
              icon: const Icon(
                Icons.close,
                color: Colors.black,
              ),
              onPressed: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }

  JavascriptChannel _toasterJavascriptChannel(BuildContext context) {
    return JavascriptChannel(
      name: 'Toaster',
      onMessageReceived: (JavascriptMessage message) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(message.message),
          ),
        );
      },
    );
  }
}
