import 'package:flutter/material.dart';

class EcoChatScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('EcoChat'),
        backgroundColor: Colors.green[700],
      ),
      body: Center(
        child: Text(
          'EcoChat Screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
