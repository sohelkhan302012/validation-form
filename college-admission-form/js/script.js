document
  .getElementById("my-admission-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value.trim();
    let midName = document.getElementById("mid-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let Gender = document.getElementsByName("Gender").checked;
    let fullAddress = document.getElementById("full-address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let qualification = document.getElementById("qualification").value.trim();
    let percentage = document.getElementById("percentage").value.trim();
    let schoolName = document.getElementById("school-name").value.trim();
    let passingYear = document.getElementById("passing-year").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();
      let checkboxes = document.querySelectorAll('input[type="checkbox"]').checked;
    let relativeName = document.getElementById("relative-name").value.trim();
    let emergencyNumber = document
      .getElementById("emergency-number")
      .value.trim();
    let photo = document.getElementById("photo").value.trim();
    let govtId = document.getElementById("govt-id").value.trim();
    let Marksheet = document.getElementById("Marksheet").value.trim();

    let isvalid = true;

  

    // Validate First Name
    if (!firstName) {
      showerror("first-name", "Invalid First Name");
      isvalid = false;
    } else {
      hideerror("first-name");
    }
    if (!midName) {
        showerror("mid-name", "Invalid midName Name");
        isvalid = false;
      } else {
        hideerror("mid-name");
      }

    // Validate Last Name
    if (!lastName) {
      showerror("last-name", "Invalid Last Name");
      isvalid = false;
    } else {
      hideerror("last-name");
    }

    // Validate Date of Birth
    if (!dob) {
      showerror("dob", "Invalid Date of Birth");
      isvalid = false;
    } else {
      hideerror("dob");
    }

    // Validate Mobile Number
    if (!mobile) {
      showerror("mobile", "Invalid Mobile Number");
      isvalid = false;
    } else {
      hideerror("mobile");
    }

    // Validate Email
    if (!email) {
      showerror("email", "Invalid Email Address");
      isvalid = false;
    } else {
      hideerror("email");
    }

    // Validate Gender
    if (!Gender) {
      showerror("gender", "Select Gender");
      isvalid = false;
    } else {
      hideerror("Gender");
    }

    // Validate Full Address
    if (!fullAddress) {
      showerror("full-address", "Invalid Full Address");
      isvalid = false;
    } else {
      hideerror("full-address");
    }

    // Validate City
    if (!city) {
      showerror("city", "Invalid City");
      isvalid = false;
    } else {
      hideerror("city");
    }

    // Validate State
    if (!state) {
      showerror("state", "Invalid State");
      isvalid = false;
    } else {
      hideerror("state");
    }

    // Validate Pincode
    if (!pincode) {
      showerror("pincode", "Invalid Pincode");
      isvalid = false;
    } else {
      hideerror("pincode");
    }

    // Validate Qualification
    if (!qualification) {
      showerror("qualification", "Invalid Qualification");
      isvalid = false;
    } else {
      hideerror("qualification");
    }

    // Validate Percentage
    if (!percentage) {
      showerror("percentage", "Invalid Percentage");
      isvalid = false;
    } else {
      hideerror("percentage");
    }

    // Validate School Name
    if (!schoolName) {
      showerror("school-name", "Invalid School Name");
      isvalid = false;
    } else {
      hideerror("school-name");
    }

    // Validate Passing Year
    if (!passingYear) {
      showerror("passing-year", "Invalid Passing Year");
      isvalid = false;
    } else {
      hideerror("passing-year");
    }

    // Validate Password
    if (!password) {
      showerror("password", "Invalid Password");
      isvalid = false;
    } else {
      hideerror("password");
    }

    // Validate Confirm Password
    if (!confirmPassword || password !== confirmPassword) {
      showerror("confirm-password", "Passwords do not match");
      isvalid = false;
    } else {
      hideerror("confirm-password");
    }

    // Validate Checkbox
    if (!checkboxes) {
      showerror("checkbox", "Accept the terms and conditions");
      isvalid = false;
    } else {
      hideerror("checkbox");
    }

    // Validate Relative Name
    if (!relativeName) {
      showerror("relative-name", "Invalid Relative Name");
      isvalid = false;
    } else {
      hideerror("relative-name");
    }

    // Validate Emergency Number
    if (!emergencyNumber) {
      showerror("emergency-number", "Invalid Emergency Number");
      isvalid = false;
    } else {
      hideerror("emergency-number");
    }

    // Validate Photo
    if (!photo) {
      showerror("photo", "Select Photo");
      isvalid = false;
    } else {
      hideerror("photo");
    }

    // Validate Govt ID
    if (!govtId) {
      showerror("govt-id", "Invalid Govt ID");
      isvalid = false;
    } else {
      hideerror("govt-id");
    }

    // Validate Marksheet
    if (!Marksheet) {
      showerror("Marksheet", "Select Marksheet");
      isvalid = false;
    } else {
      hideerror("Marksheet");
    }

    // Form Submission
    if (isvalid) {
      document.getElementById("form-error").textContent =
        "Form submitted successfully!";
      document.getElementById("form-error").style.backgroundColor = "green";
      document.getElementById("form-error").style.display = "block";
      // Reset form values
      document.getElementById("my-admission-form").reset();
    }
    //  else {
    //   document.getElementById("form-error").textContent =
    //     "Form submission failed!";
    //   document.getElementById("form-error").style.backgroundColor = "red";
    //   document.getElementById("form-error").style.display = "block";
    // }
  });


  function showerror(id, message) {
    document.getElementById(`error-${id}`).textContent = message;
    document.getElementById(`error-${id}`).style.display = "block";
  }
  function hideerror(id) {
      document.getElementById(`error-${id}`).style.display = "none";
      document.getElementById(`error-${id}`).textContent = "";
  }
