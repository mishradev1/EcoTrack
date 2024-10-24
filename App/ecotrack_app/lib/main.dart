import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(EcoTrackApp());
}

class EcoTrackApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'EcoTrack',
      theme: ThemeData(primarySwatch: Colors.green),
      home: SplashScreen(), // Start with Splash Screen
    );
  }
}
