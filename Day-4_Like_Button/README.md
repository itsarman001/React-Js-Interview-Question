# Like Button Feature (Day-4)

## Description
This feature implements a like button that interacts with an API endpoint. The API has a 50% chance to succeed or fail. The following functionalities are included:

- **Like/Unlike Toggle:** The button toggles between "Liked" and "Like" based on the API response.
- **Error Handling:** Displays an error message if the API call fails.
- **Button State Management:** The button is disabled during the API call to prevent multiple requests.
- **Fetching Indicator:** A spinner icon is displayed while the API call is in progress; otherwise, a heart icon is shown.

## Usage
1. Click the button to send a like/unlike request.
2. The button state and label will update based on the API response:
   - Success: Toggles the liked state.
   - Failure: Displays an error message.
3. While the API call is in progress, a spinner icon replaces the heart icon, and the button is disabled.

## Improvements for Future:
- Add a retry mechanism for failed requests.
- Introduce a limit on API calls or implement rate-limiting logic.
- Enhance UI/UX to provide more detailed feedback to the user.