const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EducationSchema = new Schema({
	type: String,
	attributes: {
		name: {
			da: String,
			en: String
		},
		title: String,
		university: String,
		degree: String,
		specializations: [{
			name: String,
			description: String
		}],
		skills: [String],
		updated: { type: Date, default: Date.now }
	}
});

module.exports = mongoose.model('Education', EducationSchema);

// course_programme: [[{
// 	name: String,
// 	ects: Number
// }]],