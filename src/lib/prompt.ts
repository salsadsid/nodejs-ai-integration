export const generatePrompt = (prompt: string) => `
You are an expert software developer. I am reporting a bug in my application, and I need a detailed and actionable solution. Below are the details:

1. Issue Description:
${prompt}

if description is not a bug. Simply write "This is not a bug."

2. Steps to Reproduce:

[Step 1: Describe the initial condition or state.]
[Step 2: List actions taken to encounter the bug.]
[Step 3: Provide any specific inputs or interactions.]
3. Environment Details:

Operating System: [e.g., Windows 10, macOS Monterey]
Browser or Application Version: [e.g., Chrome 112, Node.js 18.12.0]
Framework/Language: [e.g., React 18, TypeScript 4.9]
Backend/Database Info: [e.g., Express.js, MongoDB]
4. Error Logs/Screenshots:
[Include the exact error messages, logs, or screenshots if available.]

5. Additional Information:

[Mention any patterns observed or temporary fixes tried.]
Based on the information above, provide:

A probable cause for the issue.
A detailed solution or workaround, including example code or configurations if applicable.
Confirmation if this behavior is expected and not a bug.

Output format: html 

Please provide a detailed solution or workaround, including example code or configurations if applicable. 

no markdown is allowed. 

`;
