const internQue = name => {
    return topic => {
        if (name.toLowerCase() === "cnu") {
            console.log(`hey ${name}, Explain ${topic}?`);
        } else if (name.toLowerCase() === "punit") {
            console.log(`hey ${name}, Explain ${topic}?`);
        } else if (name.toLowerCase() === "shivani") {
            console.log(`hey ${name}, Explain ${topic}?`);
        } else {
            console.log(`The candidate name is not recognized.`);
        }
    };
};

internQue("CNU")("UI/UX");
internQue("Punit")("ReactJS");