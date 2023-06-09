# DocOps

DocOps is a web application that simplifies the process of finding and connecting with doctors for patients. It provides a convenient platform for patients to search for doctors, schedule appointments, and receive prescriptions, all in one place. Built with ReactJS and powered by Firebase, DocOps offers a user-friendly interface and secure data management.

Check out the deployed application [here](https://doc-ops.vercel.app/).

## Features

1. **Patient and Doctor Registration**: Patients and doctors can easily register on DocOps, creating their accounts with relevant information.

2. **Doctor Search**: Patients can search for doctors based on their specialization or field of expertise. This feature allows patients to find the most suitable doctor for their specific healthcare needs.

3. **Location-based Search**: Patients have the ability to search for doctors near their area, making it easier to find healthcare professionals within their locality.

4. **Live Chat**: DocOps enables patients to initiate a live chat with the doctor's clinic. This feature allows patients to communicate directly with the clinic staff, facilitating appointment scheduling and addressing any queries they may have.

5. **Online Appointment Scheduling**: Through the live chat feature, patients can seamlessly set up appointments online, eliminating the need for physical visits or phone calls. This convenience saves time and streamlines the appointment booking process.

6. **Digital Prescriptions**: Doctors can provide prescriptions directly through DocOps. This feature ensures that prescriptions are securely stored online, allowing patients to access them whenever needed. Digital prescriptions reduce the risk of losing paper prescriptions and facilitate easy retrieval.

## Advantages of DocOps

1. **Convenience**: DocOps simplifies the entire process of finding doctors, scheduling appointments, and receiving prescriptions. Patients no longer need to spend extensive time researching doctors or making numerous phone calls to clinics. Everything can be done conveniently within the application.

2. **Time-saving**: By offering a location-based search, DocOps helps patients find nearby doctors efficiently. Online appointment scheduling eliminates the need to visit clinics physically, saving valuable time for both patients and doctors.

3. **Improved Accessibility**: DocOps makes healthcare more accessible by providing an online platform. Patients can access the application from anywhere with an internet connection, enabling them to seek medical assistance at their convenience.

4. **Efficient Communication**: The live chat feature enables quick and direct communication between patients and clinic staff. This feature helps patients clarify doubts, receive prompt responses, and effectively manage their healthcare appointments.

5. **Secure and Centralized Data**: DocOps leverages Firebase for secure data storage and management. Patient and doctor information, including prescriptions, are stored online, ensuring data integrity and reducing the risk of loss or misplacement.

6. **Streamlined Healthcare Experience**: By integrating various healthcare-related tasks into a single application, DocOps offers a seamless experience for both patients and doctors. The platform's intuitive design and user-friendly interface enhance the overall healthcare journey.

## Getting Started

To get started with DocOps, follow these steps:

1. Clone the repository: `git clone https://github.com/Hiperultimate/doc-ops.git`
2. Navigate to the project directory: `cd doc-ops\client`
3. Install dependencies: `npm install`
4. Configure Firebase:
   - Create a Firebase project and enable the necessary services (Firebase Authentication, Firestore, etc.).
   - Set up the Firebase configuration in the project.
5. Populate the `.env.local` file with the required environment variables. (Look at `env.local.example` for help) 
5. Start the application: `npm start`
6. Access DocOps in your browser at `http://localhost:3000`

Note: Make sure to update the Firebase configuration details in the application code.
