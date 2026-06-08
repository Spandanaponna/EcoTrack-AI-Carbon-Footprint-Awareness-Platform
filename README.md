# EcoTrack AI – Carbon Footprint Awareness Platform 🌱

## Overview

EcoTrack AI is a web-based Carbon Footprint Awareness Platform designed to help users understand the environmental impact of their daily activities. The application calculates an estimated carbon footprint based on transportation habits, electricity consumption, and dietary preferences, then provides personalized recommendations for reducing emissions.

The goal of this project is to promote environmental awareness and encourage sustainable lifestyle choices through an interactive and user-friendly experience.

---

## Challenge Vertical

**Sustainability & Environmental Awareness**

This solution focuses on helping individuals make informed decisions that reduce their carbon footprint and contribute to a greener future.

---

## Features

### Carbon Footprint Calculator

* Calculates estimated monthly carbon emissions.
* Considers:

  * Daily travel distance
  * Transportation mode
  * Monthly electricity consumption
  * Diet type

### Impact Assessment

* Generates a Carbon Score.
* Classifies users into:

  * Low Impact
  * Moderate Impact
  * High Impact

### Personalized Recommendations

* Provides sustainability tips based on the user's impact level.
* Encourages practical eco-friendly habits.

### Emission Breakdown

* Displays emissions from:

  * Travel
  * Electricity
  * Food/Diet

### Progress Visualization

* Visual carbon score meter.
* Easy-to-understand impact representation.

### Calculation History

* Stores previous calculations using Local Storage.
* Displays recent footprint calculations.
* Allows users to clear saved history.

### Accessibility Features

* Semantic HTML structure.
* Proper labels and ARIA attributes.
* Keyboard-friendly navigation.
* Responsive design for multiple devices.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Browser Local Storage

---

## How the Solution Works

1. User enters lifestyle information.
2. The system validates the inputs.
3. Carbon emissions are estimated using predefined emission factors.
4. A Carbon Score is calculated.
5. The user receives:

   * Impact classification
   * Emission breakdown
   * Personalized recommendations
6. Results are stored locally for future reference.

---

## Project Structure

```text
EcoTrack-AI/
│
├── index.html
├── style.css
├── script.js
├── test.js
└── README.md
```

---

## Testing

A dedicated test file (`test.js`) is included to validate carbon score calculations using JavaScript assertions.

Test coverage includes:

* Carbon score calculations
* Emission estimation validation
* Basic calculation logic verification

---

## Data Persistence

The application uses Browser Local Storage to store:

* Latest carbon score
* Emission estimates
* Previous calculation history

This allows users to revisit previous results even after refreshing the page.

---

## Assumptions

* Emission factors are simplified for educational and awareness purposes.
* Values are intended to provide estimates rather than exact carbon measurements.
* User data remains stored locally within the browser and is not transmitted to external servers.

---

## Security Considerations

* No user authentication required.
* No personal data collection.
* No external database connections.
* Input validation prevents invalid calculations.

---

## Accessibility

The application follows accessibility best practices by:

* Using semantic HTML elements.
* Providing descriptive labels.
* Supporting keyboard navigation.
* Including ARIA attributes where appropriate.
* Maintaining responsive layouts across devices.

---

## Future Improvements

* AI-powered sustainability recommendations.
* Carbon reduction goal tracking.
* Weekly and monthly analytics dashboard.
* Interactive charts and visualizations.
* Renewable energy impact estimation.
* User accounts and cloud synchronization.

---

## Author

Developed as part of the Google Prompt Wars Virtual Challenge to promote awareness about sustainable living and carbon footprint reduction.

Together, small actions can create a significant positive impact on our planet. 🌍
