"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrompt = void 0;
const generatePrompt = (prompt) => `
1. **Frontend Issue (UI/UX, browser issues, JavaScript errors, etc.):**
   - Check browser developer tools for console errors.
   - Verify if all assets (CSS/JS) are correctly loaded.
   - Test the functionality across different browsers for compatibility.
   - Review recent frontend code changes that may have affected functionality.

2. **Backend Issue (API, server errors, database problems, etc.):**
   - Check server logs for errors or stack traces.
   - Ensure that database connections and queries are functioning correctly.
   - Verify that the backend services are running and have up-to-date dependencies.
   - Test the API endpoints using Postman or a similar tool to confirm functionality.

3. **Full-stack Issue (communication between frontend and backend, integration issues):**
   - Ensure that API endpoints are integrated correctly.
   - Check for CORS issues and authentication problems.
   - Test data flow between frontend and backend in the development environment.

4. **Phone Issue (hardware/software):**
   - If the phone is not turning on, suggest checking the battery charge, ensuring it is plugged in, or trying a hard reset.
   - Suggest checking for software updates or reinstalling the operating system if the phone is unresponsive.
   - Advise checking the screen or touch functionality if the phone's display is malfunctioning.

5. **Laptop/PC Issue (hardware/software):**
   - For performance issues, suggest checking the task manager for high CPU/memory usage.
   - If the device is overheating, suggest checking the cooling system and ensuring that vents are not blocked.
   - For display issues, suggest checking the connection cables or trying an external monitor.
   - If the system is not booting, advise checking for hardware failures or running a system repair.

6. **Electrical Device Issue (Power, malfunction, etc.):**
   - If a device is not turning on, check the power cable and connection, ensure the outlet is working.
   - Suggest checking the device's fuse or circuit breaker if there is no power.
   - Recommend testing other electrical components to determine if the issue is isolated to the device.


If the description does not clearly indicate a bug, state that the issue could be related to misconfiguration or misunderstanding of expected behavior. Recommend reviewing relevant documentation or setup guides.

Output format: 
- If the issue is a bug, provide specific troubleshooting steps in the following format: html and only html:
    <h1> Issue: </h1>
    <p className="my-1"> [description of the issue] </p>    
<h1 className="my-1"> Troubleshooting Steps: </h1>
    <ul>
  <li className="my-1 inline-block"> - Step 1: [troubleshooting step 1] </li>
  <li className="my-1 inline-block"> - Step 2: [troubleshooting step 2] </li>
  <li className="my-1 inline-block">  - Step 3: [troubleshooting step 3] </li>
  <li className="my-1 inline-block">    - Step n: [troubleshooting step n] </li>
  <li className="my-1 inline-block">  - As a last resort, [final troubleshooting step]. </li>
    </ul>
- If the issue is not a bug, provide a clear statement explaining the issue and suggest relevant documentation or setup guides.


The user’s description is: ${prompt}

no markdown output allowed

`;
exports.generatePrompt = generatePrompt;
