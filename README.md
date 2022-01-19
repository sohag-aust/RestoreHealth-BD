## [Live Site](https://restorehealth-bd.web.app/)

# Features:
* Home Page | Contains features
* About Us Section | Some info About US
* Medical Facilities
* Review Sections
* Bed Count , Hospital Staffs Count, etc
* Appointment Section
* Private Route for Facility Details
* Private Route for Posts
* Email&Password based login
* Google Login System
* Registration System
* Page Not Found (404)


# Problem Faced:
* 1) Getting TypeError on `npm run build` : MiniCssExtractPlugin

	** solution: `npm i -D --save-exact mini-css-extract-plugin@2.4.5`

* 2) Firebase app breaks on page reload

	** solution: inside firebase.json `
		"public": "build",
		"rewrites": [{
			"source": "**",
			"destination": "/index.html"
		}]
	`
