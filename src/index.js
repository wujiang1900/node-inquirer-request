import inquirer from 'inquirer';
import request from 'request';
import * as _ from 'underscore';
// import validator from 'validator';

const questions = [{
  type: 'input',
  name: 'name',
  message: "What's the state name or abbreviation that you want to query?"
}]

export const doit = ()=>
inquirer.prompt(questions).then(answers => {

	request('http://services.groupkt.com/state/get/USA/all', 
		{ json: true }, 
		(err, res, body) => {
			if (err) { 
				return console.log(err); 
			}
			const { RestResponse: { result: states }={} } = body;
			console.log(getCities(states, answers['name']));
			doit();
		});
})

export const getCities = (states, name)=> {
	if(!/^([A-Za-z]{2,13})(( [A-Za-z]{2,13}){0,1})$/.test(name))
		return "Invalid state name or abbreviation!"
	return _.chain(states) 
		.filter((state)=>state.name.toUpperCase()===name.toUpperCase() || state.abbr.toUpperCase()===name.toUpperCase())
		.first()
		.pick('largest_city', 'capital')
		.value()
}


doit();