# Kinplus Website v2.0 and Git Branching Strategy

This document provides an overview of the git branching strategy used by the Kinplus Technology frontend team. The team uses a continuous development strategy where features are deployed immediately as soon as they are ready.

 - <a href="#environment-overview">Environment Overview</a>
 - <a href="#branches-overview">Branches Overview</a>
 - <a href="#develop-new-feature">Develop new feature</a>
 - <a href="#branch-naming-convention">Branch naming convention</a>
 - <a href="#anti-pattern">Anti-Pattern</a>
 - <a href="#start-server">Start Server</a>

## Environment Overview

At Kinplus Technologies, we use the **Development**, **Staging**, and **Production** (DSP) environment model which is essential in providing the needed checks and balances in developing reliable, robust softwares.

  1. `Development (dev) environment -` This is the environment where features and changes made by developers are first deployed and tested. This environment is rapidly updated and contains the most recent version of the application

  2. `Staging environment -` This environment mirrors the production environment and it is used for the final testing of the application and approval before going live (to production)

  3. `Production (prod) environment -` This is the currently released version of the application accessible to client/end users. This version does not change except during scheduled releases.

## Branches Overview

| Branch                | Branch Base     | Description     |
| :---                  |    :----:       |          :--- |
| `master`              | N/A             | What is in live production (**stable**).<br> A pull request is required to merge code into `master`
| Staging               |      `master`   | The latest state of staging (**unstable**).<br> Codes in this branch are deployed to `staging` environment.      |
| dev                   | `master`        | The latest feature (**unstable**). <br>  Codes in this branch are deployed to `development` environment  | 
| feature               |    `master`     | Cutting-edge features (**unstable**).<br> These branches are used for any maintenance features active development.      |
---

## Develop a new feature

  1. Create a feature branch based off of master.

        ```
          $ git checkout master

          $ git checkout -b feature/featureName

          $ git push --set-upstream feature/featureName
        ```
      💡 make sure your `master` is up to date.
  
  2. Develop the code for the new feature and commit as you go. This will provide a safety net should your hard drive/workstation crash.
        ```
          $ ... make changes

          $ git add -A .
          
          $ git commit -m 'commit message'
          
          $ git push
        ```

  3. Navigate to the project on [Github](https://github.com/kinplus-team/kinplusWebsite2) and open a pull request with the following branch settings:
     - Base: master
     - Compare: feature/featureName

  4. While waiting for the pull request review and approval, merge the feature branch with the following settings:
      - Base: develop
      - Compare: feature/featureName <br>
     
     Do:
      - Test the application locally before merging to develop branch ✔️<br>
    
     Don't:
      - Merge into `master` branch without pull request review and approval ❌
  
  5. Deploy develop to `development` environment

        ```
          $ git checkout develop

          $ git pull
        ```

  6. If everything is good in development, merge the feature branch to staging and deploy to `staging` environment
   
  7. If everything is good in `staging` environment, and the Pull request has been reviewed and approved, merge the feature branch to master and deploy to `production` environment

## Branch naming convention

Except for `master` , `staging` and `develop`, the branch should be named in relation to the branch starting with a prefix of feature or hotfix.

Branch names should use dashes to separate words of the name and should avoid any uppercase letters.

Choose a branch name that is concise and descriptive.

_example:_ feature/featureName

## Anti-Patterns

### Don't develop a feature in `develop1`, `staging` or `master` ❌
Instead: Create a feature branch off of `master`. When the feature is developed and tested, create a pull request. ✔️

Why?: All code changes require a code review and verification by our QA team. By opening a pull request, you signal to the rest of the team that your code is ready to be reviewed and tested.

----

### Don't merge your pull requests without at least +1 ❌
Instead: Ask a team member for a code review and to at least +1 your changes. ✔️

Why?: Nobody is perfect. We always want to ensure at least one other team member reviews our code. Performance, readability, bugs, memory leaks, etc can all be impacted by code changes, and sharing the responsibility to think about all that with a team member takes the pressure off your shoulders.

---

## Start Server
In your terminal type this command and run it 
`npm run dev`
Open the link in your browser

💪💪💪 Keep calm and happy codding 🚀 🚀 🚀
