module.exports = {
   name: "keywords list for simple reactions",
   aliases: [],
   // Checks if message contains a keyword and reacts accordingly
   async messagefunc(message) {
      if (message.content.toLowerCase().includes("cozy")) {
         message.react("<:blanket:949804834406686740>");
      }
      if (message.content.toLowerCase().includes("coffee")) {
         message.react("<:morecoffee:952910055232126977>");
      }
      if (message.content.toLowerCase().includes("sus")) {
         message.react("<:meruAmongus:949645932083957790>");
      }
      if (message.content.toLowerCase().includes("flare")) {
         message.react("<:ObamaSus:953114696502902795>");
      }
      if (message.content.toLowerCase().includes("yamm")) {
         message.react("<:meruWTF:949645342549352480>");
      }
      if (message.content.toLowerCase().includes("police")) {
         message.react("<:MeruPolice:949651430376095825>");
      }
      if (message.content.toLowerCase().includes("cops")) {
         message.react("<:MeruPolice:949651430376095825>");
      } else return;
   },
};
