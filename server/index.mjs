import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/data', async (req, res) => {
    try {
        const response = await fetch('https://italent2.demo.lithium.com/api/2.0/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login', 'messages.count(*)', 'kudos_received.sum(weight)', 'solutions_authored.count(*)', 'albums.count(*)', 'join_date'],
                        "limit": 50
                    }
                },
                {
                    "users": {
                        "fields": ['avatar', 'login'],
                        "limit": 50
                    }
                },
            ])
        });

        const data = await response.json();

 
        const messagesCountResponse = data.data[0].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countmessages - a.countmessages);

        const kudosReceivedResponse = data.data[1].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countkudos - a.countkudos);

        const solutionsAuthoredResponse = data.data[2].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countsolutions - a.countsolutions);

        const bonusPointsResponse = data.data[3].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countalbums - a.countalbums);

        const albumsCountResponse = data.data[4].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countalbums - a.countalbums);

        const mostResources = data.data[5].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countkudos - a.countkudos);

        const mostMedia = data.data[6].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count
        })).sort((a, b) => b.countmessages - a.countmessages);

        const joinDateResponse = data.data[7].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
            countmessages: r.messages.count,
            countkudos: r.kudos_received.sum.weight,
            countsolutions: r.solutions_authored.count,
            countalbums: r.albums.count,
            countjoindate: r.join_date,
        }));

        const staffResponse = data.data[8].items.map(r => ({
            avatar: r.avatar,
            login: r.login,
        }));

        const result = [
            messagesCountResponse,
            kudosReceivedResponse,
            solutionsAuthoredResponse,
            bonusPointsResponse,
            albumsCountResponse,
            mostResources,
            mostMedia,
            joinDateResponse,
            staffResponse,
        ];

        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => console.log('Server started on port 3001'));
