import 'package:flutter/material.dart';
import 'report_screen.dart';
import 'engage_screen.dart';
import 'ecochat_screen.dart';
import 'explore_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Section
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Image.asset(
                    'assets/icon.jpg', // Replace with your logo path
                    height: 40,
                  ),
                  const SizedBox(width: 10),
                  Text(
                    'EcoTrack',
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[800],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                'Nurturing a Sustainable Future.',
                style: TextStyle(
                  fontSize: 18,
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: 32),

              // Grid of Feature Cards
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  crossAxisSpacing: 16.0,
                  mainAxisSpacing: 16.0,
                  children: [
                    _buildFeatureCard(
                      context,
                      title: 'Report Issue',
                      iconPath: 'assets/report.png',
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => ReportScreen()),
                      ),
                    ),
                    _buildFeatureCard(
                      context,
                      title: 'Engage Community',
                      iconPath: 'assets/community.jpg',
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => EngageScreen()),
                      ),
                    ),
                    _buildFeatureCard(
                      context,
                      title: 'EcoChat',
                      iconPath: 'assets/ecochat_icon.png',
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => EcoChatScreen()),
                      ),
                    ),
                    _buildFeatureCard(
                      context,
                      title: 'Explore',
                      iconPath: 'assets/explore_icon.png',
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => ExploreScreen()),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),

      // Bottom Navigation Bar
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.green[700],
        unselectedItemColor: Colors.grey,
        currentIndex: 2, // Set Home as the active tab
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.report),
            label: 'Report',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.group),
            label: 'Engage',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat),
            label: 'EcoChat',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.explore),
            label: 'Explore',
          ),
        ],
      ),
    );
  }

  // Feature Card Builder
  Widget _buildFeatureCard(BuildContext context,
      {required String title, required String iconPath, required VoidCallback onTap}) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16.0),
        ),
        elevation: 6,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                iconPath,
                height: 60,
                width: 60,
                fit: BoxFit.cover,
              ),
              const SizedBox(height: 16),
              Text(
                title,
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.green[800],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
