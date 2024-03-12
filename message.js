class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;
      if (!this.name) {
         throw Error ("Message Name required.");
      }
      this.commands = commands;
   }
}

module.exports = Message;