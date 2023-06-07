import { faker } from '@faker-js/faker'
import User from '../models/user'
import Post from '../models/post'

async function fakeUsers({ admin = 1, applicant = 1, recruiter = 1 }) {
	const create = async (role: string) => {
		const name = faker.person.lastName()
		const firstName = faker.person.firstName()
		const email = faker.internet.email()
		const password = faker.internet.password()
		await User.create({ name, firstName, email, password, role })
	}

	for (let i = 0; i < admin; i++) {
		await create('admin')
	}
	for (let i = 0; i < applicant; i++) {
		await create('applicant')
	}
	for (let i = 0; i < recruiter; i++) {
		await create('recruiter')
	}

	console.log('Fake users generated successfully.')
}

async function fakePosts(n = 1) {
	const users = await User.find({ role: 'recruiter' })

	for (let i = 0; i < n; i++) {
		const user = users[Math.floor(Math.random() * users.length)]
		const title = faker.person.jobTitle()
		const type = faker.person.jobType()
		const description = faker.lorem.paragraphs(5)
		const salary = faker.number.int({ min: 1000, max: 4000 })
		const requirements = faker.lorem.lines(4).split('\n')
		const enterprise = faker.person.jobArea()
		const address = faker.location.city()
		const owner = user._id
		await Post.create({
			user,
			title,
			type,
			description,
			salary,
			requirements,
			address,
			enterprise,
			owner,
		})
	}
	console.log('Fake posts generated successfully.')
}

export { fakeUsers, fakePosts }
