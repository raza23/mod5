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

# api = APICommunicator.new
#! ORGANIZATION
pdjax = Organization.create(name: 'PD JAX',username: 'pd_jax', password: 'pdjax', category: 'Feeding The Needy', description: 'Making meals for the less fortunate and pass them out around downtown Jacksonville', site: 'https://www.pdjax.com')
teach = Organization.create(name: 'Teach for America', username: 'teach', password: 'teach', category: 'Educational', description: 'Go to schools and help grade school students with their schoolwork', site: 'https://www.teachforamerica.org/')
trees = Organization.create(name: 'Trees Atlanta',username: 'treesatl' ,password: 'trees', category: 'Environment Help', description: 'Trees Atlanta works tirelessly to address Atlanta’s tree loss, protect its forests, and create new green space.', site: 'https://www.treesatlanta.org/who-we-are/')

lung = Organization.create(name: 'American Lung Association',username: 'al' ,password: 'al', category: 'Health', description: 'Our mission, to save lives by improving lung health and preventing lung disease, is the driving force behind all of our special events.', site: 'https://www.treesatlanta.org/who-we-are/')
cummer = Organization.create(name: 'Cummer Art Museum',username: 'cummerart' ,password: 'cummer', category: 'Educational', description: 'Cummer Museum supports arts and education in the community. Volunteers engage and inspire patrons while enriching their own lives.', site: 'https://www.treesatlanta.org/who-we-are/')
feeding = Organization.create(name: 'Feeding American',username: 'feeding' ,password: 'feed', category: 'Feeding The Needy', description: 'The Feeding America network is the nation’s largest domestic hunger-relief organization, working to connect people with food and end hunger.', site: 'https://www.treesatlanta.org/who-we-are/')
library = Organization.create(name: 'Library of Atlanta',username: 'atllib' ,password: 'read', category: 'Educational', description: 'The Atlanta Library System serves as a cultural and intellectual center that enriches the community and empowers all residents with essential tools for lifelong learning.', site: 'https://www.treesatlanta.org/who-we-are/')
hemming = Organization.create(name: 'Hemming Plaza',username: 'treesatl' ,password: 'trees', category: 'Environment Help', description: 'Friends of Hemming Park is a nonprofit organization founded in 2014 and contracted with the City of Jacksonville to revitalize the city’s first and most historic public park.', site: 'https://www.treesatlanta.org/who-we-are/')


# ! OPPURTUNITY
o1 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '4/7/2020')
o2 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '4/7/2020')
o3 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '4/14/2020')
o4 = Oppurtunity.create(organization: pdjax,volunteers_needed: 10, description: 'Come out on Saturday and help us out!', date: '4/14/2020')

o5 = Oppurtunity.create(organization: feeding, description: 'Help pack meals with us', date: '5/17/2020')
o6 = Oppurtunity.create(organization: feeding, description: 'Help pack meals with us', date: '5/18/2020')
o7 = Oppurtunity.create(organization: feeding, description: 'Help pack meals with us', date: '5/19/2020')
o8 = Oppurtunity.create(organization: feeding, description: 'Help pack meals with us', date: '5/20/2020'4
o9 =  Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '4/20/2020')
o10 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '4/21/2020')
o11 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '6/5/2020')
o12 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '6/14/2029')

o13 = Oppurtunity.create(organization: trees,volunteers_needed: 3, description: 'Come out on Saturday and help us plant some trees in east Atlanta', date: '4/14/2020')
o14 = Oppurtunity.create(organization: trees,volunteers_needed: 3, description: 'Come out on Saturday and help us plant some trees in Stone Mountain', date: '5/14/2020')

o15 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '11/20/2020')
o16 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'Help students out in Math', date: '12/21/2020')
o17 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '1/5/2020')
o18 = Oppurtunity.create(organization: teach,volunteers_needed: 3, description: 'It is exam week help out our fellow students', date: '1/14/2029')

o19 = Oppurtunity.create(organization: lung, volunteers_needed: 4,description: 'Help out at our weekly "Walk for Life" event ', date: '1/17/2020')
o20 = Oppurtunity.create(organization: lung, volunteers_needed: 4,description: 'Help out at our weekly "Walk for Life" event ', date: '1/18/2020')
o21 = Oppurtunity.create(organization: lung, volunteers_needed: 4,description: 'Help out at our weekly "Walk for Life" event ', date: '1/19/2020')
o22 = Oppurtunity.create(organization: lung, volunteers_needed: 4,description: 'Help out at our weekly "Walk for Life" event ', date: '1/20/2020')

o23 = Oppurtunity.create(organization: cummer,volunteers_needed: 8, description: 'Volunteers needed to give tours', date: '1/17/2020')
o24 = Oppurtunity.create(organization: cummer,volunteers_needed: 8, description: 'Volunteers needed to give tours', date: '1/18/2020')
o25 = Oppurtunity.create(organization: cummer,volunteers_needed: 8, description: 'Volunteers needed to give tours', date: '1/19/2020')
o26 = Oppurtunity.create(organization: cummer,volunteers_needed: 8, description: 'Volunteers needed to give tours', date: '1/20/2020')

o27 = Oppurtunity.create(organization: hemming,volunteers_needed: 10, description: 'Come volunteer at artwalk', date: '12/2/2020')
o28 = Oppurtunity.create(organization: hemming,volunteers_needed: 10, description: 'Come volunteer at artwalk', date: '12/2/2020')
o29 = Oppurtunity.create(organization: hemming,volunteers_needed: 10, description: 'Come volunteer at artwalk', date: '12/24/2020')
o30 = Oppurtunity.create(organization: hemming,volunteers_needed: 10, description: 'Come volunteer at artwalk', date: '12/24/2020')


l1 = Log.create(clockin: '1:00 pm', clockout: '2:00 pm',oppurtunity: o1,user: raza)
l2 = Log.create(clockin: '1:00 pm', clockout: '2:00 pm',oppurtunity: o2,user: goku)


# l1 = Log.create(user:)