const animation = {
  frames: ['|', '/', '-', '\\', '|', '/', '-', '\\'],
  interval: 175,
  start: function() {
    for (let i = 0; i < this.frames.length; i++) {
      setTimeout(() => {
        process.stdout.write(`\r${this.frames[i]}  `);
        this.index = (this.index + 1) % this.frames.length;
      }, i * this.interval);
    }
  }
};

animation.start();