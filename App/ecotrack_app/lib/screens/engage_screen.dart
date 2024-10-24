import 'package:flutter/material.dart';

class EngageScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Engage'),
        backgroundColor: Colors.green[700],
      ),
      body: Center(
        child: Text(
          'Engage Screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
