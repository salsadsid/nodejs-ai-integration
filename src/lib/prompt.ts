export const generatePrompt = (prompt: string) => `

If the description does not clearly indicate a bug, state that the issue could be related to misconfiguration or misunderstanding of expected behavior. Recommend reviewing relevant documentation or setup guides.

Output format: 
- If it is a bug, provide specific troubleshooting steps in the following format: html and only html:
    <h1> Bug: </h1>
    <p className="my-1"> [description of the issue] </p>    
<h1 className="my-1"> Troubleshooting Steps: </h1>
    <ul>
  <li className="my-1 inline-block"> - Step 1: [troubleshooting step 1] </li>
  <li className="my-1 inline-block"> - Step 2: [troubleshooting step 2] </li>
  <li className="my-1 inline-block">  - Step 3: [troubleshooting step 3] </li>
  <li className="my-1 inline-block">    - Step n: [troubleshooting step n] </li>
  <li className="my-1 inline-block">  - As a last resort, [final troubleshooting step]. </li>
    </ul>

- If the issue is not a bug, provide a clear statement that it is not a bug.


The user’s description is: ${prompt}

no markdown output allowed

`;
