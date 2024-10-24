import 'package:flutter/material.dart';

class ReportScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Report'),
        backgroundColor: Colors.green[700],
      ),
      body: Center(
        child: Text(
          'Report Screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
