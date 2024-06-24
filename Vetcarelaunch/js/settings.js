document.addEventListener('DOMContentLoaded', function() {
    // Define the content for Security & Privacy and Help & Support tabs
    const securityPrivacyContent = `
        <h2>Security & Privacy</h2>
        <h3>Data Protection Policy</h3>
        <p><strong>Encryption:</strong> All personal and sensitive data are encrypted using Advanced Encryption Standard (AES) 256-bit encryption both in transit and at rest. This ensures that your information remains confidential and protected from unauthorized access.</p>
        <p><strong>Data Storage:</strong> User data is stored on secure servers hosted by reputable cloud service providers that comply with ISO/IEC 27001:2013 standards. Data is stored in geographically distributed data centers to ensure availability and disaster recovery.</p>

        <h3>Personal Information</h3>
        <p><strong>Collected Information:</strong></p>
        <ul>
            <li><strong>User Information:</strong> Name, email address, phone number, home address.</li>
            <li><strong>Pet Information:</strong> Pet's name, type, breed, age, and health records.</li>
            <li><strong>Payment Information:</strong> Credit/debit card details, billing address.</li>
        </ul>
        <p><strong>Usage:</strong></p>
        <ul>
            <li><strong>Account Management:</strong> To manage user profiles, authenticate users, and provide personalized services.</li>
            <li><strong>Appointment Scheduling:</strong> To book, reschedule, and cancel appointments with vets.</li>
            <li><strong>Health Records:</strong> To maintain and update pet health records and vaccination history.</li>
            <li><strong>Notifications:</strong> To send reminders for upcoming appointments, vaccinations, and follow-up care.</li>
            <li><strong>Payment Processing:</strong> To handle transactions for services and maintain billing history.</li>
        </ul>

        <h3>Data Sharing</h3>
        <p><strong>Third-Party Sharing:</strong> Your data is shared with third parties only under the following circumstances:</p>
        <ul>
            <li><strong>Service Providers:</strong> To facilitate services like payment processing, data storage, and customer support.</li>
            <li><strong>Emergency Services:</strong> In case of a medical emergency involving your pet, relevant information may be shared with emergency veterinary services.</li>
            <li><strong>Legal Compliance:</strong> When required by law or to comply with a legal process.</li>
        </ul>
        <p><strong>Data Anonymization:</strong> Any data shared for research or analytics is anonymized to protect your identity.</p>

        <h3>User Consent</h3>
        <p><strong>Obtaining Consent:</strong> Consent is explicitly obtained during account registration and when collecting sensitive data through clear and concise consent forms.</p>
        <p><strong>Withdrawing Consent:</strong> Users can withdraw their consent at any time by contacting support. Instructions for withdrawing consent are provided in the account settings. Note that withdrawing consent may limit certain functionalities of the app.</p>

        <h3>User Rights</h3>
        <p><strong>Access and Correction:</strong> Users have the right to access their personal data and request corrections if there are inaccuracies. This can be done through the profile settings or by contacting support.</p>
        <p><strong>Data Deletion:</strong> Users can request the deletion of their personal data by emailing support@vetcareapp.com. Certain data may be retained to comply with legal obligations or for legitimate business purposes.</p>
        <p><strong>Data Portability:</strong> Users can request a copy of their data in a structured, commonly used, and machine-readable format by contacting support.</p>

        <h3>Security Measures</h3>
        <p><strong>Technical Measures:</strong> Use of firewalls, secure socket layer (SSL) technology, intrusion detection systems, and regular security audits to protect user data.</p>
        <p><strong>Organizational Measures:</strong> Regular training for staff on data protection, strict access controls, and policies for secure handling of personal data.</p>
        <p><strong>User Responsibilities:</strong> Users are encouraged to use strong, unique passwords, enable two-factor authentication (if available), and regularly update their login credentials.</p>

        <h3>Cookies Policy</h3>
        <p><strong>Usage of Cookies:</strong> We use cookies to:</p>
        <ul>
            <li><strong>Enhance User Experience:</strong> Store user preferences, login sessions, and app settings.</li>
            <li><strong>Analyze Traffic:</strong> Collect anonymous data on app usage to improve performance and user experience.</li>
        </ul>
        <p><strong>Managing Cookies:</strong> Users can manage their cookie preferences through their browser settings. Detailed instructions on how to manage cookies are provided in the app's help section.</p>

        <h3>Privacy Contact Information</h3>
        <p><strong>Privacy Officer Contact:</strong> For any privacy-related inquiries or issues, users can contact our Privacy Officer:</p>
        <ul>
            <li><strong>Email:</strong> privacy@vetcareapp.com</li>
            <li><strong>Phone:</strong> 1-800-123-4567</li>
        </ul>
        <p><strong>Reporting Issues:</strong> Users can report security concerns or data breaches by contacting the Privacy Officer through the methods above.</p>
    `;
    
    const helpSupportContent = `
        <h2>Help & Support</h2>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <p><strong>General Questions:</strong></p>
        <ul>
            <li><strong>How to create an account?</strong>
            <li><strong>Step 1:</strong> Click the Sign-up button for registration.</li>
            <li><strong>Step 2:</strong> Fill-up the form needed for registration.</li>
            <li><strong>Step 3:</strong> Submit the form with the personal information you have provided then wait for a confirmation.</li>
            <li><strong>How to update my profile information?</strong> Instructions on editing personal and pet details.</li>
        </ul>
        <p><strong>Appointments:</strong></p>
        <ul>
            <li><strong>How to schedule an appointment?</strong> Steps for booking an appointment with a vet.</li>
            <li><strong>How to reschedule or cancel an appointment?</strong> Guide on managing appointments.</li>
        </ul>
        <p><strong>Pet Records:</strong></p>
        <ul>
            <li><strong>How to add or update my pet's health records?</strong> Instructions for maintaining pet health records.</li>
            <li><strong>How to view my pet's vaccination history?</strong> Steps for accessing vaccination records.</li>
        </ul>

        <h3>Contact Support</h3>
        <p>If you have any additional questions or need further assistance, please contact our support team:</p>
        <ul>
            <li><strong>Email:</strong> VetCareSupport@gmail.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Operating Hours:</strong> Available on weekdays from 8 AM to 6 PM and Saturday from 9 AM to 4 PM (EST)</li>
        </ul>
    `;

    // Add event listeners to tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tabContent => {
                tabContent.classList.remove('active');
            });

            // Show the selected tab content
            document.getElementById(tabId).classList.add('active');

            // Display dynamic content for Security & Privacy and Help & Support tabs
            if (tabId === 'security') {
                document.getElementById('security').innerHTML = securityPrivacyContent;
            } else if (tabId === 'support') {
                document.getElementById('support').innerHTML = helpSupportContent;
            }
        });
    });
});
