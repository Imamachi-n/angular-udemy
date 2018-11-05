# angular-udemy
This repository is based on the following udemy course  
https://www.udemy.com/the-complete-guide-to-angular-2

## 1. Angular CLI
### 1.1. Intall the Angular CLI
```bash
npm install -g @angular/cli
```

### 1.2. Create a workspace and initial application
```bash
ng new my-app
```

### 1.3. Creat a new component
```bash
# Basic version
ng generate component myComponent

# Abbriviation version
mg g c myComponent

# If you do not need a spec file, execute the following command.
ng g c myComponent --spec false
```

#### 1.3.1. Create a children component
```bash
# Parent component
ng g c recipes

# Children component
ng g c recpies/recipe-list
```

The following directories and files are created.
```
app/
 └─ recipes/
     ├─ recipes.component.css
     ├─ recipes.component.html
     ├─ recipes.component.ts
     └─ recipe-list/
         ├─ recipe-list.component.css
         ├─ recipe-list.component.html
         └─ recipe-list.component.ts
```

## 2. npm package management
### 2.1. Install dependent packages
```bash
yarn install
```

### 2.2. Add Bootstrap
```bash
yarn add bootstrap@4.1.3
```

After that, add the following lines in angular.json file.
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

## 3. Debugging
### 3.1. Angular Augury
A Chrome and Firefox Dev Tools extension for debugging Angular applications.  
https://augury.rangle.io/