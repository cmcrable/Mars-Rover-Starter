const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  // TEST 7
  // it("constructor sets position and default values for mode and generatorWatts", function () {
  //   let testRover = new Rover(12345);
  //   expect(testRover.position).toBe(12345);
  //   expect(testRover.mode).toBe('NORMAL');
  //   expect(testRover.generatorWatts).toBe(110); // ??
  // });

  // // TEST 8
  // it("response returned by receiveMessage contains the name of the message", function() {
  //   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let message = new Message('Test message with two commands', commands);
  //   let testRover = new Rover(98382);    // Passes 98382 as the rover's position.
  //   let response = testRover.receiveMessage(message);
  //   expect(response.message).toBe('Test message with two commands');
  // });

  // TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let testRover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = testRover.receiveMessage(message);
    console.log("Response:\n", response[0].roverStatus);
    expect(response.results.length).toBe(2);
  });

  // TEST 10

  // it("responds correctly to the status check command", function() {
  //   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let message = new Message('Test message with two commands', commands);
  //   let testRover = new Rover(98382);    // Passes 98382 as the rover's position.
  //   let response = testRover.receiveMessage(message);
  //   console.log("Response:\n", response);
  // });

  // TEST 11

  // TEST 12

  // TEST 13

});
