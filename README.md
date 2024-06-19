1. Requirements and Features

	•	Livestreaming: Ability to start a livestream using the computer camera.
	•	Recording: Save livestreams for future playback.
	•	Playback: Users can select and play previous recordings.
	•	Protected Dashboard: Admin access to control livestreaming and manage recordings.


2. Architecture and Components

	•	Frontend: Next.js with TypeScript for the UI
	•	Pages:
	•	Home: Display the current livestream or recent recordings.
	•	Dashboard: Admin panel to manage livestreams and recordings.
	•	Components:
	•	VideoPlayer: Component to handle live and recorded video playback.
	•	StreamControls: Dashboard controls for starting/stopping streams.
	•	RecordingList: List of previous recordings with playback options.
	•	Backend: API to handle streaming, recording, and data management
	•	Services:
	•	Streaming Service: Integrate with Livepeer for handling livestreams.
	•	Recording Service: Manage saving and fetching recorded streams.
	•	Authentication Service: Protect dashboard access.

3. Tech Stack and Dependencies

	•	Next.js: Framework for the frontend.
	•	TypeScript: Type safety.
	•	Livepeer: For livestreaming and recording.
	•	Auth0 / NextAuth.js: For authentication.
	•	MongoDB / PostgreSQL: Database for storing recording metadata.
	•	Tailwind CSS: For styling (optional, based on preference).

4. User Flow

	1.	Admin Login:
	•	Admin logs into the dashboard.
	2.	Starting a Livestream:
	•	Admin starts a livestream using the camera.
	•	Stream is broadcasted using Livepeer.
	3.	Stopping and Saving a Livestream:
	•	Admin stops the livestream.
	•	Stream is saved to the server and metadata stored in the database.
	4.	User Viewing:
	•	Users visit the homepage.
	•	If a livestream is active, they see the live broadcast.
	•	If no livestream is active, they can browse and play previous recordings.



### using kinde for auth