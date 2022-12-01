import { scheduleJob } from 'node-schedule';

( async () => {
    scheduleJob('* * * * *', () => {
        console.log('test');
    });
})();
