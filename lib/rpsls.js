export {rps, rpsls}

function rps(args) {
    const options = ['rock','paper','scissors'];

    let input = args[0];
    const oppontOption = options[Math.floor(Math.random() * options.length)];
    switch (input) {
        case 'rock':
        case 'paper':
        case 'scissors':
            let res = (input === oppontOption) ? 'tie' : (
                (input === 'rock' && oppontOption === 'scissors') || (input === 'paper' && oppontOption === 'rock') || (input === 'scissors' && oppontOption === 'paper')
            ) ? 'win' : 'lose';
            console.log(`{"player":"${input}","opponent":"${oppontOption}","result":"${res}"}`);
            break;
        case undefined:
            input = options[Math.floor(Math.random() * options.length)];
            console.log(`{"player":"${input}"}`);
            break;
    }
    return {
        player: input,
        opponent: oppontOption,
        result: res
    }
}

function rpsls(args) {
    const options = ['rock','paper','scissors','lizard','spock'];

    let input = args[0];
    const oppontOption = options[Math.floor(Math.random() * options.length)];
    switch (input) {
        case 'rock':
        case 'paper':
        case 'scissors':
            let res = (input === oppontOption) ? 'tie' : (
                (input === 'rock' && oppontOption === 'scissors') || (input === 'paper' && oppontOption === 'rock') || (input === 'scissors' && oppontOption === 'paper') || (input === 'rock' && oppontOption === 'lizard') || (input === 'paper' && oppontOption === 'spock') || (input === 'spock' && oppontOption === 'scissors')
            ) ? 'win' : 'lose';
            console.log(`{"player":"${input}","opponent":"${oppontOption}","result":"${res}"}`);
            break;
        case undefined:
            input = options[Math.floor(Math.random() * options.length)];
            console.log(`{"player":"${input}"}`);
            break;
    }
    return {
        player: input,
        opponent: oppontOption,
        result: res
    }
}