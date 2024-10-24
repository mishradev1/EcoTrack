import 'package:flutter/material.dart';

class ExploreScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Explore'),
        backgroundColor: Colors.green[700],
      ),
      body: Center(
        child: Text(
          'Explore Screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
