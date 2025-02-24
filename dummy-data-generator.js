// Dummy Data Generator for Testing
function generateDummyUsers(total) {
    const users = [];
    for(let i = 1; i <= total; i++) {
        users.push({
            id: i,
            name: `User_${i}`,
            email: `user${i}@example.com`,
            isActive: i % 2 === 0,
            profile: {
                age: Math.floor(Math.random() * 60) + 18,
                address: {
                    street: `${i} Main St`,
                    city: "DummyCity",
                    country: "DummyLand",
                    zip: `0000${i}`
                }
            }
        });
    }
    return users;
}

const dummyUsers = generateDummyUsers(5000);
console.log(dummyUsers);
