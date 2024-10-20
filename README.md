## To-Do Application using REACT!

The to-do application here is a simple React application which is built using Vite which is a latest build tool and development server. In this application, the users will get a real-time application of useState hook which is used here to perform several tasks like:
1. Adding titles and tasks,
2. Saving the user entered tasks,
3. Updating the tasks (like checking whether the task is completed or not),
4. Finally, deleting the to-do component.

Facts About VITE:

Vite is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling.

Vite in comparison with "create-react-app" has more advantages like
1. It helps you develop and bundle modern JavaScript applications more efficiently.
2. The start-up time is fast due to ESM.
3. Hot module replacement i.e, super fast updations
4. Highly optimised via Rollup
5. Frameworks like react,vue,svelte etc are supported on this tool

BULMA:

For styling the application, "Bulma" , a open-source framework, was used. Bulma, as said is a open-source CSS Framework, provides ready-to-use frontend components that you can easily combine to build responsive web interfaces. Various classes have been imported(used) for styling the buttons according to their functionality. External CSS has also been used to style some "div" containers.


## Documentation

[WORKFLOW](https://github.com/funnysam2002/Todo-List-React-/blob/main/Flowchart.drawio.png)

The simple workflow of the application.


## Deployment

VITE:

Firstly, to create any vite project, use the following command
```bash
npm create vite@latest
```
Further, select the framework, you want to make the project in and type the name of the project

Next, after creating the project, run the following commands
```bash
cd your-project-name
```
This will download all the packages for you.
```bash
npm install
```
This will give the information about the localhost where the application will be hosted on and a link which you can click and directly open the application.
```bash
npm run dev
```

 The command "npm run dev" should be ran to view the application.

 NOTE: For using "Vite" on your device, the only requirement is that, nodejs should be installed.

BULMA:

For using "BULMA" , run the command 
```bash
npm install bulma
```

Include the command 
```bash
import "bulma/css/bulma.min.css";
```
in your "App.jsx" for using the style classes for project elements. 




