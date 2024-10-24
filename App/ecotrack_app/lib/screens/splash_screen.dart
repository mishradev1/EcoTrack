import 'package:ecotrack/screens/signup_screen.dart';
import 'package:flutter/material.dart';
import 'package:ecotrack/screens/home_screen.dart'; // Import the HomeScreen

class SplashScreen extends StatelessWidget {
  final List<Map<String, String>> cards = [
    {
      'title': 'Report Issues',
      'description': 'Quickly report environmental problems in your area.',
      'image': 'assets/report.png',
    },
    {
      'title': 'Engage',
      'description': 'View and engage with issues reported by others.',
      'image': 'assets/community.jpeg',
    },
    {
      'title': 'EcoChat',
      'description': 'Chat with community members to find solutions.',
      'image': 'assets/volunteer.png',
    },
    {
      'title': 'Explore',
      'description': 'Discover events and activities near you.',
      'image': 'assets/icon.jpg',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Welcome Text and Tagline
                  Text(
                    'Welcome to EcoTrack',
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[800],
                    ),
                  ),
                  const SizedBox(height: 8.0),
                  Text(
                    'Making the world greener, one issue at a time.',
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.grey[700],
                    ),
                  ),
                  const SizedBox(height: 20.0), // Space between tagline and cards

                  // Expanded ListView for Cards
                  Expanded(
                    child: ListView.builder(
                      itemCount: cards.length,
                      itemBuilder: (context, index) {
                        return CardWidget(
                          title: cards[index]['title']!,
                          description: cards[index]['description']!,
                          image: cards[index]['image']!,
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),

            // Next Button at the bottom-right
            Positioned(
              bottom: 30,
              right: 30,
              child: ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SignUpScreen()),
                );
              },


                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green[700], // Button color
                  padding: const EdgeInsets.symmetric(
                      horizontal: 24.0, vertical: 12.0),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(25.0),
                  ),
                ),
                child: Text(
                  'Next',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// Card Widget to reuse for all 4 cards
class CardWidget extends StatelessWidget {
  final String title;
  final String description;
  final String image;

  const CardWidget({
    required this.title,
    required this.description,
    required this.image,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: const EdgeInsets.symmetric(vertical: 10.0),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15.0),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          children: [
            Image.asset(
              image,
              width: 80,
              height: 80,
              fit: BoxFit.cover,
            ),
            const SizedBox(width: 16.0),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[800],
                    ),
                  ),
                  const SizedBox(height: 8.0),
                  Text(
                    description,
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey[800],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
