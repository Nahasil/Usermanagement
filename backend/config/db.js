const mongoose = require('mongoose')

module.exports = () => {
	const connectionParams = {
		useUnifiedTopology: true,
		useNewUrlParser: true

	}
	try {

		mongoose.connect(process.env.MONGO_URI, connectionParams)
		console.log(`MongoDB Connected`)
	} catch (error) {
		console.error(`Database Error: ${error.message}`)
		process.exit()
	}
}