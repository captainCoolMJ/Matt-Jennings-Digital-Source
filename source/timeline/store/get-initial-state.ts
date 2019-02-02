import { TimelineStoreStateInterface } from "./state.interface";
import { TimelineItemCategoryEnum } from "../item/category.enum";

export const timelineStoreGetInitialState = (): TimelineStoreStateInterface => ({
    items: [
		{
			from: "2003",
			to: "present",
			action: "Play Guitar",
			category: TimelineItemCategoryEnum.life,
			details: "I've been actively playing the guitar since 2003 and continue to jam."
		},
		{
			from: "sept 1 2008",
			to: "july 20 2012",
			action: "Move to Canterbury, UK",
			category: TimelineItemCategoryEnum.life,
			details: "I left America to pursue a higher education in the United Kingdom."
		},
		{
			from: "May 29 1990",
			to: "present",
			action: "Travel the World",
			category: TimelineItemCategoryEnum.life,
			details: "One of my passions in life is to explore as much of the world as I can. I have had the opportunity to visit many countries already and continue to do so."
		},
		{
			from: "sept 1 2008",
			to: "july 1 2012",
			action: "University of Kent - BSc (Hons) Multimedia Technology & Design",
			category: TimelineItemCategoryEnum.life,
			details: "Began and completed a university education."
		},
		{
			from: "august 1 2012",
			to: "present",
            action: "Live in Philadelphia, PA",
            category: TimelineItemCategoryEnum.life,
			details: "Graduated, moved back to America, and got an apartment in Philadelphia."
		},
		{
			from: "oct 20 2013",
			to: "oct 24 2013",
			action: "CSS Dev Conf 2013",
			category: TimelineItemCategoryEnum.life,
			details: "I attended the CSS Dev Conf in Estes Park, Colorado to refine my CSS and front-end development skills."
		},
		{
			from: "june 1 2007",
			to: "june 1 2008",
			action: "Student Video Technician, HCTV",
			category: TimelineItemCategoryEnum.work,
			details: "Worked for a local cable access channel in my town filming local events such as sports, music and theatre."
		},
		{
			from: "july 1 2010",
			to: "sept 1 2010",
			action: "Interactive Design Intern, Blue Diesel",
			category: TimelineItemCategoryEnum.work,
			details: "Assisted in designing websites and print publications for pharmaceutical clients."
		},
		{
			from: "july 1 2011",
			to: "sept 1 2011",
			action: "Interactive Design Freelancer, Blue Diesel",
			category: TimelineItemCategoryEnum.work,
			details: "Transitioned from an intern to freelance position at Blue Diesel. Projects included website design, banner ad design, icon design, and email template design. This gave me a perfect jump start into creating effective UI/UX and my skill set became a powerful combination of art and code."
		},
		{
			from: "oct 1 2012",
			to: "dec 1 2013",
			action: "Junior Web Developer, Agency M",
			category: TimelineItemCategoryEnum.work,
			details: "Developed numerous websites at a fast paced ad agency. Sites varied from static HTML to ‘built-from-scratch’ Drupal and Wordpress installs. Development team consisted of myself and another so teamwork and successful time management was vital in this role. Client interaction was also a regular task which made effective communication essential."
		},
		{
			from: "jan 1 2014",
			to: "july 31 2014",
			action: "Multimedia Developer, Red Nucleus",
			category: TimelineItemCategoryEnum.work,
			details: "Develop interactive e-learning solutions for major pharmaceutical clients in the form of iPad focused HTML5 games, visual perceptorships and interactive eBooks. Also assist in the migration of developers to modern techniques by leading multiple courses and seminars on responsive design, HTML5, CSS3, and modern Javascript frameworks."
		},
		{
			from: "aug 16 2014",
			to: "present",
			action: "Front End Engineer, Qordoba",
			category: TimelineItemCategoryEnum.work,
			details: "My work focuses on building a modern language localization platform with an AngularJS based front-end. Working at Qordoba requires an extensive knowledge of Javascript, HTML, CSS (SASS), Grunt, and Git, however, I have also found myself developing with Node.js and unit testing frameworks too."
		}

	]
});