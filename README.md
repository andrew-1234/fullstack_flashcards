# flashcards

- typescript app with react and node backend w/ sqlite3 db
  
## Notes

Backend Server:

* The backend server listens on <http://localhost:3001>.
* It provides endpoints like /api/flashcards to handle GET and POST requests.

Fetching Data in the Frontend:

* In App.tsx, the useEffect hook runs when the component mounts.
* fetch('<http://localhost:3001/api/flashcards>') makes a GET request to the backend.
* The response is converted to JSON and used to update the flashcards state.

Adding Data in the Frontend:

* The `addFlashcard` function in App.tsx makes a POST request to the backend.
* It sends the new flashcard data in the request body.
* The backend responds with the created flashcard, which is then added to the state.
