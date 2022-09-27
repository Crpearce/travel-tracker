# Travel Tracker

## Abstract
Looking book a trip and get away? Use this repo to help you do just that! This was a solo project assigned by the [Turing School of Software and Design](https://turing.edu/) designed to create a travel tracking application which utilized a variety of technologies. These technologies included javaScript, HTML, CSS, Mocha, and Chai. This project marks the half way point in our education related to this program, primarily focusing on vanilla JS to this point. The project was completed in one 4 day push. The project goals were to: user OOP to drive the design of the application and the code, work with an API to send and receive data, solidify the code review process, and create a robust test suite that tests all functionality of the client-side application while ensuring that our app follows best practices for accessability. 

#### User login
![2022-09-27 08 13 48](https://user-images.githubusercontent.com/101376200/192550869-79001ca4-6301-4519-8d74-59df8a661153.gif)

#### Display view and data entry
![2022-09-27 08 20 23](https://user-images.githubusercontent.com/101376200/192552296-976265fe-12a6-4ea1-82cc-199fdadf61a3.gif)

#### Book Trip
![2022-09-27 08 35 34](https://user-images.githubusercontent.com/101376200/192556268-6b40e5c8-084f-4c67-b657-51bda0bcdb2f.gif)

#### Update User View


## Setup

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something (just add a line in the README) and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup pt. 2

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```
To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Login
1. To login to the dashboard view for a user, please use the current username and password format.

`username: traveler50 (where 50 is the ID of the user, users 1 - 50 should be acccessable)`

`password: travel`

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).

## Project Specs
The project specs and rubric for Travel Tracker can be found [here](https://frontend.turing.edu/projects/travel-tracker.html)

## Technologies Used
 <p>
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
   <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white"/>
   <img src="https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white"/>
   <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
 </p>

 ## Challenges
- TDD
- Post Calls

## Wins
- Dynamic functions created to stick to SRP and get rid of unecessary code
- Accessibility

## Future Extensions
- create another login view for a travel agent ** Your app should now support two different types of users. In addition to having a traveler, you will now add a travel agency. **

