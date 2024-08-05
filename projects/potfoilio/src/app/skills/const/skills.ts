import { TechSpec } from "../skills.component";

export const TECHNOLOGIES: TechSpec[] = [
	{
		main: 'Front-end Development',
		skills: [
			{ logo: "fa fa-brands fa-js", name: 'Js', number: 80 },
			{ image: "https://img.icons8.com/material-rounded/24/000000/typescript.png", name: 'Ts', number: 80 },
			{ logo: 'fa-brands fa-angular', name: 'Angular', number: 90 },
			{ logo: 'fa-brands fa-react', name: 'React', number: 60 },
			{ logo: 'fa-brands fa-html5', name: 'HTML', number: 100 },
			{ logo: 'fa-brands fa-css3-alt', name: 'CSS', number: 100 },
			{ logo: 'fa-brands fa-sass', name: 'SaSS', number: 90 },
			{ logo: 'fa-solid fa-laptop-code', name: 'Responsive Apps', number: 100 }
		]
	},
	{
		main: 'Back-end Development',
		skills: [
			{ logo: 'fa-brands fa-python', name: 'Python', number: 50 },
			{ logo: 'fa-brands fa-node', name: 'Node JS', number: 50 },
			{ image: "https://img.icons8.com/ios/50/000000/express-js.png", name: 'Express JS', number: 50 },
			{ logo: 'fa-solid fa-database', name: 'SQL', number: 60 },
			{ name: 'RESTful APIs' },
		]
	},
	{
		main: 'Other',
		skills: [
			{ logo: 'fa-brands fa-github', name: 'Github' },
		]
	}
];



