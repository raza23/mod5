# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#! USERS
test1 = User.create(name: 'test',username: 'test',password:'test')
raza = User.create(name: 'Raza',username: 'raza23',password:'raza')
goku = User.create(name: 'Goku',username: 'goku',password:'goku')
jim = User.create(name: 'Jim',username: 'test',password:'test')
michael = User.create(name: 'Michael',username: 'michael',password:'michael')
pam = User.create(name: 'Pam',username: 'pam',password:'pam')

#! ORGANIZATION
pdjax = Organization.create(name: 'PD JAX',username: 'pd_jax', password: 'pdjax', category: 'Feeding The Needy', description: 'Making meals for the less fortunate and pass them out around downtown Jacksonville', site: 'https://www.pdjax.com')
teach = Organization.create(name: 'Teach for American', username: 'teach', password: 'teach', category: 'Educational', description: 'Go to schools and help grade school students with their schoolwork', site: 'https://www.teachforamerica.org/')
trees = Organization.create(name: 'Trees Atlanta',username: 'treesatl' ,password: 'trees', category: 'Environment Help', description: 'Trees Atlanta works tirelessly to address Atlanta’s tree loss, protect its forests, and create new green space.', site: 'https://www.treesatlanta.org/who-we-are/')
# api = APICommunicator.new


# ! OPPURTUNITY
o1 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '12/7/2019')
o2 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '12/7/2019')
o3 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '12/14/2019')
o4 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '12/14/2019')

# o5 = Oppurtunity.create(organization: openhand, description: 'Help pack meals with us', date: '12/17/2019')
# o6 = Oppurtunity.create(organization: openhand, description: 'Help pack meals with us', date: '12/18/2019')
# o7 = Oppurtunity.create(organization: openhand, description: 'Help pack meals with us', date: '12/19/2019')
# o8 = Oppurtunity.create(organization: openhand, description: 'Help pack meals with us', date: '12/20/2019')

o9 =  Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '12/20/2019')
o10 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '12/21/2019')
o11 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '1/5/2020')
o12 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '1/14/2029')

o13 = Oppurtunity.create(organization: trees,volunteers_needed: 3, description: 'Come out on Saturday and help us plant some trees in east Atlanta', date: '12/14/2019')
o14 = Oppurtunity.create(organization: trees,volunteers_needed: 3, description: 'Come out on Saturday and help us plant some trees in Stone Mountain', date: '12/14/2019')

l1 = Log.create(clockin: '1:00 pm', clockout: '2:00 pm',oppurtunity: o1,user: raza)
l2 = Log.create(clockin: '1:00 pm', clockout: '2:00 pm',oppurtunity: o2,user: goku)


# l1 = Log.create(user:)