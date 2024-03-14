class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {

      let results = [];
      for (let i = 0; i < message.commands.length; i++) {
         let result = {};
         if (message.commands[i].commandType === 'MODE_CHANGE') {
            result.completed = true;
            this.mode = message.commands[i].value;
         } 
         else if (message.commands[i].commandType === 'STATUS_CHECK') {
            result.completed = true;

            result.roverStatus = {};

            result.roverStatus.mode = this.mode;
            result.roverStatus.generatorWatts = this.generatorWatts;
            result.roverStatus.position = this.position;
         } 
         else if (message.commands[i].commandType === 'MOVE') {
            if (this.mode === 'LOW_POWER') {
               result.completed = false;
            }
            else if (this.mode === 'NORMAL') {
               result.completed = true;
               this.position = message.commands[i].value;
            }
         }
         results.push(result);
      };

      return {message: message.name, results: results};
   }
}

module.exports = Rover;

// code to look at below // remove before submitting // add each new command to 'results'; completeds should be true or false except for rover status

// let rover = new Rover(100);
//     let commands = [
//        new Command('MOVE', 4321), // run to move from initial value (100) to this spot
//        new Command('STATUS_CHECK'), // print out the curent status
//        new Command('MODE_CHANGE', 'LOW_POWER'), // be able to change to the given mode; cannot move if in low_power mode
//        new Command('MOVE', 3579),
//        new Command('STATUS_CHECK')
//     ];
//     let message = new Message('TA power', commands);
//     let response = rover.receiveMessage(message);

//     console.log(rover);
//     console.log("/////////////")
//     console.log(response); // works but only shows [Object] for roverStatus object

//     console.log(JSON.stringify(response, null, 2)); //converts output to a JSON format; shows roverStatus object details on console

//     // more tests from studentgradespec

//     console.log(response.message)//.toEqual('TA power');
//     console.log(response.results[0].completed)//.toBeTruthy();
//     console.log(response.results[1].roverStatus.position)//.toEqual(4321);
//     console.log(response.results[2].completed)//.toBeTruthy();
//     console.log(response.results[3].completed)//.toBeFalsy();
//     console.log(response.results[4].roverStatus.position)//.toEqual(4321);
//     console.log(response.results[4].roverStatus.mode)//.toEqual('LOW_POWER');
//     console.log(response.results[4].roverStatus.generatorWatts)//.toEqual(110);