
const birthDateString = "1991-10-07"; // YYYY-MM-DD
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const m = today.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const myProfile = {
    "name": "Moustafa Attia",
    "age": calculateAge(birthDateString),
    "email": "moustafa.attia.91@gmail.com",
    "gender": "Male",
    "yearsOfExperience": +9,
    "photo": "https://media.licdn.com/dms/image/D4D03AQGIuKTH12_fdw/profile-displayphoto-shrink_400_400/0/1674437650525?e=1726704000&v=beta&t=TPqsITNiHBfgZ6E1VmIHB4ScHXALQ13XFmq25IHmh_4",
    "summary": `Senior Dotnet Developer, with skills in .NET/C#, Node JS, React, SQL Server, and Azure CI/CD.
    
    I have over 9 years of experience in software engineering, specializing in .NET and C# technologies. I have worked in various domains, such as internal portals, reporting and integration, Web APIs, Git, DevOps, and more.
    
    Bachelor's degree in Computer Science.`,
    
    "github": "https://github.com/Moustafaa91",
    "experiences": [
      {
        "roleName": "Sr. Software Engineer",
        "companyName": "Emergn",
        "companyURL": "https://www.emergn.com/",
        "logo": "https://cdn.shortpixel.ai/spai1/ret_img/www.emergn.com/wp-content/themes/emergn-2021/assets/images/logo-black.svg",
        "roleDescription": "Worked and participated in developing multiple projects using several technologies, like .NET/ C#, Node.js, React, Git, Azure CI/CD, Jenkins Pipeline, SQL databases and Azure migration automation with DevOps.\n\nMy responsibilities included bug fixing, troubleshooting, developing new features, monitoring new joiners, setup project source control, and engaging in various internal activities and ongoing self-learning."
      },
      {
        "roleName": "Another experience to add",
        "companyName": "in progress ...",
        "companyURL": "https://www.emergn.com/",
        "logo": "https://cdn.shortpixel.ai/spai1/ret_img/www.emergn.com/wp-content/themes/emergn-2021/assets/images/logo-black.svg",
        "roleDescription": "Worked and participated in developing multiple projects using several technologies, like .NET/ C#, Node.js, React, Git, Azure CI/CD, Jenkins Pipeline, SQL databases and Azure migration automation with DevOps.\n\nMy responsibilities included bug fixing, troubleshooting, developing new features, monitoring new joiners, setup project source control, and engaging in various internal activities and ongoing self-learning."
      }
    ],
    "skills": [".Net", "C#", "Azure", "Git", "JavaScript", "React", "Node.js"],
    "certificates": [
      {
        "certificateName": "What is React",
        "certificateURL": "https://drive.google.com/file/d/1_sQehPEMPRf3nTZBFhvmUGoJAvpjtmWp/view"
      },
      {
        "certificateName": "Scrum Development with Jira & JIRA Agile",
        "certificateURL": "https://drive.google.com/file/d/17Z55XDWY-IfjwkmosoqPbtQ0Q5RBQ0JN/view"
      }
    ]
  };  

  module.exports = myProfile;