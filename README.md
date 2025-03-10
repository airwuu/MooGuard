![image](https://github.com/user-attachments/assets/6043fe6e-e11a-456c-8348-e57f3e5e5960)

# MooGuard

In an effort to revolutionize the labor intensity and animal welfare of livestock agriculture, we were inspired to make MooGuard.

MooGuard streamlines cattle management with automated tracking, health monitoring, and digital tagging, significantly reducing labor costs as herd sizes grow. Instead of labor scaling linearly with the number of cattle, our system maintains a constant workload, freeing up farmers to focus on the well-being of sick and at-risk animals.

By replacing physical ear tagging with digital tagging and automating health monitoring and weight tracking, MooGuard reduces the need for restraining cattle, minimizing stress and disruptions to their well-being.
## So... how does it work?

In order to minimize costs and setup, MooGuard utilizes parallel machine learning models to track cattle on-site and send data to our MongoDB backend. Then, it is displayed on an Auth0-secured online dashboard.

We used a Google Coral Dev Board with a camera to monitor the range from a birds-eye view. With efficient built-in tensor processing units, we can run parallel on-board machine learning models with reduced processing and network costs.

From this, we process the data using Google Gemini for machine learning insights. This outputs the cow physical state, how confident it is in it's prediction, and irregularities in movement.
## Some difficulties we faced...

The board was manufactured in April 2020. It doesn't sound very old, but with how quickly CV has advanced, we had a feewww issues:

  - dealing with outdated hardware AND outdated software AND outdated documentation
  - connection issues with different cables
  - connectivity issues with UCM wifi
  - certificate verification with dead servers
  - setting up a broken camera
  - USB mounting
  - reflashing the drive
  - reinstalling the OS after the system kernel was destroyed...
  - ... and getting burnt by the heatsink!!

But that was only on the hardware side of things. There wasn't much data on cows from the top view, so we trained a model ourselves. We had three of us manually drawing bounding boxes over cows. Our hands were sore, our brains were fried, and our fingers were burnt.

# Notes:
This was a submission to the 32 hours HackMerced X hackathon event. This repo is the frontend user dashboard that is meant to display data analytics from physical hardware running our custom models we imprinted.

Helpful resources:
- https://coral.ai/docs/edgetpu/retrain-classification-ondevice/
- https://coral.ai/docs/dev-board/get-started/
