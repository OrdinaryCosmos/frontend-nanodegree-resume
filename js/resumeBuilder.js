

var bio=   {"name" : "Evan Cosmo",
    "role" : "Full Stack Developer",
    "contacts" : {
        "mobile": "718-987-0987",
        "email": "liucosmos1@gmail.com",
        "github": "https://github.com/OrdinaryCosmos",
        "twitter": "@leelightnifgnglee",
        "location": "New York"},
    "welcomeMessage": "Welcome to my homepage" ,
    "skills": ["Python","Javascript","Django","AngularJS","SASS","Compass","Grunt"],
    "biopic": "http://www.gundamcore.it/wp-content/uploads/gundam-seed-2.jpg"
    };

bio.display = function () {
    var formattedName=HTMLheaderName.replace('%data%',bio.name);
    var formattedRole=HTMLheaderRole.replace('%data%',bio.role);

    $("#header").prepend(formattedRole).prepend(formattedName);
    var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var email = HTMLemail.replace('%data%', bio.contacts.email);
    var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var giturl = HTMLgithub.replace('%data%', bio.contacts.github);
    var mylocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $("#topContacts").append(mobile).append(email).append(twitter).append(giturl).append(mylocation);

    $("#footerContacts").append(mobile).append(email).append(twitter).append(giturl).append(mylocation);

    var imgurl = HTMLbioPic.replace('%data%', bio.biopic);
    var welcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $("#header").append(imgurl).append(welcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0, len = bio.skills.length; i < len; i++) {
            var skillitem = HTMLskills.replace('%data%', bio.skills[i]);
            $("#skills").append(skillitem);
        }
    }
};
bio.display();
var education ={
    "schools": [
        {
            "name": "Academy of Art University",
            "location": "San Francisco",
            "degree": "MFA",
            "majors": [
                "film production"
            ],
            "dates": 2012,
            "url": "www.aau.edu"
        } ,
        {
            "name": "New York Institute of Technology",
            "location": "New York",
            "degree": "BS",
            "majors": [
                "information management"
            ],
            "dates": 2014,
            "url": "www.nyit.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Computer Science",
            "school": "Udacity",
            "date": 2013,
            "url": "www.Udacity.com"
        },
        {
            "title": "Algorithms: Design and Analysis",
            "school": "Coursera",
            "date": 2013,
            "url": "https://www.coursera.org/course/algo"
        }
    ]
};

education.display= function () {
    for (var i in this.schools) {
        var school=this.schools[i];
        $("#education").append(HTMLschoolStart);
        var schoolname=HTMLschoolName.replace('%data%',school.name);
        var schooldeg=HTMLschoolDegree.replace('%data%',school.degree);
        var schooldate=HTMLschoolDates.replace('%data%',school.dates);
        var schoolloc=HTMLschoolLocation.replace('%data%',school.location);
        $(".education-entry:last").append(schoolname+'-'+schooldeg).append(schooldate).append(schoolloc);
        for (var j in school.majors) {
            var schoolmaj=HTMLschoolMajor.replace('%data%',school.majors[j]);
            $(".education-entry:last").append(schoolmaj);
        }
    }

    if (this.onlineCourses.length>0) {
        $("#education").append(HTMLonlineClasses);
        for (var i in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var online=this.onlineCourses[i];
            var title=HTMLonlineTitle.replace('%data%',online.title);
            var school=HTMLonlineSchool.replace('%data%',online.school);
            var date=HTMLonlineDates.replace('%data%',online.date);
            var url=HTMLonlineURL.replace('%data%',online.url);
            $(".education-entry:last").append(title+school).append(date).append(url);
        }
    }

};

education.display();

var work={
    "jobs": [
        {
            "employer": "EnMaze",
            "title": "Web Developer",
            "location": "New York",
            "dates": "2013",
            "description": "develop web app"
        }
    ]
};

var project={
    "projects": [
        {
            "title": "backend Admin system",
            "dates": "2012-2013",
            "description": "develop an background admin system",
            "images": [
                "http://financeandcareer.com/wp-content/uploads/2013/03/webProgrammingInternship.jpg"
            ]
        }
    ]
};



work.display=function () {
    for (var jobnum in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var job = work.jobs[jobnum];
        var newemployer = HTMLworkEmployer.replace('%data%', job.employer);
        var newjobtitle = HTMLworkTitle.replace('%data%', job.title);
        var emplyertitle = newemployer + newjobtitle;
        var newlocation = HTMLworkLocation.replace('%data%', job.location);
        var newdate = HTMLworkDates.replace('%data%', job.dates);
        var newdesce = HTMLworkDescription.replace('%data%', job.description);
        $(".work-entry:last").append(emplyertitle).append(newlocation).append(newdate).append(newdesce);
    }
}
work.display();

$(document).click(function (loc) {
    logClicks(loc.pageX,loc.pageY);
});

$('#main').append(internationalizeButton);

function inName(name){
    var namearrary=name.split(' ');

    return namearrary[0].charAt(0).toUpperCase()+namearrary[0].slice(1).toLowerCase()+' '+namearrary[1].toUpperCase();
};


project.display= function () {
    var projects=this.projects;
    for (var i = 0, len = projects.length; i < len; i++) {
        var projdetail = projects[i];
        $("#projects").append(HTMLprojectStart);
        var projtitle=HTMLprojectTitle.replace('%data%',projdetail.title);
        var projdate=HTMLprojectDates.replace('%data%',projdetail.date);
        var projdesc=HTMLprojectDescription.replace('%data%',projdetail.description);
        $(".project-entry:last").append(projtitle).append(projdate).append(projdesc);
        for (var j = 0, len = projdetail.images.length; j < len; j++) {
            var projimg=HTMLprojectImage.replace('%data%',projdetail.images[j]);
            $(".project-entry:last").append(projimg);
        }
    }
};

project.display();

$('#mapDiv').append(googleMap);
