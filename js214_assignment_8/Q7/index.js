function smartRepeatedLogger(message, interval, duration) {
    let timer;
    let elapsed = 0;
    let isPaused = false;

    function start() {
        timer = setInterval(() => {
            if (!isPaused) {
                console.log(message);
                elapsed += interval;
                if (elapsed >= duration) {
                    clearInterval(timer);
                }
            }
        }, interval);
    }

    start();

    return {
        pause: () => {
            isPaused = true;
        },
        resume: () => {
            isPaused = false;
        }
    };
}

// Example usage
const logger = smartRepeatedLogger("Logging...", 1000, 10000);

setTimeout(() => logger.pause(), 3000);  // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
