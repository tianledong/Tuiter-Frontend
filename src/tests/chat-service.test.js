import {
    userChatsUser,
    findChatForUsers,
    countTotalUnreadMessage
} from "../services/chat-service";

import {
    createUser,
    deleteUsersByUsername
} from "../services/users-service";


describe('userChatsUser', () => {
    // sample user to insert
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const sarah = {
        username: 'sarah_conor',
        password: 'illbeback',
        email: 'sarah@bigjeff.com'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    test('can send chat messages between users with REST API', async () => {
        // insert new user in the database
        const sender = await createUser(ripley);
        const receiver = await createUser(sarah);
        const testChat = "test chat";
        const res = await userChatsUser(sender._id, receiver._id, testChat);

        // verify inserted user's properties match parameter user
        expect(res.data.message).toEqual(testChat);
    });
});

describe('findChatForUsers', () => {
    // sample user to insert
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const sarah = {
        username: 'sarah_conor',
        password: 'illbeback',
        email: 'sarah@bigjeff.com'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    test('can find all chat messages with REST API', async () => {
        // insert new user in the database
        const sender = await createUser(ripley);
        const receiver = await createUser(sarah);
        const testChat = "test chat";
        await userChatsUser(sender._id, receiver._id, testChat);
        const res = await findChatForUsers(sender._id, receiver._id);

        // verify inserted user's properties match parameter user
        expect(res.data.message).toEqual(testChat);
    });
});

describe('countTotalUnreadMessage', () => {
    // sample user to insert
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const sarah = {
        username: 'sarah_conor',
        password: 'illbeback',
        email: 'sarah@bigjeff.com'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(sarah.username);
        return deleteUsersByUsername(ripley.username);
    })

    test('can count all unread message with REST API', async () => {
        // insert new user in the database
        const sender = await createUser(ripley);
        const receiver = await createUser(sarah);
        const testChat = "test chat";
        await userChatsUser(sender._id, receiver._id, testChat);
        const res = await countTotalUnreadMessage(receiver._id);

        // verify inserted user's properties match parameter user
        expect(res.data).toEqual(1);
    });
});
